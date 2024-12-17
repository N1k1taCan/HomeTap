import MortgageCalculatorPage from "../support/MortgageCalculatorPage";

describe("Interest Rate Feature Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.zillow.com/mortgage-calculator/");
  });

  it("Default interest rate is visible and correct", () => {
    MortgageCalculatorPage.verifyInterestRateValue("6.708");
  });

  it("Interest rate should revert to default value after page reload", () => {
    const defaultRate = "6.708";
    const newRate = "5.5";

    MortgageCalculatorPage.setInterestRate(newRate);

    MortgageCalculatorPage.verifyInterestRateValue(newRate);

    MortgageCalculatorPage.reloadPage();

    MortgageCalculatorPage.verifyInterestRateValue(defaultRate);
  });

  it("Should show error when entering invalid characters in Interest Rate", () => {
    const invalidRate = "abc";
    const errorMessage = `'${invalidRate}' is not a valid number`;

    MortgageCalculatorPage.setInterestRate(invalidRate);
    cy.get("body").click({ force: true });

    MortgageCalculatorPage.verifyErrorMessage(errorMessage);
  });
});
