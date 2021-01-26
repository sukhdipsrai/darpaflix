import React from "react"
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { signInUser } from '../actions/actions'

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }

    continue() {
        console.log("step")
        this.props.nextStep();
    };

    demoAuth() {
        const user={
            email:"jack",
            password:"daniels"
        }
        this.props.signInUser(user).then(this.props.history.push("/browse"));
    }


    render() {
        return (
            <div>
                <div className="card1">
                    <div className="landing-page bar">
                        <div className="landing-content">
                            <img src={window.logoUrl} />
                            <Link to="/login"><button>Sign In</button></Link>
                            <button onClick={() => this.demoAuth()} >Demo Site</button>
                        </div>
                        <div className="landing-signup-form1">
                            <h1>Unlimited movies, TV shows, and more.</h1>
                            <h3>Watch anywhere. Cancel anytime.</h3>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            {/* <button onClick={ () => this.continue() }>PRESS</button> */}
                            <form
                                id="part1-signup"
                                onSubmit={() => this.props.nextStep()}
                            >
                                <input
                                    type='text'
                                    placeholder='Email address'
                                    onChange={this.props.update('email')}
                                />
                                <input id="submit-button" type="submit" value={"GET STARTED ⟩"} />
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

const mstp = (state, ownProps) => {
    return {
    }
}

const mdtp = dispatch => {
    return {
        signInUser: user=> dispatch(signInUser(user))
    }
}

export default withRouter(connect(mstp,mdtp)(LandingPage)); 