const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
  describe('#principal #term #interest #period', () => {
    let mortgage = null;
    
      beforeEach(() => {
        mortgage = new Mortgage(600000,4.25,30,12);
    
});

it('should have an monthly payment function', () => {
    expect(mortgage.monthlyPayment).to.exist;
  });

it('should return 1389.35', () => {
  expect(mortgage.monthlyPayment).to.equal('2951.64');
});

it('should return 926.23', () => {
  mortgage.principal = 200000
  expect(mortgage.monthlyPayment).to.equal('983.88');
});

it('should return 1454.44', () => {
  mortgage.principal = 670000
  mortgage.term = 15
  expect(mortgage.monthlyPayment).to.equal('5040.27');
});

it('should return 1454.44', () => {
  mortgage.principal = 500000
  mortgage.term = 15
  mortgage.interest = 2.3
  expect(mortgage.monthlyPayment).to.equal('3287.08');
});



  });
});