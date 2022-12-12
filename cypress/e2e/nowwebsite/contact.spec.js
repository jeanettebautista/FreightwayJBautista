/// <reference types="cypress" />

describe("Contact Page Tests", () => {
  beforeEach(() => {
    cy.visit("/contact/");
  });

  // Contact Page Tests
  it("Contact page - logo and banner", () => {
    cy.checkLogo();

  // REQUEST A CALLBACK
    // Application for credit - click
    //Please fill out the form
    //Fullname
    cy.get('[name="input_1"]').type("FIS QA Team");
    //Company Name
    cy.get('#input_18_16').type("Freightways Information Services")
    //Address
    cy.get('#input_18_18').type("32 Botha Road");
    //City
    cy.get('#input_18_20').type("Auckland");
    //mobile
    cy.get('#input_18_13').type("0224266470");
    //email
    cy.get('#input_18_14').type("fis-automationtesting-admin@freightways.co.nz");
    //Current Supplier
    cy.get('#input_18_21').type("This is FIS automated test generated call back request");
   
    cy.get('#input_18_23').type("FIS automated test");
    //How did you hear about NOW
    cy.get('#input_18_24').select('Other');
    //Specific Requirements
    cy.get('#input_18_6').type("FIS automated test");

    cy.get('#gform_submit_button_18').click();


    //captcha workaround should be added as extra step

    // Confirmation message - to confirm this
    cy.url().should('be.equal', '/callback-information')

    cy.footerValidation();
  });
});


