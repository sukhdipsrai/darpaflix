import React from 'react';
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
                    />)
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

export default UserForm;