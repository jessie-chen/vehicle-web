import {combineReducers} from "redux";
import licai from "./licai";
import dummy from "./dummy";
import bus from "./bus";
export default combineReducers({
    bus,
    dummy,
    licai,
});
