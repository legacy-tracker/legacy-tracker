describe("first name input", function(){
    it("inputs first name field", function(){
        cy.visit("http://localhost:3000/#/register");
        cy.contains("First Name").click()
    })
})
describe("last name input", function(){
    it("inputs last name field", function(){
        cy.visit("http://localhost:3000/#/register");
        cy.contains("Last Name").click()
    })
})
describe("username input", function(){
    it("inputs username field", function(){
        cy.visit("http://localhost:3000/#/register");
        cy.contains("Username").click()
    })
})
describe("password input", function(){
    it("inputs password field", function(){
        cy.visit("http://localhost:3000/#/register");
        cy.contains("Password").click()
    })
})
describe("submit", function(){
    it("submit button", function(){
        cy.visit("http://localhost:3000/#/register");
        cy.contains("Submit").click()
    })
})

// describe("My second test", function() {
//  it("clicks register ", function() {
//    cy.visit("http://localhost:3000/#/");
//    cy.contains("Register").click();
//  });
// });