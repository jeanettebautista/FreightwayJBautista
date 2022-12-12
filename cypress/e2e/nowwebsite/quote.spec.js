/// <reference types="cypress" />

describe("Quote Page Tests", () => {
  beforeEach(() => {
    cy.visit("/quote");
  });

  // Quote page vaigation and validation
  it("Quote page - footer navigaation, logo and cover banner", () => {
    // Click quote from footer
    cy.get('[id="menu-item-1280"]').click('left');

    // logo visiblity
    cy.get('[title="Now Couriers"]').should("be.visible");

    // cover banner visible
    cy.get(".wp-block-cover").should("be.visible");
  });

  // tell us about your needs and quick quotes widget
  it("Quote page - tell us about your needs and quick quotes widget", () => {
    // tell us about your needs
    cy.get('[id="gform_fields_9"]').should("be.visible");

    // quick quotes
    cy.get('[class="wp-block-column quick_quote_widget"]').should("be.visible");
  });

  // Request a call back
  it("Quote page - Request a call back", () => {
    // click get in touch
    cy.wait(500)
    cy.get('[class="request_callback_button"]').click();

    //Please fill out the form
    cy.get('[name="input_1"]').type("FIS QA Team");

    cy.get('[name="input_16"]').type("Freightways Information Services");

    cy.get('[name="input_15"]').type("QA");

    cy.get('[name="input_18"]').type("32 Botha Road");

    cy.get('[name="input_19"]').type("Penrose");

    cy.get('[name="input_20"]').type("Auckland");

    cy.get('[name="input_13"]').type("0224266470");

    cy.get('[name="input_14"]').type(
      "fis-automationtesting-admin@freightways.co.nz"
    );

    cy.get('[name="input_21"]').type(
      "This is FIS automated test generated call back request"
    );

    cy.get('[name="input_6"]').type(
      "This is FIS automated test generated call back request"
    );

    cy.get('[value="Submit request"]').click('left');

    // Confirmation message
    cy.get('[class="wp-block-group__inner-container"]')
      .eq(1)
      .should("contain", "Thank you, we’ll be in touch shortly");
  });
});
