import { applyMiddleware, legacy_createStore as createStore, Store } from "redux";
import thunk from "redux-thunk";
import { DispatchType, userAction, userState } from "../component/Student.type";
import reducer from "./reducer";
// import reducer from "./reducer";

export const store :Store<userState,userAction>& {dispatch:DispatchType} = createStore(reducer,applyMiddleware(thunk));
