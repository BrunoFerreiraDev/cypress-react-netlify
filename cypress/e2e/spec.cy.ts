describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://scintillating-pixie-f7558d.netlify.app");

    cy.contains("Edit src/App.tsx aaand save to reload.");
  });
});
