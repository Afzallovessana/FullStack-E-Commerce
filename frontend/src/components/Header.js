import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';




const Header = (props) => {
    
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Commerce
          </Typography>
          <Typography variant="h7" component="div" >{props.buttonName}</Typography>
          <Button variant='h1' >{props.button}</Button>
           <Button  variant='h1'>Contact Us</Button>

        </Toolbar>
      </AppBar>
    </Box>
  ;

    </div>
  )
}

export default Header
