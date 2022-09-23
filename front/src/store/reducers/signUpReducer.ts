import { SET_SIGN_UP_SUCCESSFUL, SET_AUTH_FAILED, SET_LOADING, SET_SIGN_IN_SUCCESSFUL, SET_LOGOUT } from "../actionTypes";
import { AuthState } from "../types";

const initialState: AuthState = {
    pending: false,
    user: [],
    error: null,
    loggedIn: false
}

const authReducer = (state: AuthState = initialState, action: any): AuthState => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                pending: true
            }
        case SET_SIGN_UP_SUCCESSFUL:
            return {
                ...state,
                user: action.payload,
            }
        case SET_AUTH_FAILED:
            return {
                ...state,
                error: action.payload
            }
        case SET_SIGN_IN_SUCCESSFUL:
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case SET_LOGOUT:
            return {
                ...state,
                loggedIn: false,
                user: []
            }
        default:
            return { ...state, pending: false };
    }
}

export default authReducer;