import MortgageCalculatorPage from "../support/MortgageCalculatorPage";

describe("Interest Rate Feature Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.zillow.com/mortgage-calculator/");
  });

  it("Acceptance-01-Default interest rate is visible and correct", () => {
    MortgageCalculatorPage.verifyInterestRateValue();
  });

  it("E2E-02-Interest rate should revert to default value after page reload", () => {
    const newRate = "5.5";

    MortgageCalculatorPage.setInterestRate(newRate);

    MortgageCalculatorPage.interestRateInput.should("have.value", newRate);

    MortgageCalculatorPage.reloadPage();

    MortgageCalculatorPage.interestRateInput.should("not.have.value", newRate);
  });

  it("Negative-01-Should show error when entering invalid characters in Interest Rate", () => {
    const invalidRate = "abc";
    const errorMessage = `'${invalidRate}' is not a valid number`;

    MortgageCalculatorPage.setInterestRate(invalidRate);
    cy.get("body").click({ force: true });

    MortgageCalculatorPage.verifyErrorMessage(errorMessage);
  });

  it("Negative-02-Verify behavior for empty input", () => {
    const errorMessage = "Invalid value";

    MortgageCalculatorPage.interestRateInput.clear();
    cy.get("body").click({ force: true });

    MortgageCalculatorPage.verifyErrorMessage(errorMessage);
  });
});
