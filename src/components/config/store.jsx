import {legacy_createStore} from "redux";
import reducer from "./reducers/reducer";

const store = legacy_createStore(reducer)

export default store