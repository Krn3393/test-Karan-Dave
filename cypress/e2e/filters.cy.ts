import { createYield } from "typescript";

describe('Category Filters', () => {


  it('Thoroughbred Five records should be displayed', () => {
    cy.visit('');
    cy.get('input.filter-checkbox').eq(1).click();
    cy.get('input.filter-checkbox').eq(2).click();
    Cypress._.times(5, (a) => {
      cy.get('.item>div.race-name').eq(a).should('be.visible');
      cy.get('.item>div.race-name > .race-number').eq(a).should('be.visible');
      cy.get('.item>div.race-name > p').eq(a).should('be.visible');
    })
  });


  it('Greyhound Five records should be displayed', () => {
    cy.visit('');
    cy.get('input.filter-checkbox').eq(0).click();
    // cy.get('input.filter-checkbox').eq(0).click();
    cy.get('input.filter-checkbox').eq(2).click();
    Cypress._.times(5, (a) => {
      cy.get('.item>div.race-name').eq(a).should('be.visible');
      cy.get('.item>div.race-name > .race-number').eq(a).should('be.visible');
      cy.get('.item>div.race-name > p').eq(a).should('be.visible');
    })
  });

  it('Harness Five records should be displayed', () => {
    cy.visit('');
    cy.get('input.filter-checkbox').eq(1).click();
    cy.get('input.filter-checkbox').eq(0).click();
    // cy.get('input.filter-checkbox').eq(1).click();
    Cypress._.times(5, (a) => {
      cy.get('.item>div.race-name').eq(a).should('be.visible');
      cy.get('.item>div.race-name > .race-number').eq(a).should('be.visible');
      cy.get('.item>div.race-name > p').eq(a).should('be.visible');
    })
  });

});
