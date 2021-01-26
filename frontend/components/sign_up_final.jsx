import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom'
import { createNewUser } from '../actions/actions'
import {connect} from 'react-redux'




class SignUp extends React.Component{
    constructor(props){
        super(props);
    }

    handleSubmit(){
        this.props.createNewUser(this.props.values).then(this.props.history.push('/browse'));
    }

    render(){
        const {step, email, password} = this.props.values;
        return(
            <div className="signup-page">
                <img src={window.logoUrl}/>
                <Link to="/login"><button>Sign In</button></Link>
                <div id="sign-up-box">
                    <br/>
                    <form 
                    id="sign-up-form"
                    onSubmit={ () => this.handleSubmit() }
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
                        <br/>
                        <label>
                            <input
                                type="password"
                                onChange={this.props.update('password')}
                                placeholder="Password"
                            />
                        </label>
                        <br/>
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


const mstp = (state)=>{
    return{

    }
}

const mdtp = dispatch=>{
    return{
        createNewUser: user => dispatch(createNewUser(user))
    }
}

export default withRouter(connect(mstp,mdtp)(SignUp));