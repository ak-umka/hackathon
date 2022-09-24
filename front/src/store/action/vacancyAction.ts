import { SET_VACANCY_FAILED, SET_LOADING, SET_VACANCY_SUCCESSFUL } from "../actionTypes";
import axiosInstance from "../server";
import { Types } from "../types";
import { Dispatch } from "redux";

type Vacancy = {
    title: string,
    description: string,
    salary: string,
    email: string,
    phone: string,
    id: string,
}

export const createVacancy = (id: any, options: any) => async (dispatch: Dispatch<Types>) => {
    try {
        dispatch({
            type: SET_LOADING
        })
        const res = await axiosInstance.post<Vacancy>(`http://localhost:3000/api/v0/getSchool/${id}/createVacancy`, options)
        dispatch({
            type: SET_VACANCY_SUCCESSFUL,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SET_VACANCY_FAILED
        })
    }
}

export const deleteVacancy = (id: any, vacancyId: any) => async (dispatch: Dispatch<Types>) => {
    try {
        dispatch({
            type: SET_LOADING
        })
        const res = await axiosInstance.delete<Vacancy>(`http://localhost:3000/api/v0/getSchool/${id}/deleteVacancy/${vacancyId}`)
        dispatch({
            type: SET_VACANCY_SUCCESSFUL,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SET_VACANCY_FAILED
        })
    }
}