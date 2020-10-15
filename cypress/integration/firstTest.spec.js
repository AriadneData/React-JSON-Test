/// <reference types="cypress" />

//const { CtrCompleter } = require("ng2-completer")
//const { isYieldExpression } = require("typescript")

describe("Test Pets layout", () => {
    it("If one pet ask the age", () => {
        cy.visit('/')

        cy.get('[id="root_Do you have any pets?"]').select("Yes: One")

        // cy.get('[id="root_How old is your pet?"]').children().should('have.length', 1)

        cy.get('[id="root__title"]').siblings().should('have.length', 2)

    })
})