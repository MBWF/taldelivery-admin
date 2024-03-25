describe("plates page", () => {
  it("should open creation of new plate modal", () => {
    cy.openNewPlateModal();
  });

  it("create a new plate", () => {
    cy.openNewPlateModal();

    cy.get("input[name=name]").type("Coca Zero");
    cy.get("input[name=price]").type("5.00");
    cy.get("button").click();
  });
});
