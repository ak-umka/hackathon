import { SET_RATING_SUCCESSFUL, SET_RATING_FAILED, SET_LOADING } from "../actionTypes";
import axiosInstance from "../server";
import axios from "axios";
import { Types, Rating } from "../types";
import { Dispatch } from "redux";

type RatingInfo = {
    rating: Rating[]
}

export const getRating = (id: any, ratingId: any) => async (dispatch: Dispatch<Types>) => {
    try {
        dispatch({
            type: SET_LOADING
        })
        const res = await axios.get<RatingInfo>(`http://localhost:3000/api/v0/getSchool/${id}/deleteRating/${ratingId}`)
        dispatch({
            type: SET_RATING_SUCCESSFUL,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SET_RATING_FAILED
        })
    }
}

export const createRating = (id: any, options: any) => async (dispatch: Dispatch<Types>) => {
    try {
        dispatch({
            type: SET_LOADING
        })
        const res = await axiosInstance.post<RatingInfo>(`http://localhost:3000/api/v0/getSchool/${id}/createRating`, options)
        dispatch({
            type: SET_RATING_SUCCESSFUL,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SET_RATING_FAILED
        })
    }
}

export const deleteRating = (id: any, ratingId: any) => async (dispatch: Dispatch<Types>) => {
    try {
        dispatch({
            type: SET_LOADING
        })
        const res = await axiosInstance.delete<RatingInfo>(`http://localhost:3000/api/v0/getSchool/${id}/deleteRating/${ratingId}`)
        dispatch({
            type: SET_RATING_SUCCESSFUL,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SET_RATING_FAILED
        })
    }
}