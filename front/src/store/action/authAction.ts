import { SET_SIGN_UP_SUCCESSFUL, SET_AUTH_FAILED, SET_LOADING, SET_SIGN_IN_SUCCESSFUL, SET_LOGOUT, SET_REFRESH } from "../actionTypes";
import axiosInstance from "../server";
import { Dispatch } from "redux";
import { Types, UserInfo } from "../types";
import axios from "axios";
import { saveTokenInLocalStorage } from "../services"

type User = {
    user: UserInfo[],
    accessToken: string,
    refreshToken: string
};

type Logout = {
    acknowledged: boolean,
}

export const signup = (option: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({
            type: SET_LOADING,
        })
        console.log(option,"option")
        const res = await axios.post<User>("http://localhost:3000/api/v0/signup", option);
        saveTokenInLocalStorage(res.data)
        localStorage.setItem("token", res.data.accessToken)
        dispatch({
            type: SET_SIGN_UP_SUCCESSFUL,
            payload: res.data
        })

    } catch (error) {
        if (axios.isAxiosError(error)) {
            dispatch({
                type: SET_AUTH_FAILED,
                payload: error.response
            })
        } else {
            throw new Error('different error than axios');
        }
    }
}

export const signin = (option: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({
            type: SET_LOADING,
        })
        const res = await axiosInstance.post<User>("http://localhost:3000/api/v0/signin", option);
        saveTokenInLocalStorage(res.data);
        localStorage.setItem("token", res.data.accessToken);
        dispatch({
            type: SET_SIGN_IN_SUCCESSFUL,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: SET_AUTH_FAILED
        })
    }
}

export const logout = () => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({
            type: SET_LOADING,
        })
        const res = await axiosInstance.post<Logout>("http://localhost:3000/api/v0/logout");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        dispatch({
            type: SET_LOGOUT,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: SET_AUTH_FAILED
        })
    }
}

export const refresh = () => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({
            type: SET_LOADING,
        })
        const res = await axiosInstance.get("http://localhost:3000/api/v0/refresh")
        dispatch({
            type: SET_REFRESH,
            payload: res.data
        })
    }
    catch (error) {
        dispatch({
            type: SET_AUTH_FAILED
        })
    }
}