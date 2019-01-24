import React, { Component } from 'react'
import Checkbox from './components/Checkbox';
import Input from './components/Input';
import Select from './components/Select';
import AboutYou from './components/AboutYou';
import Button from './components/Button';
import TextArea from './components/TextArea';
import ButtonNew from './components/ButtonNew';

export default class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    const initialState = {
      newUser: {
        name: '',
        age: '',
        gender: '',
        skills: [],
        about: ''
      },
      skillOptions: ['React', 'React Native', 'Redux', 'Mongoose'],
      genderOptions: ["Male", "Female", "Others"]
    }

    return initialState;
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

  handleTextArea(e) {
    console.log('Inside handleTextArea');
    let value = e.target.value;
    this.setState( prevState => ({
      newUser: {...prevState.newUser, about: value}
    }), () => console.log(this.state.newUser)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    console.log(`User input data is ${JSON.stringify(userData)}`);
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState(this.getInitialState())
  }

  render() {
    return (
      <div className="top-level-container">
        <form>
          <h1>this is it</h1>
          {/* <AboutYou /> */}
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
          <TextArea 
            title={'About you.'}
            rows={10}
            value={this.state.newUser.about}
            name={'currentPetInfo'}
            handleChange={e => this.handleTextArea(e)}
            placeholder={'Tell us about yourself'}
          />
          {/* <Button type="submit" name="Submit"/>
          <Button type="button" name="Clear"/> */}
          <ButtonNew 
            action={e => this.handleFormSubmit(e)}
            type={'primary'}
            title={'Submit'}
            name={'submit'}
          />
          <ButtonNew 
            action={e => this.handleClearForm(e)}
            type={'secondary'}
            title={'Clear'}
            name={'clear'}
          />
        </form>
      </div>
    )
  }
}
