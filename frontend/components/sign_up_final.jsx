import React from 'react';
import {Link} from 'react-router-dom'
import { createNewUser } from '../actions/actions'

class SignUp extends React.Component{
    constructor(props){
        super(props);
    }

    handleSubmit(){
        createNewUser(this.state)
    }

    render(){
        const {step, email, password} = this.props.values;
        console.log(this.props)
        return(
            <div className="signup-page">
                <img src={window.logoUrl}/>
                <div id="sign-up-box">
                    <br/>
                    <form 
                    id="sign-up-form"
                    onSubmit={()=> this.handleSubmit()}
                    >
                        <h2>Create a password to start your membership.</h2>
                        <h3>Just a few more steps and you're done!</h3>
                        <h3>We hate paperwork, too.</h3>
                        <label>
                            <input
                                type="text"
                                onChange={ ()=> this.props.update('email')}
                                // placeholder="Email"
                                value={email}
                            />
                        </label>
                        <br/>
                        <label>
                            <input
                                type="password"
                                onChange={ () => this.props.update('password')}
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

export default SignUp;