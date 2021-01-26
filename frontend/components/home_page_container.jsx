import {connect} from 'react-redux'
import HomePage from './home_page'
import {logoutUser} from '../util/API'
const mstp = (state,ownProps)=>{
    return{
        user: state.session.currentUser,
        test: "StringyString"
    }
}

const mdtp = dispatch=>{
    return{
        logoutUser: (id) => dispatch(logoutUser(id))
    }
}

export default connect(mstp,mdtp)(HomePage);