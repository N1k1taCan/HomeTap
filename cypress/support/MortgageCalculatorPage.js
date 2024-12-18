class MortgageCalculatorPage {
  get interestRateInput() {
    return cy.get('input[name="rate"]');
  }

  get errorMessage() {
    return cy.get(
      "p[class = 'StyledFormHelp-c11n-8-105-0__sc-1rkt9zk-0 guPJnW']"
    );
  }

  verifyInterestRateValue() {
    this.interestRateInput
      .should("be.visible")
      
  }

  setInterestRate(value) {
    this.interestRateInput.clear().type(value);
  }

  verifyErrorMessage(expectedMessage) {
    this.errorMessage.should("be.visible").and("contain.text", expectedMessage);
  }

  reloadPage() {
    cy.reload();
  }
}

export default new MortgageCalculatorPage();
