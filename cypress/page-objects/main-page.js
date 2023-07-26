export class mainPage {

    selectRandomEp() {
        cy.get('.menu-toggle').click()
        cy.get('[data-testid="sub-nav-item_2"]').within(() => {
            cy.get('.css-cqmi9v-Box').click()
        })
        cy.get('[data-display-name="sub-nav-list"]').first().within(() => {
            cy.get('a[href="/random-episode"]').click()
        })
    }

    selectSeason() {
        cy.get('.menu-toggle').click()
        cy.get('[data-testid="sub-nav-item_2"]').click()
        cy.get('[data-display-name="Button"]').contains('Episodios Completos').click()
    }

    selectCollection() {
        cy.get('.expand-wrap').click() //Clicks Cargar Mas Button
        cy.get('a[href*="best-of-cartman"]').contains('Best of Cartman').click()
    }

}