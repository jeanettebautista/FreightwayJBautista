/// <reference types="cypress" />

describe("Address Checker Page Tests", () => {
  beforeEach(() => {
    cy.visit("/addresschecker/");
  });

  // Address Checker Page Tests
  it("Address Checker page - logo, cover banner, and footer", () => {
    // logo visiblity
    cy.checkLogo();
    cy.checkCoverBanner();
    cy.footerValidation();
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
    cy.footerValidation();
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
    cy.footerValidation();
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
    cy.footerValidation();
  });
});