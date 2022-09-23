import { SET_SIGN_UP_SUCCESSFUL, SET_SIGN_UP_FAILED, SET_SIGN_UP_LOADING } from "../actionTypes";
import axiosApiInstance from "../server";
import { Dispatch } from "redux";
import { SignUpTypes, UserInfo } from "../types";
import axios from "axios";
import { saveTokenInLocalStorage } from "../selectors"

type user = {
    user: UserInfo[],
    accessToken: string,
    refreshToken: string
};

export const signup = (option: any) => async (dispatch: Dispatch<SignUpTypes>) => {
    try {
        dispatch({
            type: SET_SIGN_UP_LOADING,
        })
        const res = await axios.post<user>("http://localhost:3001/api/v0/signup", option);
        saveTokenInLocalStorage(res.data)
        localStorage.setItem("token", res.data.accessToken)
        dispatch({
            type: SET_SIGN_UP_SUCCESSFUL,
            payload: res.data
        })

    } catch (error) {
        if (axios.isAxiosError(error)) {
            dispatch({
                type: SET_SIGN_UP_FAILED
            })
        } else {
            throw new Error('different error than axios');
        }
    }
}



