describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3001");

    cy.contains("Edit src/App.tsx and save to reload.");
  });
});
