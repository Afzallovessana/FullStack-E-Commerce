import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { userLoginReducer, userRegisterReducer } from "./Reducers/userReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const reducer = combineReducers({
    userRegisterReducer:userRegisterReducer,
    userLoginReducer:userLoginReducer,

});
const dateFromLocalStorage= localStorage.getItem("loginInfo")?JSON.parse(localStorage.getItem('loginInfo')):null;
// console.log('dateFromLocalStorage' ,dateFromLocalStorage);
const initialState ={
    userLoginReducer:{loginInfo:dateFromLocalStorage}
};
// console.log('initialstate', initialState);
const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));



export default store;