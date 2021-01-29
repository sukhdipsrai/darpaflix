import * as API from '../util/API'

export const RECEIVE_USER = `RECEIVE_USER`;
export const REMOVE_USER = 'REMOVE_USER';
export const FAILED_AUTH = 'FAILED_AUTH'
export const FAILED_ACCOUNT_CREATION = 'FAILED_ACCOUNT_CREATION'
export const CLEAR_ACCOUNT_CREATION = 'CLEAR_ACCOUNT_CREATION'
export const CLEAR_AUTH = 'CLEAR_AUTH'

const signIn = (user)=>({
    type: RECEIVE_USER,
    user: user
})

const signOut = (id)=>({
    type: REMOVE_USER,
    id: id
})

const errorLogin = (error)=>({
    type: FAILED_AUTH,
    error: error
})

const errorSignup = (error)=>({
    type: FAILED_ACCOUNT_CREATION,
    error: error
})

const clearSignupErrorAction = ()=>({
    type: CLEAR_ACCOUNT_CREATION
})

const clearLoginErrorAction = ()=>({
    type: CLEAR_AUTH
})

export const createNewUser = user => dispatch =>{
    return API.createUser(user).error((data)=>dispatch(errorSignup(data.responseText))).then( user => dispatch(signIn(user)))
}

export const signInUser = user => dispatch => {
    return API.loginUser(user).error((data)=>dispatch(errorLogin(data.responseText))).then( user => dispatch(signIn(user)));
}

export const signOutUser = id => dispatch => {
    return API.logoutUser(id).then( ()=>dispatch(signOut(id)))
}

export const clearLoginError = () => dispatch=>{
    return dispatch(clearLoginErrorAction())
}

export const clearSignupError = () => dispatch=>{
    return dispatch(clearSignupErrorAction())
}