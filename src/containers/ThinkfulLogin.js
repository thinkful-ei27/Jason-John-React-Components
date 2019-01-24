import React, { Component } from 'react'
import Input from '../components/Input';
import ButtonNew from '../components/ButtonNew';
import './ThinkfulLogin.css';
import DataList from '../components/DataList';

export default class ThinkfulLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
                username: '',
                favoriteStudent: ''
            },
            students: [
                'John Young',
                'Jason Hoffman',
                'Khari Riv',
                'Marwan Alaloosi',
                'Derek Houck',
                'Nick Johnston',
                'Evan Guirino',
                'Mikey Manoguerra',
                'Tyler Crabb',
                'Jordan Heffernan',
                'David Johnson',
                'Peter Ramos'
            ]
        }
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
    
        this.setState(
          prevState => ({
            user: {
              ...prevState.user,
              [name]: value
            }
          })
        ); 
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let userData = this.state.user;

        console.log(`User input data is ${JSON.stringify(userData)}`);
    }

    render() {
        return (
        <div className="top-level-container">
            <form>
                <h3>Sign in to your account</h3>
                <Input 
                    inputType={"email"}
                    title={"Email Address"}
                    name={"email"}
                    value={this.state.user.email}
                    placeholder={"you@example.com"}
                    handleChange={e => this.handleInput(e)}
                />{" "}
                <Input 
                    inputType={'password'}
                    title={'Password'}
                    name={'password'}
                    value={this.state.user.password}
                    handleChange={e => this.handleInput(e)}
                />{" "}
                <DataList 
                    textName={'favoriteStudent'}
                    list={'students'}
                    name={'students'}
                    title={'Students'}
                    id={'students'}
                    value={this.state.user.favoriteStudent}
                    options={this.state.students}
                    handleChange={e => this.handleInput(e)}
                />
                <ButtonNew 
                    action={e => this.handleFormSubmit(e)}
                    title={'Sign in'}
                    name={'signin'}
                />{" "}
            </form>
        </div>
        )
    }
}
