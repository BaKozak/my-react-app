describe('Basic tests', () => {
  beforeEach('visit main site', () => {
    cy.visit(`/`);
  });

  it('should check url', () => {
    cy.url().should('equal', `${Cypress.config().baseUrl}/`);
  })
});