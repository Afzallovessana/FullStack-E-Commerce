import React from 'react'
import Header from '../components/Header';
import {  useSelector} from 'react-redux';





const Home = () => {
   const homeData= useSelector ((state) => state.userLoginReducer.loginInfo);
   console.log('homeData' , homeData);

  return (
        <div   >
<Header button="Logout "/>

<div>
<h1>
  Welcome {homeData.name}to E-Commerce
</h1>

</div>


        
      
      
</div>

  )}

      
      
export default Home;
