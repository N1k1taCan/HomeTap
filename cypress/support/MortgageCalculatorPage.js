class MortgageCalculatorPage {
    
    get interestRateInput() {
      return cy.get('input[name="rate"]');
    }
  
   
    verifyInterestRateDefaultValue(expectedValue) {
      this.interestRateInput
        .should('be.visible')
        .and('have.value', expectedValue);
    }
  }
  
  export default new MortgageCalculatorPage();