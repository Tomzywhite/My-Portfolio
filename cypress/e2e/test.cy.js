describe("test",function(){

    it('testing functions',function(){
        cy.visit("http://127.0.0.1:5500/");
        cy.title().should('eq','Personal Portfolio');
    })
})