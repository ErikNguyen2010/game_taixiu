import { combineReducers, createStore } from "redux";
import { baiTapTaiXiuReducer } from "./reducer/baiTapTaiXiuReducer";

const rootReducer = combineReducers ({
    baiTapTaiXiuReducer
   
});

export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());