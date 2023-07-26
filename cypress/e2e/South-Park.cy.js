/// <reference types = "Cypress"/>

import { mainPage } from "../page-objects/main-page"
import { fullEpisodes } from "../page-objects/complete-episodes"
import { collections } from "../page-objects/collections"


const main = new mainPage
const fullEp = new fullEpisodes
const collectionPage = new collections

describe('South Park Test', () => {

    beforeEach(() => {
        cy.visit('https://www.southpark.lat/')
        cy.get('.logo-container').should('be.visible')
    })

    it('Selects Random Episode', () => {
        main.selectRandomEp()
    })


    it('Selects an Episode from a specific Season', () => {
        main.selectSeason() //It got to the Complete Episodes screen
        fullEp.selectSeason() //It selected the Season
    })

    it('Selects a Collection', () => {
        main.selectCollection() //It enters the best of cartman page, we still need to click a link on a parragraph
        collectionPage.selectCartman()
    })
})