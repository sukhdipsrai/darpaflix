import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import LandingPage from './landing_page';
import SignUp from './sign_up_final'

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            email: '',
            password: ''
        };
        this.update = this.update.bind(this);
    };

    nextStep() {
        const step = this.state.step
        this.setState({
            step: step + 1
        });
    }

    homePage(){
        const step = this.state.step
        this.setState({
            step: 0
        });
    }

    prevStep() {
        const step = this.state.step
        this.setState({
            step: step - 1
        });
    }

    update(field) {
        return (e) => {
            
            this.setState({ [field]: e.target.value })
        }
    }

    render() {
        const { step, email, password } = this.state;
        const values = { email, password }

        switch (step) {
            case 0:
                return (
                    <LandingPage
                        nextStep={() => this.nextStep()}
                        update={this.update}
                        values={values}
                    />)
            case 1:
                return (
                    <SignUp
                        nextStep={() => this.nextStep()}
                        update={(field) => this.update(field)}
                        values={values}
                        homePage={()=>this.homePage()}
                    />)
                    //         <Route exact path="/signup" component={SignUp}/>

            case 2:
                return (
                    <h1>
                        display email and password, enter
                    </h1>
                )
            case 3:
                return (
                    <h1>
                        confirmation, sign user in, ok button redirects
                    </h1>
                )


            default:
                step = 0;
                return (
                    <LandingPage
                        nextStep={() => this.nextStep()}
                        update={() => this.update()}
                        values={values}
                    />)
        }
    }
}

const mstp = (state,ownProps)=>{
    return{}
}

const mdtp = dispatch =>{
    return{}
}
export default connect(mstp,mdtp)(UserForm);