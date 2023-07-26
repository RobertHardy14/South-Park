export class fullEpisodes {

    selectSeason() {
        cy.get('[data-testid="Dropdown"]').scrollIntoView().click()
        cy.get('[data-testid="DropdownList"]').within(() => {
            cy.get('a[href*="temporada-13"]').contains('Temporada 13').click()
        })

        cy.get('h3').contains('El Mapache').click()
    }
}