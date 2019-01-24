import React from 'react';
import AboutYou from './components/AboutYou';
import Button from './components/Button';

export default class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  };
  render () {
    return (
      <div className="form-container">
        <form>
          <h1>this is it</h1>
          <AboutYou />
          <Button type="submit" name="Submit"/>
          <Button type="button" name="Clear"/>
        </form>
      </div>
    );
  }
}