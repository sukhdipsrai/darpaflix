import {connect} from 'react-redux'
import HomePage from './home_page'
import {signOutUser} from '../actions/actions'
const mstp = (state,ownProps)=>{
    return{
        user: state.session.currentUser,
        test: "StringyString"
    }
}

const mdtp = dispatch=>{
    return{
        signOutUser: (id) => dispatch(signOutUser(id))
    }
}

export default connect(mstp,mdtp)(HomePage);