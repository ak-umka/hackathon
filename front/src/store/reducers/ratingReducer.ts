import { SET_RATING_SUCCESSFUL, SET_RATING_FAILED } from "../actionTypes";
import { RatingState } from "../types";

const initialState: RatingState = {
    rating: [],
    error: null
}

const ratingReducer = (state: RatingState = initialState, action: any): RatingState => {
    switch (action.type) {
        case SET_RATING_SUCCESSFUL:
            return {
                ...state,
                rating: action.payload
            }
        case SET_RATING_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default: return { ...state }
    }
}

export default ratingReducer