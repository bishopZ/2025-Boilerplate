describe('Basic E2E Test', () => {
  it('should load the login page', () => {
    cy.visit('/');
    cy.url().should('include', '/login');
    cy.contains('2025 Boilerplate').should('be.visible');
  });

  it('should allow user to login', () => {
    cy.visit('/login');

    // Fill in the login form
    cy.get('input[name="username"]').type('test');
    cy.get('input[name="password"]').type('test');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Should redirect to home page after successful login
    cy.url().should('not.include', '/login');
    cy.contains('Welcome to the 2025 Boilerplate!').should('be.visible');
  });
});

