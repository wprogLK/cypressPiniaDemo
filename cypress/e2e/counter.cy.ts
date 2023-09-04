describe('Counter test', () => {
    it('result is 0', () => {
        cy.visit('/result')
        cy.get("p").should("have.text", "Current stored value 0.")
    })
    it('increase counter to 1', () => {
        cy.visit("/counter")
        cy.get("p").should("have.text", "Current stored value 0.")
        cy.get("button").click();
        cy.get("p").should("have.text", "Current stored value 1.")
        cy.visit('/result')
        cy.get("p").should("have.text", "Current stored value 1.")
    })
})