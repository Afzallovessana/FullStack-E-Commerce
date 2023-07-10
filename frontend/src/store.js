import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { userLoginReducer, userRegisterReducer } from "./Reducers/userReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const reducer = combineReducers({
    userRegisterReducer:userRegisterReducer,
    userLoginReducer:userLoginReducer,

})

const initialState ={};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));



export default store;