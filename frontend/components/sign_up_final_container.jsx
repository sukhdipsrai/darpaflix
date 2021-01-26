import {connect} from 'react-redux'
import { createNewUser } from '../actions/actions'
import SignUp from './sign_up_final'

const mstp = (state)=>{
    return{

    }
}

const mdtp = dispatch=>{
    return{
        createNewUser: user => dispatch(createNewUser(user))
    }
}

export default connect(mstp,mdtp)(SignUp)