import React, { Component } from 'react'
import Input from '../components/Input';
import Output from '../components/Output';

export default class InvoicingCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                hours: 0,
                rate: 0
            }
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

    calcRate() {
        const hours = this.state.hours;
        const rate = this.state.rate;
        
    }

    render() {
        return (
        <div className="top-level-container">
            <form oninput="amount.value=parseInt(rate.value)+parseInt(hours.value)">
                <h3>Invoicing Calculator</h3>
                <Input id={'rate'} name={'rate'} type={'number'} min={0}/>
                <Input id={'hours'} name={'hours'} type={'number'} min={0}/>
                <Input />
                <Output id={'amount'} name={'amount'} for={'hours rate'}/>
            </form>
        </div>
        )
    }
}
