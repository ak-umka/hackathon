import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/rootReducer";

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, middleware);