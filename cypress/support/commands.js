// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
Cypress.Commands.add("footerValidation", () => {
// footer 1
cy.get('[class="mdc-list"]')
.eq(0)
.should("contain", "Services", { matchCase: false })
.and("contain", "About", { matchCase: false })
.and("contain", "Help", { matchCase: false })
.and("contain", "Contact", { matchCase: false });

// footer 2
cy.get('[class="mdc-list"]')
.eq(1)
.should("contain", "Do It Quickly Online", { matchCase: false })
.and("contain", "Auckland Depot", { matchCase: false })
.and("contain", "North Harbour Depot", { matchCase: false });

// footer 3
cy.get('[class="mdc-list"]')
.eq(2)
.should("contain", "Terms & Conditions", { matchCase: false })
.and("contain", "Privacy Policy", { matchCase: false });

// footer - sub menu 1
cy.get('[class="sub-menu"]')
.eq(0)
.should("contain", "Track & Trace", { matchCase: false })
.and("contain", "Book A Courier", { matchCase: false })
.and("contain", "Order Products", { matchCase: false })
.and("contain", "Account Application", { matchCase: false })
.and("contain", "Quote", { matchCase: false });

// footer - sub menu 2
cy.get('[class="sub-menu"]').eq(1).should("be.visible");

// footer - sub menu 3
cy.get('[class="sub-menu"]').eq(2).should("be.visible");
})
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("checkCoverBanner", () => {
    return cy.get(".wp-block-cover").should("be.visible");
})


Cypress.Commands.add("checkLogo", () => {
    cy.get('.mdc-top-app-bar__title').should("be.visible");
})
