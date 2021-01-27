import {connect} from 'react-redux'
import HomePage from './home_page'
const mstp = (state,ownProps)=>{
    return{
        user: state.session.currentUser
    }
}

const mdtp = dispatch=>{
    return{
    }
}

export default connect(mstp,mdtp)(HomePage);