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
                            <div className="landing-signup-form1">
                                <h1>Unlimited movies, TV shows, and more.</h1>
                                <h3>Watch anywhere. Cancel anytime.</h3>
                                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                                <form
                                id="part1-signup">
                                    <input
                                    type='text'
                                    placeholder='Email address'>
                                    </input>
                                    <button>GET STARTED ⟩</button>
                                </form>
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