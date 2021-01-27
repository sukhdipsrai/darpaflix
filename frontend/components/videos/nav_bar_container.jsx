import { connect } from "react-redux"
import NavBar from './nav_bar'
import {signOutUser} from '../../actions/actions'

const mstp = (state, ownProps)=>{
    return{
        user: state.session.currentUser
    }
}

const mdtp = dispatch =>{
    return{
        signOutUser: (id) => dispatch(signOutUser(id))
    }
}


export default connect(mstp,mdtp)(NavBar);