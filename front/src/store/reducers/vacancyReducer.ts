import { VacancyState } from "../types";
import { SET_VACANCY_FAILED, SET_VACANCY_SUCCESSFUL } from "../actionTypes";

const initialState: VacancyState = {
    vacancy: [],
    error: null
}
const vacancyReducer = (state: VacancyState = initialState, action: any): VacancyState => {
    switch (action.type) {
        case SET_VACANCY_SUCCESSFUL:
            return {
                ...state,
                vacancy: action.payload
            }
        case SET_VACANCY_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default: return { ...state }
    }
}

export default vacancyReducer;