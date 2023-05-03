/// <reference types = "Cypress"/>

describe('South Park Test', () => {

    beforeEach(() => {
        cy.visit('https://www.southpark.lat/')
        cy.get('.logo-container').should('be.visible')
    })

    it('Selects Random Episode', () => {
        cy.get('.menu-toggle').click()
        cy.get('[data-testid="sub-nav-item_2"]').within(() => {
            cy.get('.css-cqmi9v-Box').click()
        })
        cy.get('[data-display-name="sub-nav-list"]').first().within(() => {
            cy.get('a[href="/random-episode"]').click()
        })
    })

})