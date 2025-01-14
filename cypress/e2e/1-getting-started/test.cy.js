describe("test", function () {
    it('testing functions', function () {
        cy.visit("http://127.0.0.1:5500/index.html");
        cy.title().should('eq', 'Personal Portfolio');
    });

    it('button test', function () {
        cy.visit("http://127.0.0.1:5500/index.html");
        cy.get('.body > section:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(6) > button:nth-child(1)')
            .should('be.visible');
    });
});
