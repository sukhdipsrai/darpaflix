import React from 'react';
import {Link} from 'react-router-dom'
class SignIn extends React.Component{
    constructor(props){
        super(props);
    }

    handleSubmit(){
        this.props.signInUser(this.state)
        // console.log("Trying to Login")
    }

    update(field){
        return e=> this.setState({ [field]: e.currentTarget.value})
    }

    render(){
        return(
            <div className="signin-page">
                <Link to="/" > <img src={window.logoUrl}/></Link>
                <div id="sign-in-box">
                    <br/>
                    <form 
                    id="sign-in-form"
                    onSubmit={()=> this.handleSubmit()}
                    >
                        <h2>Sign In</h2>
                        <label>
                            <input
                                type="text"
                                onChange={this.update('email')}
                                placeholder="Email"
                            />
                        </label>
                        <br/>
                        <label>
                            <input
                                type="password"
                                onChange={this.update('password')}
                                placeholder="Password"
                            />
                        </label>
                        <br/>
                        <input
                        id="form-submit"
                        type="submit"
                        value="Sign In">
                        </input>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;