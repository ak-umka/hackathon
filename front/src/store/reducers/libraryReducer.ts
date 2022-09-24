import { SET_LIBRARY_FAILED, SET_LIBRARY_SUCCESSFUL } from "../actionTypes";
import { LibraryState } from "../types"

const initialState: LibraryState = {
    books: [],
    error: null
}

const libraryReducer = (state: LibraryState = initialState, action: any): LibraryState => {
    switch (action.type) {
        case SET_LIBRARY_SUCCESSFUL:
            return {
                ...state,
                books: action.payload
            }
        case SET_LIBRARY_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default: return { ...state }
    }
}

export default libraryReducer;