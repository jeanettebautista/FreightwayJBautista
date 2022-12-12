/// <reference types="cypress" />

describe("Address Checker Page Tests", () => {
  beforeEach(() => {
    cy.visit("/address-checker/");
  });

  // Address Checker Page Tests
  it("Address Checker page - logo and cover banner", () => {
    // logo visiblity
    cy.get('[title="Now Couriers"]').should("be.visible");

    // cover banner visible
    cy.get(".wp-block-cover").should("be.visible");
  });

  it("Address Checker - business delivery", () => {
    // search for address
    cy.get("#txt-address-auto-complete")
      .type("32 Botha Road, Penrose,");

    cy.wait(2000);

    // same day delivery is present
    cy.get("#rowServicesOfferedSameDayZone").should("be.visible");

    // mon-fri standard delivery is present
    cy.get("#rowServicesOfferedMonToFriZone").should("be.visible");

    // saturday delivery is present
    cy.get("#rowServicesOfferedSaturdayZone").should("be.visible");

    // business delivery is present
    cy.get("#rowServiceArea").should("be.visible");
  });

  it("Address Checker - rural delivery", () => {
    // search for address
    cy.get("#txt-address-auto-complete")
      .type("12 wades road, whitford,")
      .wait(2500)
      .type("value{downarrow}{enter}");

    cy.wait(2000);

    // mon-fri standard delivery is present
    cy.get("#rowServicesOfferedMonToFriZone").should("be.visible");

    // saturday delivery is present
    cy.get("#rowServicesOfferedSaturdayZone").should("be.visible");

    // business delivery is present
    cy.get("#rowServiceArea").should("be.visible");
  });

  it("Address Checker - residential delivery", () => {
    // search for address
    cy.get("#txt-address-auto-complete")
      .type("38 glenmore road, sunnyhills,")
      .wait(2500)
      .type("value{downarrow}{enter}");

    cy.wait(2000);

    // same day delivery is present
    cy.get("#rowServicesOfferedSameDayZone").should("be.visible");

    // mon-fri standard delivery is present
    cy.get("#rowServicesOfferedMonToFriZone").should("be.visible");

    // saturday delivery is present
    cy.get("#rowServicesOfferedSaturdayZone").should("be.visible");

    // residential delivery is present
    cy.get("#rowServiceArea").should("be.visible");
  });

  it("Address Checker page - footer", () => {
    cy.footerValid0zation();
  });
});
