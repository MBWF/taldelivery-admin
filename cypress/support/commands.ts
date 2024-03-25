declare namespace Cypress {
  interface Chainable<Subject> {
    openNewPlateModal(): Chainable<Subject>;
  }
}

Cypress.Commands.add("openNewPlateModal", () => {
  cy.visit("/pratos");

  const openModalButton = cy.get('[data-testid="open-plates-modal-button"]');

  openModalButton.should("exist");
  openModalButton.click();

  const modal = cy.get('[data-testid="plates-modal"]');
  modal.should("exist");
});
