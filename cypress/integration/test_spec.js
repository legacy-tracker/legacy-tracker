describe("The Home Page, with npm start", function() {
  beforeEach(function() {
    cy.exec("npm start");
  });

  it("successfully loads", function() {
    cy.visit("http://localhost:3000/#/");
  });
});

describe("My second test", function() {
  it("clicks register ", function() {
    cy.visit("http://localhost:3000/#/");

    cy.contains("Register").click();
  });
});

describe("My third test", function() {
  it("clicks login", function() {
    cy.visit("http://localhost:3000/#/");

    cy.contains("Login").click();
  });
});

describe("My forth test", function() {
  it("clicks username", function() {
    cy.visit("http://localhost:3000/#/signin");

    cy.contains("Username").click();
  });
});

describe("My fifth test", function() {
  it("click password", function() {
    cy.visit("http://localhost:3000/#/signin");

    cy.contains("Password").click();
  });
});
