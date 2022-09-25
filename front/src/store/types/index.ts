import { SET_SIGN_UP_SUCCESSFUL, SET_AUTH_FAILED, SET_LOADING, SET_SIGN_IN_SUCCESSFUL, SET_LOGOUT, SET_REFRESH, SET_SCHOOL_INFO_SUCCESSFUL, SET_SCHOOL_INFO_FAILED, SET_RATING_SUCCESSFUL, SET_RATING_FAILED, SET_LIBRARY_SUCCESSFUL, SET_LIBRARY_FAILED, SET_VACANCY_SUCCESSFUL, SET_VACANCY_FAILED, SET_GROUP_SUCCESSFUL, SET_GROUP_FAILED } from "../actionTypes";

//return signed up data
export interface UserSuccessSignUp {
    type: typeof SET_SIGN_UP_SUCCESSFUL,
    payload: {
        user: UserInfo[],
        accessToken: string,
        refreshToken: string
    }
}

//return user logged out
export interface UserLogout {
    type: typeof SET_LOGOUT,
    payload: {
        acknowledged: boolean,
    }
}

//return user's token was refreshed
export interface UserTokenRefresh {
    type: typeof SET_REFRESH,
    payload: {
        user: UserInfo[],
        accessToken: string,
        refreshToken: string
    }
}

//return signed in data
export interface UserSuccessSignIn {
    type: typeof SET_SIGN_IN_SUCCESSFUL,
    payload: {
        user: UserInfo[],
        accessToken: string,
        refreshToken: string
    }
}

//return successful school data
export interface GetSchoolSuccessful {
    type: typeof SET_SCHOOL_INFO_SUCCESSFUL,
    payload: {
        id: string,
        name: string,
        address: string,
        image: string,
        shortHistory: string,
        teachers: Teacher[],
        direction: string,
        groups: Group[],
        rating: Rating[]
    }
}

//return successful rating data
export interface GetRatingSuccessful {
    type: typeof SET_RATING_SUCCESSFUL,
    payload: { rating: Rating[] }
}

//return successful library data
export interface GetLibrarySuccessful {
    type: typeof SET_LIBRARY_SUCCESSFUL,
    payload: {
        name: string,
        author: string,
        description: string,
        genre: string,
        book: string,
        id: string,
    }
}

//return successful vacancy data
export interface GetVacancySuccessful {
    type: typeof SET_VACANCY_SUCCESSFUL,
    payload: {
        title: string,
        description: string,
        salary: string,
        email: string,
        phone: string,
        id: string,
    }
}

export interface GetGroupSuccessful {
    type: typeof SET_GROUP_SUCCESSFUL,
    payload: {
        group: Group[]
    }
}

//return loading
export interface UserLoading {
    type: typeof SET_LOADING
}

//return authentication was failed
export interface UserFailed {
    type: typeof SET_AUTH_FAILED
}

//return failed school data
export interface GetSchoolFailed {
    type: typeof SET_SCHOOL_INFO_FAILED
}

//return failed rating data
export interface GetRatingFailed {
    type: typeof SET_RATING_FAILED
}

//return failed library data
export interface GetLibraryFailed {
    type: typeof SET_LIBRARY_FAILED
}

//return failed vacancy data
export interface GetVacancyFailed {
    type: typeof SET_VACANCY_FAILED
}

export interface GetGroupFailed {
    type: typeof SET_GROUP_FAILED
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

export type Teacher = {
    id: string,
    firstname: string,
    lastname: string,
    image: string,
    position: string,
    workExperience: string,
}

export type Group = {
    id: string,
    classNumber: number,
    classDirection: string,
    elementaryClass: boolean,
    middleClass: boolean,
    highClass: boolean,
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

export interface RatingState {
    rating: [];
    error: string | null;
}

export interface LibraryState {
    books: [];
    error: string | null;
}

export interface VacancyState {
    vacancy: [];
    error: string | null;
}

export interface GroupState {
    group: [];
    error: string | null;
}

export type Types = UserLoading | UserLogout | UserTokenRefresh | UserSuccessSignUp | UserSuccessSignIn | UserFailed | GetSchoolFailed | GetSchoolSuccessful | GetRatingFailed | GetRatingSuccessful | GetLibrarySuccessful | GetLibraryFailed | GetVacancyFailed | GetVacancySuccessful | GroupState | GetGroupSuccessful | GetGroupFailed;