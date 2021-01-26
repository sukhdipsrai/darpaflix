import React from 'react';
import {Route} from 'react-router-dom';
import  {AuthRoute, ProtectedRoute} from "../util/route_utils" 
import SignInContainer from './sign_in_container';
import UserForm from './user_form'
import HomePageContainer from './home_page'
export default () => (
        <div>
            <Route exact path="/" component={UserForm}/>
            <AuthRoute path="/login" component={SignInContainer}/>
            <ProtectedRoute path="/browse" component={HomePageContainer} />
        </div>
);
