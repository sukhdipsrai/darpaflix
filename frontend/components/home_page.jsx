import React from 'react'

class HomePage extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        const {id, email} = this.props.user

        return(
            <div>
                <h1> {id}</h1>
                <h1>{email}</h1>
            </div>
        )
    }
}

export default HomePage;