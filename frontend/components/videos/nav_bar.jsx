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
                <ul>
                <Link to="/" > <img src={window.logoUrl}/></Link>
                    <li> Home </li>
                    <li> Movies  </li>
                    <li> MyList </li>
                    <li> Search </li>

                    <li>
                        <button onClick={() => this.props.signOutUser(id)}>logout</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;