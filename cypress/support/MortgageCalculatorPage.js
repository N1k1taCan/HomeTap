class MortgageCalculatorPage {
    
    get interestRateInput() {
      return cy.get('input[name="rate"]');
    }
  
   
    verifyInterestRateValue(expectedValue) {
      this.interestRateInput
        .should('be.visible')
        .and('have.value', expectedValue);
    }

    setInterestRate(value) {
        this.interestRateInput.clear().type(value);
      }

      reloadPage() {
        cy.reload();
      }
  }

  
  
  export default new MortgageCalculatorPage();