describe("template spec", () => {
  it("passes", () => {
    cy.visit(
      "https://644155b63b008e000805553e--brilliant-praline-704934.netlify.app"
    );

    cy.contains("Edit src/App.tsx ssss and save to reload.");
  });
});
