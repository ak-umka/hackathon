import bcrypt from 'bcrypt';

import User from '../models/user-model.js';
import tokenService from './token-service.js';
import UserDto from '../dtos/user-dto.js';
import ApiError from '../exceptions/api-error.js';

class AuthService {
  async signup(email, password, firstname, lastname) {
    const checkUser = await User.findOne({ email: email });
    if (checkUser) {
      throw ApiError.BadRequestError('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 3);
    const user = await User.create({ email, password: hashedPassword, firstname, lastname });

    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { user: userDto, ...tokens };
  }

  async signin(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw ApiError.BadRequestError('User does not exist');
    }
    const IsPassEqual = await bcrypt.compare(password, user.password);
    if (!IsPassEqual) {
      throw ApiError.BadRequestError('Password is incorrect');
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError('Refresh token is required');
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError('Refresh token is invalid');
    }
    const user = await User.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async getUsers() {
    const users = await User.find();
    return users;
  }
}

export default new AuthService();