    import React, { Component } from 'react';
    import {Route , Navigate} from 'react-router-dom';
    import { isauthenticated} from './index'

    
    const PrivateRoute = ({children}) => {
    
      return isauthenticated () ?<>{children}</>:<Navigate to = "/" state={{from: location}}/>;

      
    };
    
    export default PrivateRoute;
    