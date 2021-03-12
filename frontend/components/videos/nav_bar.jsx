import React from 'react'
import {Link} from 'react-router-dom'


class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const {id, email} = this.props.user;
        return (
            <div>
                
                <Link to="/" > <img src={window.logoUrl}/></Link>
                    <button> Home </button>
                    <button> Movies  </button>
                    <button> MyList </button>
                    <button> Search </button>
                    <button onClick={() => this.props.signOutUser(id)}>logout</button>
            </div>
        )
    }
}

export default NavBar;