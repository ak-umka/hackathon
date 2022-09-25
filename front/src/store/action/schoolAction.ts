import { SET_SCHOOL_INFO_SUCCESSFUL, SET_SCHOOL_INFO_FAILED, SET_LOADING } from "../actionTypes";
import axiosInstance from "../server";
import { Dispatch } from "redux";
import { Types, Rating, Teacher, Group } from "../types";
import axios from "axios"

type School = {
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

export const getSchools = () => async (dispatch: Dispatch<Types>) => {
    try {
        dispatch({
            type: SET_LOADING
        })
        const res = await axios.get<School>("http://localhost:3000/api/v0/getSchools")
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
        const res = await axios.get<School>(`http://localhost:3000/api/v0/getSchool/${id}`)
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
        const res = await axiosInstance.post<School>("http://localhost:3000/api/v0/createSchool", options)
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
        const res = await axiosInstance.put<School>(`http://localhost:3000/api/v0/updateSchool/${id}`, options)
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
        const res = await axiosInstance.put<School>(`http://localhost:3000/api/v0/deleteSchool/${id}`, options)
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

export const search = (key: any) => async (dispatch: Dispatch<Types>) => {
    try {
        dispatch({
            type: SET_LOADING
        })
        const res = await axios.get(`http://localhost:3000/api/v0/search/${key}`)
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

export const createTeacher = (id: any, options: any) => async (dispatch: Dispatch<Types>) => {
    try {
        dispatch({
            type: SET_LOADING
        })
        const res = await axiosInstance.post<School>(`http://localhost:3000/api/v0/getSchool/${id}createTeacher`, options)
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

export const deleteTeacher = (id: any, teacherId: any) => async (dispatch: Dispatch<Types>) => {
    try {
        dispatch({
            type: SET_LOADING
        })
        const res = await axiosInstance.delete<School>(`http://localhost:3000/api/v0/getSchool/${id}/deleteTeacher/${teacherId}`)
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