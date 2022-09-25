import { SET_LIBRARY_FAILED, SET_LOADING, SET_LIBRARY_SUCCESSFUL } from "../actionTypes";
import axiosInstance from "../server"
import { Types } from "../types";
import { Dispatch } from "redux";
import axios from "axios"

type Library = {
    name: string,
    author: string,
    description: string,
    genre: string,
    book: string,
    id: string,
}

export const createLibrary = (options: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({
            type: SET_LOADING
        })
        const res = await axiosInstance.post<Library>("http://localhost:3000/api/v0/createLibrary", options)
        dispatch({
            type: SET_LIBRARY_SUCCESSFUL,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SET_LIBRARY_FAILED
        })
    }
}

export const getLibraries = () => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({
            type: SET_LOADING
        })
        const res = await axios.get<Library>("http://localhost:3000/api/v0/getLibraries")
        dispatch({
            type: SET_LIBRARY_SUCCESSFUL,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SET_LIBRARY_FAILED
        })
    }
}

export const deleteLibrary = (id: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({
            type: SET_LOADING
        })
        const res = await axiosInstance.delete<Library>(`http://localhost:3000/api/v0/deleteLibrary/${id}`)
        dispatch({
            type: SET_LIBRARY_SUCCESSFUL,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SET_LIBRARY_FAILED
        })
    }
}

