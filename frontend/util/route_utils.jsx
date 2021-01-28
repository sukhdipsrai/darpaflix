import React from 'react';
import {connect } from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';

const mstp = (state, ownProps)=>{
    return{
        loggedIn: Boolean(state.session.currentUser)
    }
}

const Auth = ({ component: Component, path, loggedIn }) => (
    <Route
      exact
      path={path}
      render={props => (
      loggedIn ? <Redirect to="/browse" /> : <Component {...props} />
      )}
    />
  );
  
  const Protected = ({ component: Component, path, loggedIn }) => (
    <Route
      path={path}
      render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
      )}
    />
  );


export const AuthRoute = withRouter(connect(mstp)(Auth));
export const ProtectedRoute = withRouter(connect(mstp)(Protected));