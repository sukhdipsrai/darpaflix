import React from 'react';
import {connect } from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';

const mstp = (state, ownProps)=>{
    return{
        loggedIn: Boolean(state.session.currentUser)
    }
}

