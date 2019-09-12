describe('routes',function(){
    it("goes home", function(){
        cy.visit('http://localhost:3000')
    })
    it("goes to dashboard", function(){
        cy.visit('http://localhost:3000/dashboard')
    })
    it("goes to sigin", function(){
        cy.visit('http://localhost:3000/signin')
    })
     it("goes to Register", function(){
        cy.visit('http://localhost:3000/register')
    })
     it("goes to logos", function(){
        cy.visit('http://localhost:3000/logos')
    })
     it("goes to playerCard", function(){
        cy.visit('http://localhost:3000/playercard')
    })
     it("goes to stats", function(){
        cy.visit('http://localhost:3000/stats')
    })
     it("goes to roster", function(){
        cy.visit('http://localhost:3000/roster')
    })
     it("goes to carousel", function(){
        cy.visit('http://localhost:3000/carousel')
    })
     it("goes to loadericons", function(){
        cy.visit('http://localhost:3000/loadericons')
    })
})

