export class collections {

    selectCartman() {
        cy.get('a[href*="best-of-cartman"]').click()
    }
}