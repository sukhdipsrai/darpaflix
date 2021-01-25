import React from "react"
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <div className="card1">
                    <div className="landing-page bar">
                            <div className="landing-content">      
                            <img src={window.logoUrl} />
                            <Link to="/login"><button>Sign In</button></Link>
                            </div>
                    </div>
                </div>

                <div className="card2">
                    
                </div>

            </div>
        )
    }
}

export default LandingPage;