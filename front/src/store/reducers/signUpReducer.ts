import { SET_SIGN_UP_SUCCESSFUL, SET_SIGN_UP_FAILED, SET_SIGN_IN_LOADING } from "../actionTypes";
import { AuthState } from "../types";

const initialState: AuthState = {
    pending: false,
    user: [],
    error: null,
    loggedIn: false
}

const signUpReducer = (state: AuthState = initialState, action: any): AuthState => {
    switch (action.type) {
        case SET_SIGN_IN_LOADING:
            return {
                ...state,
                pending: true
            }
        case SET_SIGN_UP_SUCCESSFUL:
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case SET_SIGN_UP_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default:
            return { ...state, pending: false };
    }
}

export default signUpReducer;