import { combineReducers } from "redux";
import authReducer from "./authReducer";
import schoolReducer from "./schoolReducer";
import ratingReducer from "./ratingReducer";
import libraryReducer from "./libraryReducer";
import vacancyReducer from "./vacancyReducer";
import groupReducer from "./groupReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    school: schoolReducer,
    rating: ratingReducer,
    library: libraryReducer,
    vacancy: vacancyReducer,
    group: groupReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;