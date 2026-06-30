describe('Mini Project - Complete Test Suite', () => {
  before(() => {
    // Hook: Runs once before all tests
    cy.log('Starting test suite');
  });

  beforeEach(() => {
    // Hook: Runs before each test
    cy.visit('https://the-internet.herokuapp.com/');
  });

  it('performs comprehensive testing', () => {
     // 1. Visit the website (already done in beforeEach)
    
    // 2. Fill out a form
    cy.get('a[href="/login"]').click();
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    // 3. Select values from a dropdown
    cy.visit('/dropdown');
    cy.get('#dropdown').select('Option 1')
      .should('have.value', '1');
    cy.get('#dropdown').select('Option 2')
      .should('have.value', '2');

  });
});
