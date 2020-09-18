import { createStore } from "redux";
import { root as rootReducer } from "./reducers";

const store = createStore(rootReducer)

export default store;
