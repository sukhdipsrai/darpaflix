import React from 'react'


class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const {id, email} = this.props.user;
        return (
            <div>
                <ul>
                    <li> Netflix Logo </li>
                    <li> Home </li>
                    <li> Movies  </li>
                    <li> MyList </li>
                    <li> Search </li>

                    <li>
                        <button onClick={() => this.props.signOutUser(id)}>logout</button>
                    </li>

                    <li> Profiles </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;