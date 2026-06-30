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
    
    // 4. Check and uncheck checkboxes
    cy.visit('/checkboxes');
    cy.get('input[type="checkbox"]').first()
      .check().should('be.checked');
    cy.get('input[type="checkbox"]').first()
      .uncheck().should('not.be.checked');
    
    // 5. Select radio buttons
    cy.visit('/radio-buttons');
    cy.get('input[type="radio"]').first()
      .check().should('be.checked');
    
    // 6. Upload a file
    cy.visit('/upload');
    cy.fixture('example.png', 'binary')
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.get('#file-upload').selectFile({
          contents: fileContent,
          fileName: 'example.png',
          mimeType: 'image/png'
        });
      });
    cy.get('#file-submit').click();
    
    // 7. Scroll to a hidden element
    cy.visit('/');
    cy.get('#page-footer').scrollIntoView()
      .should('be.visible');
    
    // 8. Verify a success message
    cy.visit('/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!')
      .and('have.class', 'success');
    
    // 9. Use at least five different assertions
    // Assertion 1: Check visibility
    cy.get('#page-footer').should('be.visible');
    
    // Assertion 2: Check existence
    cy.get('.success').should('exist');
    
    // Assertion 3: Check text content
    cy.get('.success').should('have.text', ' You logged into a secure area!\n');
    
    // Assertion 4: Check attribute
    cy.get('#username').should('have.attr', 'placeholder', 'Username');
    
    // Assertion 5: Check element state
    cy.get('button[type="submit"]').should('be.enabled');
    
    // Assertion 6: Check length
    cy.get('a').should('have.length.greaterThan', 10);
  });

  after(() => {
    // Hook: Runs after all tests
    cy.log('Test suite completed');
  });
});


