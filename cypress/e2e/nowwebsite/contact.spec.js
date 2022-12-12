/// <reference types="cypress" />

describe("Contact Page Tests", () => {
  let data; 
  before(() => {
    cy.fixture('contact').then((fdata) => 
    {
      data = fdata;

     })
    })

  // Contact Page Tests
  it("Contact page request a callback", () => {
     cy.visit("/contact/");
     cy.checkLogo();
    cy.get('[name="input_1"]').type(data.Fullname);
    cy.get('#input_18_16').type(data.Companyname);
    cy.get('#input_18_18').type(data.Address);
    cy.get('#input_18_20').type(data.City);
    cy.get('#input_18_13').type(data.Mobile);
    cy.get('#input_18_14').type(data.Email);
    cy.get('#input_18_21').type(data.Natureofbusiness);
    cy.get('#input_18_23').type(data.Currentsupplier);
    //How did you hear about NOW
    cy.get('#input_18_24').select('Other');
    cy.get('#input_18_6').type(data.Specificrequirement);

    cy.get('#gform_submit_button_18').click();
    
    //captcha workaround should be added as extra step

    // Confirmation message - to confirm this
    cy.url().should('be.equal', `${Cypress.config("baseUrl")}callback-information`)

    cy.footerValidation();
  });
});