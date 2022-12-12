/// <reference types="cypress" />

describe("Address Checker Page Tests", () => {
  beforeEach(() => {
    cy.visit("/addresschecker/");

    cy.checkLogo();
    cy.checkCoverBanner();
    cy.footerValidation();

  });

  it("Address Checker - business delivery", () => {
    cy.searchAddress('32 Botha Road, Penrose,');
    cy.weekdayZone();
    cy.saturdayZone();
    cy.serviceArea('BUSINESS DELIVERY ZONE');
  });

  it("Address Checker - rural delivery", () => {
    cy.searchAddress('12 wades road, whitford,');
    cy.notWeekdayZone();
    cy.notSaturdayZone();
    cy.serviceArea('NON-URBAN/RURAL DELIVERY ZONE');
  });

  it("Address Checker - residential delivery", () => {
    cy.searchAddress('38 glenmore road, sunnyhills');
    cy.notWeekdayZone();
    cy.notSaturdayZone();
    cy.serviceArea('RESIDENTIAL DELIVERY ZONE');
  });
});