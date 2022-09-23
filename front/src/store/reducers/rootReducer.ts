import { combineReducers } from "redux";
import signUpReducer from "../reducers/signUpReducer";

const rootReducer = combineReducers({
    signUp: signUpReducer
})

export default rootReducer;