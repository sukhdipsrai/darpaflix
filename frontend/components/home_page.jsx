import React from 'react'
import NavBarContainer from './videos/nav_bar_container'
import MediaTile from './media_tile'
import * as API from '../util/API' 
class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            test: null
        }
        
    }
    componentDidMount(){
        this.state.test = API.testFetchPhoto();
        debugger;
    }

    render(){
        const {id, email} = this.props.user;
        const elements = new Array(1).fill(0);
        let homepageContent = elements.map( (ele,index)=>
        {return (<MediaTile key={index} ></MediaTile>)})

        return(
            <div className="home-page">
                <NavBarContainer/>
                <div className="media-tile-container">
                {homepageContent}
                {this.state.test}
                </div>

            </div>
        )
    }
}

export default HomePage;