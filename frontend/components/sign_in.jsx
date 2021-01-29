import React from 'react';
import {Link} from 'react-router-dom'
import * as validator from '../util/validator'
class SignIn extends React.Component{
    constructor(props){
        super(props);
        super(props);
        this.state = {
            error:''
        }
    }

    handleSubmit(){
        this.props.clearLoginError();
        const email = validator.notGarbage(this.state.email)
        const pass = validator.notGarbage(this.state.password)
        let str = ''
        if(!(email && pass)){
            str = "Check Email and/or Password"
        }
        else{
            this.props.signInUser(this.state)

        }
        this.setState( {'error':str})
    }

    update(field){
        return e=> this.setState({ [field]: e.currentTarget.value})
    }

    componentWillUnmount(){
        this.props.clearLoginError();
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
                        <p>{this.props.error}</p>
                        <p>{this.state.error}</p>
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