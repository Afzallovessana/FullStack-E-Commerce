import {USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAILURE,USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAILURE} from '../Constants/userConstants';
import axios from "axios";


export const register =(name, email, password,about, role) => async(dispatch) =>{
try {
    dispatch({
    type:USER_REGISTER_REQUEST,

    })
    const config ={
headers:{
    Accept:'application/json',
    "content-type":"application/json",
},

    };
   const data = await axios.post('http://localhost:8000/api/users/register/p',{name, email, password,about, role},config);
   dispatch({
    type:USER_REGISTER_SUCCESS,
    payload:data,
    result:"user created"
   })
   console.log('data from Api', data);
} catch (error) {
    dispatch({
type:USER_REGISTER_FAILURE,
payload:error,

    })
    
}

}

export const login =(email, password) => async(dispatch) =>{
    console.log(email, password);
    try {

        dispatch({
        type:USER_LOGIN_REQUEST,
    
        })
        const config ={
    headers:{
        Accept:'application/json',
        "content-type":"application/json",
    },
    
        };
       const data = await axios.post('http://localhost:8000/api/users/login/s',{email, password},config);
       dispatch({
        type:USER_LOGIN_SUCCESS,
        payload:data,
       })
       localStorage.setItem('loginInfo',JSON.stringify(data));
    } catch (error) {
        dispatch({
    type:USER_LOGIN_FAILURE,
    payload:error,
    
        })
        
    }
    
    }