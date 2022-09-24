import { SET_SCHOOL_INFO_SUCCESSFUL, SET_SCHOOL_INFO_FAILED, SET_TEACHER_INFO, SET_LOADING } from "../actionTypes";
import axiosInstance from "../server";
import { Dispatch } from "redux";
import { Types, Rating } from "../types";
import axios from "axios"

type School = {
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

export const getSchools = () => async (dispatch: Dispatch<Types>) => {
    try {
        dispatch({
            type: SET_LOADING
        })
        const res = await axios.get<School>("http://localhost:3001/api/v0/getSchools")
        dispatch({
            type: SET_SCHOOL_INFO_SUCCESSFUL,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SET_SCHOOL_INFO_FAILED
        })
    }
}

export const getSchoolId = (id: any) => async (dispatch: Dispatch<Types>) => {
    try {
        dispatch({
            type: SET_LOADING
        })
        const res = await axios.get<School>(`http://localhost:3001/api/v0/getSchool/${id}`)
        dispatch({
            type: SET_SCHOOL_INFO_SUCCESSFUL,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SET_SCHOOL_INFO_FAILED
        })
    }
}

export const createSchool = (options: any) => async (dispatch: Dispatch<Types>) => {
    try {
        dispatch({
            type: SET_LOADING
        })
        const res = await axiosInstance.post<School>("http://localhost:3001/api/v0/createSchool", options)
        dispatch({
            type: SET_SCHOOL_INFO_SUCCESSFUL,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SET_SCHOOL_INFO_FAILED
        })
    }
}


export const updateSchoolId = (id: any, options: any) => async (dispatch: Dispatch<Types>) => {
    try {
        dispatch({
            type: SET_LOADING
        })
        const res = await axiosInstance.put<School>(`http://localhost:3001/api/v0/updateSchool/${id}`, options)
        dispatch({
            type: SET_SCHOOL_INFO_SUCCESSFUL,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SET_SCHOOL_INFO_FAILED
        })
    }
}

export const deleteSchoolId = (id: any, options: any) => async (dispatch: Dispatch<Types>) => {
    try {
        dispatch({
            type: SET_LOADING
        })
        const res = await axiosInstance.put<School>(`http://localhost:3001/api/v0/deleteSchool/${id}`, options)
        dispatch({
            type: SET_SCHOOL_INFO_SUCCESSFUL,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SET_SCHOOL_INFO_FAILED
        })
    }
}