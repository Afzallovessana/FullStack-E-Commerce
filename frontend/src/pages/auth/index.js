import { useSelector } from 'react-redux';

// if the data ia inside then return true else false
export const isauthenticated = () => {
    const homeData= useSelector ((state) => state.userLoginReducer.loginInfo);
if(typeof window == 'undefined' ){
    return false;

}
else if (homeData){
    return true;
}
else{
    return false;
}
}


