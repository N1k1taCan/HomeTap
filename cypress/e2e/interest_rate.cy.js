import MortgageCalculatorPage from '../support/MortgageCalculatorPage';

describe('Interest Rate Feature Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.zillow.com/mortgage-calculator/');
    });
  
    it('Default interest rate is visible and correct', () => {
     
      MortgageCalculatorPage.verifyInterestRateDefaultValue('6.717');
    });
  });