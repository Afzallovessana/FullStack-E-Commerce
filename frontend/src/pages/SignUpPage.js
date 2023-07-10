import React, {useState} from 'react';
import Header from '../components/Header';
import {Styledcard,StyledDiv,StyledFormDiv,StyledBox} from './Styled'
import { CardContent,Button,CardActions,TextField, FormControl,Typography,InputLabel,Select,MenuItem } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';



const SignUpPage = () => {
    const dispatch=useDispatch();
    const navigate = useNavigate();
const [formData, setFormData] = useState({});
console.log('formData',formData);
const registerData = useSelector((state) => state.userRegisterReducer.userInfo);
console.log('registerData', registerData);




const handleChange = (event) => {
    const {name, value} =event.target;
    setFormData((prevState) => ({

        ...prevState,
        [name] :value
    }) );
};


const handleSubmit = (event) => {
    event.preventDefault();
    const {name,email,password,about,role}=formData;
    console.log('HandleSubmitSignup',formData);
    dispatch(register(name,email,password,about,role));
    console.log('pass', password);
    navigate('/');

}
    
  return (
    <div>
      <Header buttonName="Login"/>
      <StyledDiv>
        <Styledcard>
    
      <CardContent >
        <Typography variant='h6'>
            Please Enter Your Details To SignUp
 </Typography>
 <StyledFormDiv>
 <FormControl sx={{marginTop:'20px'}}>
        <TextField
          required
          id="outlined-required"
          label="Full Name"
          name="name"
          onChange={handleChange}
        />
        

        </FormControl>
        <FormControl sx={{marginTop:'20px'}}>
        <TextField
          required
          id="outlined-required"
          label="email"
          name="email"
          onChange={handleChange}
        />
        

        </FormControl>
        
        <FormControl sx={{marginTop:'20px'}}>

    
        <TextField
          required
          id="outlined-required"
          label="Password"
          name="password"
          onChange={handleChange}
        />

        </FormControl>

        <FormControl sx={{marginTop:'20px'}}>
        <TextField
          required
          id="outlined-required"
          label="About"
          name="About"
          onChange={handleChange}
        />
        
</FormControl>
</StyledFormDiv>
 <StyledBox >
<FormControl sx={{    width: '24vw'}}>
        <InputLabel id="demo-simple-select-error-label">
          Role
        </InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          label="Role"
          name='role'
          onChange={handleChange}
        >
          <MenuItem value={0}>User</MenuItem>
          <MenuItem value={1}>Admin</MenuItem>
        </Select>


      </FormControl>
      </StyledBox>
        

        
        
      </CardContent>
      <CardActions sx={{margin:'center'}} >
        <Button variant="contained" size="small" sx={{marginLeft:'95px'}} onClick={handleSubmit}>SignUp</Button>
        <Button variant="contained" size="small" >Reset</Button>
      </CardActions>
    </Styledcard></StyledDiv>


    </div>
  )
  }
  export default SignUpPage;