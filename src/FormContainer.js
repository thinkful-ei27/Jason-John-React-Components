import React, { Component } from 'react'
import Checkbox from './components/Checkbox';
import Input from './components/Input';
import Select from './components/Select';
import AboutYou from './components/AboutYou';
import Button from './components/Button';

export default class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        name: '',
        age: '',
        gender: '',
        skills: []
      },
      skillOptions: ['React', 'React Native', 'Redux', 'Mongoose'],
      genderOptions: ["Male", "Female", "Others"]
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
      <div className="form-container">
        <form>
          <h1>this is it</h1>
          <AboutYou />
          <Input
            inputType={"text"}
            title={"Full Name"}
            name={"name"}
            value={this.state.newUser.name}
            placeholder={"Enter your name"}
            handleChange={e => this.handleInput(e)}
          />
          <Select 
            title={'Gender'}
            name={'gender'}
            options={this.state.genderOptions}
            value={this.state.newUser.gender}
            placeholder={'Select Gender'}
            handleChange={e => this.handleInput(e)}
          />
          <Checkbox 
            title={"Skills"}
            name={"skills"}
            options={this.state.skillOptions}
            selectedOptions={this.state.newUser.skills}
            handleChange={(e) => this.handleCheckBox(e)}
          />
          <Button type="submit" name="Submit"/>
          <Button type="button" name="Clear"/>
        </form>
      </div>
    )
  }
}
