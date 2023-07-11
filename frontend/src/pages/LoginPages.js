import React from 'react'
import { useState , useEffect} from 'react';
import Header from '../components/Header';
import {Styledcard,StyledDiv,StyledFormDiv} from './Styled'
import { CardContent,Button,CardActions,TextField, FormControl,Typography } from '@mui/material'
import {  useDispatch , useSelector} from 'react-redux';
import { login } from '../actions/userActions';
import { Link, useNavigate } from 'react-router-dom';




const LoginPages = () => {
    const dispatch=useDispatch();
    const [formData, setFormData]=useState({});
    console.log('formdata from login' ,formData);
    const loginData = useSelector((state) => state.userLoginReducer.loginInfo);
    console.log('loginData',loginData);

// UseEffect helps you to render Component again whgen loginData changed

useEffect=(( ) =>{ 
  const navigate = useNavigate();
  if(loginData?.role === 0){
navigate('/home')

  }
  else if (loginData?.role ===1)
  
  {
    navigate('/admin-dashboard')
  }
  else{navigate('/signup')}
  
});
    const handleChange = (event) => {
        const {name, value} =event.target;
        setFormData((prevState) => ({
    
            ...prevState,
            [name] :value
        }) );
    };
const handleSubmit= (e)=>{
e.preventDefault();
console.log('formData huandleSubmitLogin', formData);
const{email,password}=formData;
// console.log('email', email);
// console.log('pass', password);

dispatch(login(email,password));



}


  return (
        <div   >
      
      <Header buttonName="Login Issue "/>

      
      <StyledDiv>
        <Styledcard>
    
      <CardContent >
        <Typography variant='h6'>
            Please Enter Your Login Details
 </Typography>
 <StyledFormDiv>
        <FormControl sx={{marginTop:'20px'}}>
        <TextField
          required
          id="outlined-required"
          name='email'
          label="email"
          defaultValue=""
          onChange={handleChange}
        />
        

        </FormControl>
        
        <FormControl sx={{marginTop:'20px'}}>

    
        <TextField
          required
          id="outlined-required"
          name='password'
          label="password"
          defaultValue=""
          onChange={handleChange}
        />

        </FormControl>
        </StyledFormDiv>
      </CardContent>
      <CardActions >
        <Button variant="contained" size="small"  onClick={handleSubmit} sx={{marginLeft:'35px'}}>Login</Button>
        <Link to = "/signup">
        <Button variant="contained" size="small"sx={{marginLeft:'47px'}} >Sign Up Here  </Button>
       </Link>
      </CardActions>
    </Styledcard></StyledDiv>
    </div>

  )
}

export default LoginPages;
