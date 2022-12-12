/// <reference types="cypress" />

describe("Contact Page Tests", () => {
  beforeEach(() => {
    cy.visit("/contact/");
  });

  // Contact Page Tests
  it.only("Contact page - logo and banner", () => {
    cy.checkLogo();

  // REQUEST A CALLBACK
    // Application for credit - click
    //Please fill out the form
    cy.get('[name="input_1"]').type("FIS QA Team");

    cy.get('[data-form-type="company,company_name"]').type("Freightways Information Services");

    cy.get('[data-form-type="address,extra"]').type("32 Botha Road");

    cy.get('[data-form-type="address,city"]').type("Auckland");

    cy.get('[data-form-type="phone,mobile"]').type("0224266470");

    cy.get('[data-form-type="email"]').type(
      "fis-automationtesting-admin@freightways.co.nz"
    );

    cy.get('[data-form-type="other"]').eq(2).type(
      "This is FIS automated test generated call back request"
    );

    cy.get('[data-form-type="other"]').eq(3).type(
      "FIS automated test"
    );

    cy.get('select').select('Other');

    cy.get('[data-form-type="other"]').eq(4).type(
      "FIS automated test"
    );

    cy.get('[type="submit"]').click();

    // Confirmation message
    cy.get('[class="wp-block-group__inner-container"]')
      .eq(1)
      .should("contain", "Thank you, we’ll be in touch shortly");

    cy.footerValidation();
  });
});


// it("Contact page - REQUEST A CALLBACK", () => {
//   // Application for credit - click

//   //Please fill out the form
//   cy.get('[name="input_1"]').type("FIS QA Team");

//   cy.get('[data-form-type="company,company_name"]').type("Freightways Information Services");

//   cy.get('[data-form-type="address,extra"]').type("32 Botha Road");

//   cy.get('[data-form-type="address,city"]').type("Auckland");

//   cy.get('[data-form-type="phone,mobile"]').type("0224266470");

//   cy.get('[data-form-type="email"]').type(
//     "fis-automationtesting-admin@freightways.co.nz"
//   );

//   cy.get('[data-form-type="other"]').eq(2).type(
//     "This is FIS automated test generated call back request"
//   );

//   cy.get('[data-form-type="other"]').eq(3).type(
//     "FIS automated test"
//   );

//   cy.get('select').select('Other');

//   cy.get('[data-form-type="other"]').eq(4).type(
//     "FIS automated test"
//   );

//   cy.get('[type="submit"]').click();

//   // Confirmation message
//   cy.get('[class="wp-block-group__inner-container"]')
//     .eq(1)
//     .should("contain", "Thank you, we’ll be in touch shortly");