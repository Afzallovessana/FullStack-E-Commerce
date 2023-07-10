import React from 'react'
import { useState } from 'react';
import Header from '../components/Header';
import {Styledcard,StyledDiv,StyledFormDiv} from './Styled'
import { CardContent,Button,CardActions,TextField, FormControl,Typography } from '@mui/material'
import {  useDispatch , useSelector} from 'react-redux';
import { login } from '../actions/userActions';



const LoginPage = () => {
    const dispatch=useDispatch();
    const [formData, setFormData]=useState({});
    console.log('formdata from login' ,formData);

    const loginData = useSelector((state) => state.userLoginReducer.loginInfo);

    console.log('loginData',loginData);


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
      <Header buttonName="Signup"/>

      
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
        <Button variant="contained" size="small" sx={{marginLeft:'80px'}} onClick={handleSubmit} >Login</Button>
        <Button variant="contained" size="small" >Reset </Button>
      </CardActions>
    </Styledcard></StyledDiv>
    </div>

  )
}

export default LoginPage;
