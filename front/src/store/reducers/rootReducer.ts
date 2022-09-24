import { combineReducers } from "redux";
import authReducer from "./authReducer";
import schoolReducer from "./schoolReducer";
import ratingReducer from "./ratingReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    school: schoolReducer,
    rating: ratingReducer
})

export default rootReducer;