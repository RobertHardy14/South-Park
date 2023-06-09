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


    it('Selects an Episode from a specific Season', () => {
        cy.get('.menu-toggle').click()
        cy.get('[data-testid="sub-nav-item_2"]').click()
        cy.get('[data-display-name="Button"]').contains('Episodios Completos').click() //It got to the Complete Episodes screen

        cy.get('[data-testid="Dropdown"]').scrollIntoView().click()
        cy.get('[data-testid="DropdownList"]').within(() => {
            cy.get('[data-display-name="Link"]').contains('Temporada 13').click() //It selected the Season
        })

        cy.get('h3').contains('El Mapache').click()
    })

    it('Selects a Collection', () => {
        cy.get('h2').contains('Colección: Best of Cartman').click() //It enters the best of cartman page, we still need to click a link on a parragraph
        cy.get('[data-display-name="GenericText"]').contains("Best of Cartman").click()
    })
})