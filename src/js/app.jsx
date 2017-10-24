import React, { Component } from 'react';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      principal:'',
      interestRate:'',
      loanTerm:'',
      period:'',
      monthlyPayment:''
    }
    this.updatePrinciple = this.updatePrinciple.bind(this)
    this.updateInterestRate = this.updateInterestRate.bind(this)
    this.updateLoanTerm = this.updateLoanTerm.bind(this)
    this.updatePeriod = this.updatePeriod.bind(this)
    this.monthlyPayment = this.monthlyPayment.bind(this)

  }


  updatePrinciple (e) {
    e.preventDefault();
    this.setState({principal:e.target.value})
  }

  updateInterestRate (e) {
    this.setState({interestRate:e.target.value})
  }

  updateLoanTerm (e) {
    this.setState({loanTerm:e.target.value})
  }

  updatePeriod (e) {
    this.setState({period:e.target.value})
  }

  monthlyPayment(e) {
      // this getter should return the result of your monthly payment calculation
      // used in a previous assignment.
        e.preventDefault();

        this.state.principal = parseFloat(this.state.principal)
        this.state.interestRate = parseFloat(this.state.interestRate)
        this.state.period = parseFloat(this.state.period)
        let mpr = this.state.interestRate/100/this.state.period
        let nPayments = this.state.loanTerm * 12
        let mPayments = ""

        let top = mpr * Math.pow(1+mpr,nPayments);
        let bottom = Math.pow(1+mpr, nPayments) -1;
        let total = top/bottom;
        mPayments = this.state.principal*total;
      
        console.log(mPayments);
        mPayments = mPayments.toFixed(2);
        
        this.setState({monthlyPayment:mPayments})
    }



  render() {
    console.log(this.state)
    return (
      <div className='App'>
        <h3>Mortgage Calculator</h3>
        <input name='principal' onChange={this.updatePrinciple} value={this.state.principal} />
        <input name='interestRate' onChange={this.updateInterestRate} value={this.state.interestRate} />
        <input name='loanTerm' onChange={this.updateLoanTerm} value={this.state.loanTerm} />
        <select name='period' onChange={this.updatePeriod} value={this.state.period}>
          <option value='12'>Monthly</option>
          <option value='4'>Quarterly</option>
        </select>
        <button id='calculate' onClick={this.monthlyPayment}>Calculate</button>
        <p id='output'>{this.state.monthlyPayment}</p>
      </div>
    );
  }
}
