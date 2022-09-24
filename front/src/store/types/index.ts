import { SET_SIGN_UP_SUCCESSFUL, SET_AUTH_FAILED, SET_LOADING, SET_SIGN_IN_SUCCESSFUL, SET_LOGOUT, SET_REFRESH, SET_SCHOOL_INFO_SUCCESSFUL, SET_SCHOOL_INFO_FAILED, SET_TEACHER_INFO } from "../actionTypes";

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

export interface UserTokenRefresh {
    type: typeof SET_REFRESH,
    payload: {
        user: UserInfo[],
        accessToken: string,
        refreshToken: string
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

export interface GetSchoolSuccessful {
    type: typeof SET_SCHOOL_INFO_SUCCESSFUL,
    payload: {
        id: string,
        name: string,
        address: string,
        image: string,
        shortHistory: string,
        teachers: [],
        direction: string,
        countClasses: number,
        rating: Rating[]
    }
}

export interface UserLoading {
    type: typeof SET_LOADING
}

export interface UserFailed {
    type: typeof SET_AUTH_FAILED
}

export interface GetSchoolFailed {
    type: typeof SET_SCHOOL_INFO_FAILED
}

export type UserInfo = {
    email: string,
    id: string,
    firstname: string,
    lastname: string
}

export type Rating = {
    id: string,
    rating: number,
    comment: string,
    userId: UserInfo[]
}

export interface AuthState {
    pending: boolean;
    user: [];
    error: string | null;
    loggedIn: boolean
}

export interface SchoolState {
    school: [];
    teacher: []
    error: string | null;
}

export type Types = UserLoading | UserLogout | UserTokenRefresh | UserSuccessSignUp | UserSuccessSignIn | UserFailed | GetSchoolFailed | GetSchoolSuccessful;
