module.exports = class Mortgage {
    constructor(principal, interest, term, period) {
      this.principal = principal;
      this.interest = interest;
      this.term = term;
      this.period = period;
    }
  
    get monthlyPayment() {
      // this getter should return the result of your monthly payment calculation
      // used in a previous assignment.
        this.principal = parseFloat(this.principal)
        this.interest = parseFloat(this.interest)
        this.period = parseFloat(this.period)
        let mpr = this.interest/100/this.period
        let nPayments = this.term * 12
        let mPayments = ""

        let top = mpr * Math.pow(1+mpr,nPayments);
        let bottom = Math.pow(1+mpr, nPayments) -1;
        let total = top/bottom;
        mPayments = this.principal*total;
      
        console.log(mPayments);
        mPayments = mPayments.toFixed(2);
        
        return mPayments
    }
  }