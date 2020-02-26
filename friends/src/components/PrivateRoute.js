import React from 'react';
import {Route, Redirect} from 'react-router-dom'

//has the same API as <Route/>
//renders a <Route /> and passes al the props through to it
// checks if the user is authenticated, if they are, it renders the component prop. if not, it redirects to login

//rest operator looks alot like spread operator
const PrivateRoute = ({ component: Component, ...rest }) => {
    
    
  const token = window.localStorage.getItem("token");
return (
    <Route
      {...rest}
      render={props =>
        token? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
)
    
  
};

  export default PrivateRoute