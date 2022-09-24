import { SET_SCHOOL_INFO_SUCCESSFUL, SET_SCHOOL_INFO_FAILED } from "../actionTypes";
import { SchoolState } from "../types";

const initialState: SchoolState = {
    school: [],
    teacher: [],
    error: null
}

const schoolReducer = (state: SchoolState = initialState, action: any): SchoolState => {
    switch (action.type) {
        case SET_SCHOOL_INFO_SUCCESSFUL:
            return {
                ...state,
                school: action.payload
            }
        case SET_SCHOOL_INFO_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default: return { ...state }
    }
}

export default schoolReducer