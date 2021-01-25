import * as API from '../util/API'

export const RECEIVE_USER = `RECEIVE_USER`;
export const REMOVE_USER = 'REMOVE_USER';

const signIn = (user)=>({
    type: RECEIVE_USER,
    user: user
})

const signOut = (id)=>({
    type: REMOVE_USER,
    id: id
})

export const createNewUser = user => dispatch =>{
    return API.createUser(user).then( user => dispatch(signIn(user)))
}

export const signInUser = user => dispatch => {
    return API.loginUser(user).then( user => dispatch(signIn(user)))
}

export const signOutUser = id => dispatch => {
    return API.logoutUser(id).then( ()=>dispatch(signOut(id)))
}