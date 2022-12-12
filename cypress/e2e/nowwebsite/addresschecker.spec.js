/// <reference types="cypress" />

describe("Address Checker Page Tests", () => {
  beforeEach(() => {
    cy.visit("/addresschecker/");
  });

  it("Address Checker - business delivery", () => {
    cy.checkLogo();
    cy.checkCoverBanner();
    cy.searchAddress('32 Botha Road, Penrose,');
    cy.monToFriZone();
    cy.saturdayZone();
    cy.serviceArea();
    cy.footerValidation();
  });

  it("Address Checker - rural delivery", () => {
    cy.checkLogo();
    cy.checkCoverBanner();
    cy.searchAddress('12 wades road, whitford,');
    cy.monToFriZone();
    cy.saturdayZone();
    cy.serviceArea();
    cy.footerValidation();
  });

  it("Address Checker - residential delivery", () => {
    cy.checkLogo();
    cy.checkCoverBanner();
    cy.searchAddress('38 glenmore road, sunnyhills');
    cy.monToFriZone();
    cy.saturdayZone();
    cy.serviceArea();
    cy.footerValidation();
  });
});