import React from 'react'
import NavBarContainer from './videos/nav_bar_container'
import MediaTile from './media_tile'
class HomePage extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        const {id, email} = this.props.user;
        const elements = new Array(50).fill(0);
        let homepageContent = elements.map( (ele)=>
        {return (<MediaTile/>)})
        debugger;
        return(
            <div className="home-page">
                <NavBarContainer/>
                {homepageContent}
            </div>
        )
    }
}

export default HomePage;