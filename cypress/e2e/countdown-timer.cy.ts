

describe('Countdown Timer', () => {

  it('When Only Seconds is displayed in the counter for the Record', () => {
    cy.visit('');
    Cypress._.times(5, (a) => {
      cy.get('.item > p').eq(a).should('not.have.value', 'm');
    })
  });

  it('When Only Minutes is displayed in the counter for the Record', () => {
    cy.visit('');
    Cypress._.times(5, (a) => {
      // cy.wait(5000)
      cy.get('.item > p').eq(a).should('not.have.value', 's');
    })
    
  });


});
