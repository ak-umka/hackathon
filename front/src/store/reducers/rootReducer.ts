import { combineReducers } from "redux";
import authReducer from "./authReducer";
import schoolReducer from "./schoolReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    school: schoolReducer
})

export default rootReducer;