import React, { Component } from 'react'
import Checkbox from './components/Checkbox';
import Input from './components/Input';

export default class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        name: '',
        skills: []
      },
      skillOptions: ['React', 'React Native', 'Redux', 'Mongoose']
    }
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;

    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }), () => console.log(this.state.newUser)
    );
  }

  handleCheckBox(e) {
    // get new selection from user input
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection]
    }

    this.setState(prevState => ({
      newUser: {...prevState.newUser, skills: newSelectionArray}
    }));
  }

  render() {
    return (
        <form>
          <Input
            inputType={"text"}
            title={"Full Name"}
            name={"name"}
            value={this.state.newUser.name}
            placeholder={"Enter your name"}
            handleChange={e => this.handleInput(e)}
          />
          <Checkbox 
            title={"Skills"}
            name={"skills"}
            options={this.state.skillOptions}
            selectedOptions={this.state.newUser.skills}
            handleChange={(e) => this.handleCheckBox(e)}
          />
        </form>
    )
  }
}
