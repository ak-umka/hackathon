import { combineReducers } from "redux";
import authReducer from "../reducers/signUpReducer";

const rootReducer = combineReducers({
    auth: authReducer
})

export default rootReducer;