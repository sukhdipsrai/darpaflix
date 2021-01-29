import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'
import { createNewUser, clearSignupError } from '../actions/actions'
import { connect } from 'react-redux'
import * as validatorApi from '../util/validator'



class SignUp extends React.Component {
    constructor(props) {
        
        super(props);
        this.state = {
            error:''
        }
    }

    handleSubmit() {
        this.props.clearSignupError()
        const email = validatorApi.emailValidator(this.props.values.email);
        const pass = validatorApi.passwordValidator(this.props.values.password)
        let str = ''
        if (!(pass && email)) {
            if(!pass) str+= "Password must be at least 6 characters long.\n"
            if(!email) str += "Invalid E-Mail format.\n"
        }
        else {
            this.props.createNewUser(this.props.values)
            if (this.error === null) {
                this.props.history.push('/browse')
            }
        }
        this.setState( {'error':str})
    }

    componentWillUnmount() {
        this.props.clearSignupError()
    }

    render() {
        const { step, email, password } = this.props.values;
        return (
            <div className="signup-page">
                <img className="clickable" src={window.logoUrl} onClick={() => this.props.homePage()} />
                <Link to="/login"><button className="clickable">Sign In</button></Link>
                <div id="sign-up-box">
                    <br />
                    <form
                        id="sign-up-form"
                        onSubmit={() => this.handleSubmit()}
                    >
                        <h2>Create a password to start your membership.</h2>
                        <h3>Just a few more steps and you're done!</h3>
                        <h3>We hate paperwork, too.</h3>
                        <label>
                            <input
                                type="text"
                                onChange={this.props.update('email')}
                                placeholder="Email"
                                value={email}
                            />
                        </label>
                        <br />
                        <label>
                            <input
                                type="password"
                                onChange={this.props.update('password')}
                                placeholder="Password"
                            />
                        </label>
                        <br />
                        <p>{this.props.error}</p>
                        <p>{this.state.error}</p>
                        <input
                            id="form-submit"
                            type="submit"
                            value="Continue">
                        </input>
                    </form>
                </div>
            </div>
        )
    }
}


const mstp = (state) => {
    return {
        error: state.errors.signup
    }
}

const mdtp = dispatch => {
    return {
        createNewUser: user => dispatch(createNewUser(user)),
        clearSignupError: () => dispatch(clearSignupError())
    }
}

export default withRouter(connect(mstp, mdtp)(SignUp));