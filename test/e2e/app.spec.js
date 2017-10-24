const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

app.listen(8888);

const url = 'http://localhost:8888';

const nightmare = new Nightmare();
let pageObject = null;

describe('End to End Tests', () => {
  let pageObject = null;

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });

  it('should contain a <h3> element for the page title', () => 
  pageObject
    .evaluate(() => document.querySelector('h3').innerText)
    .then(headerText => {
      expect(headerText).to.not.be.null;
      expect(headerText).to.equal('Mortgage Calculator');
    })
);

it('should correctly calculate mortgage', () =>
pageObject
.wait()
.type('input[name=principal]', 300000)
.type('input[name=interestRate]', 3.75)
.type('input[name=loanTerm]', 30)
.select('select[name=period]', 12)
.click('button#calculate')
.wait('#output')
.evaluate(() => document.querySelector('#output').innerText)
.then((outputText) => {
  expect(outputText).to.equal('1389.35');
})
).timeout(6500);

it('should correctly calculate mortgage', () =>
pageObject
.wait()
.type('input[name=principal]', 432465)
.type('input[name=interestRate]', 3.55)
.type('input[name=loanTerm]', 30)
.select('select[name=period]', 12)
.click('button#calculate')
.wait('#output')
.evaluate(() => document.querySelector('#output').innerText)
.then((outputText) => {
  expect(outputText).to.equal('1954.05');
})
).timeout(6500);

it('should correctly calculate mortgage', () =>
pageObject
.wait()
.type('input[name=principal]', 754000)
.type('input[name=interestRate]', 2.69)
.type('input[name=loanTerm]', 15)
.select('select[name=period]', 12)
.click('button#calculate')
.wait('#output')
.evaluate(() => document.querySelector('#output').innerText)
.then((outputText) => {
  expect(outputText).to.equal('5095.31');
})
).timeout(6500);


it('should correctly calculate mortgage', () =>
pageObject
.wait()
.type('input[name=principal]', 754000)
.type('input[name=interestRate]', 2.69)
.type('input[name=loanTerm]', 15)
.select('select[name=period]', 4)
.click('button#calculate')
.wait('#output')
.evaluate(() => document.querySelector('#output').innerText)
.then((outputText) => {
  expect(outputText).to.equal('7236.12');
})
).timeout(6500);

it('should correctly calculate mortgage', () =>
pageObject
.wait()
.type('input[name=principal]', 1250350)
.type('input[name=interestRate]', 1.99)
.type('input[name=loanTerm]', 30)
.select('select[name=period]', 12)
.click('button#calculate')
.wait('#output')
.evaluate(() => document.querySelector('#output').innerText)
.then((outputText) => {
  expect(outputText).to.equal('4615.29');
})
).timeout(6500);

it('should correctly calculate mortgage', () =>
pageObject
.wait()
.type('input[name=principal]', 124000)
.type('input[name=interestRate]', 4.67)
.type('input[name=loanTerm]', 30)
.select('select[name=period]', 12)
.click('button#calculate')
.wait('#output')
.evaluate(() => document.querySelector('#output').innerText)
.then((outputText) => {
  expect(outputText).to.equal('640.88');
})
).timeout(6500);


  // This is where your code is going to go
})