# Mortgage Calculator - Cypress Automation Tests

This project contains end-to-end tests for the mortgage calculator on Zillow using Cypress.

## Project Setup

To get started with this project:

1. Clone the repository:
   git clone https://github.com/N1k1taCan/HomeTap.git
2. Install dependencies: 
   npm install
3. Run Cypress: 
   npx cypress open
4. Or run tests in headless mode: 
   npx cypress run

### Tests
This project contains the following tests:

1. Default Interest Rate Value: Verifies that the default interest rate is displayed correctly on the page.
2. ...
These tests can be found in the cypress/e2e/ directory.

#### Future Considerations

1.  As the application changes (e.g., UI changes, new features), selectors in the Page Object Model may need to be updated. It’s important to maintain the test scripts and page objects to reflect these changes.
2. As the test suite grows, we may notice performance degradation in the tests. It’s crucial to periodically review and optimize the tests for better performance.