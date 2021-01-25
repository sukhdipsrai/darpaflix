import React from 'react';
import {Route} from 'react-router-dom';
// import  {AuthRoute, ProtectedRoute} from "write this util api" 
import SignInContainer from './sign_in_container';
import LandingPage from './landing_page'

export default () => (
        <div>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/login" component={SignInContainer}/>
            {/* ROUTES GO HERE, AUTHROUTE AS WELL */}
        </div>
);
