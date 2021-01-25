import {connect} from 'react-redux'
import { signInUser } from '../actions/actions'
import SignIn from './sign_in'

const mstp = ()=>{
    return{

    }
}

const mdtp = dispatch=>{
    return{
        signInUser: user => dispatch(signInUser(user))
    }
}

export default connect(mstp,mdtp)(SignIn)