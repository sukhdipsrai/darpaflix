import React from 'react'
import NavBarContainer from './videos/nav_bar_container'
class HomePage extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        const {id, email} = this.props.user;

        return(
            <div className="home-page">
                <NavBarContainer/>
                <h1> {id}</h1>
                <h1>{email}</h1>
            </div>
        )
    }
}

export default HomePage;