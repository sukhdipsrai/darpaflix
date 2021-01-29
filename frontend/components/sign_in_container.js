import {connect} from 'react-redux'
import { signInUser, clearLoginError} from '../actions/actions'
import SignIn from './sign_in'

const mstp = (state)=>{
    return{
        error: state.errors.login
    }
} 

const mdtp = dispatch=>{
    return{
        signInUser: user => dispatch(signInUser(user)),
        clearLoginError: ()=> dispatch(clearLoginError())
    }
}

export default connect(mstp,mdtp)(SignIn)