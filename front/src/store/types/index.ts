import { SET_SIGN_UP_SUCCESSFUL, SET_AUTH_FAILED, SET_LOADING, SET_SIGN_IN_SUCCESSFUL, SET_LOGOUT } from "../actionTypes";

export interface UserSuccessSignUp {
    type: typeof SET_SIGN_UP_SUCCESSFUL,
    payload: {
        user: UserInfo[],
        accessToken: string,
        refreshToken: string
    }
}

export interface UserLogout {
    type: typeof SET_LOGOUT,
    payload: {
        acknowledged: boolean,
    }
}

export interface UserSuccessSignIn {
    type: typeof SET_SIGN_IN_SUCCESSFUL,
    payload: {
        user: UserInfo[],
        accessToken: string,
        refreshToken: string
    }
}

export interface UserLoading {
    type: typeof SET_LOADING
}

export interface UserFailed {
    type: typeof SET_AUTH_FAILED
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

export type AuthTypes = UserLoading | UserLogout | UserSuccessSignUp | UserSuccessSignIn | UserFailed;