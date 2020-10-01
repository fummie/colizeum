import { createStore } from "redux";
import { root as rootReducer } from "./reducers/root";

const store = createStore(rootReducer)

export default store;
