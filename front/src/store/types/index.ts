import { SET_SIGN_UP_SUCCESSFUL, SET_SIGN_UP_FAILED, SET_SIGN_UP_LOADING } from "../actionTypes";

export interface UserSuccess {
    type: typeof SET_SIGN_UP_SUCCESSFUL,
    payload: {
        user: UserInfo[],
        accessToken: string,
        refreshToken: string
    }
}

export interface UserLoading {
    type: typeof SET_SIGN_UP_LOADING
}

export interface UserFailed {
    type: typeof SET_SIGN_UP_FAILED
}

export type UserInfo = {
    email: string,
    id: string,
    firstname: string,
    lastname: string
}

export interface AuthState {
    pending: boolean;
    user: [];
    error: string | null;
    loggedIn: boolean
}

export type SignUpTypes = UserLoading | UserSuccess | UserFailed;