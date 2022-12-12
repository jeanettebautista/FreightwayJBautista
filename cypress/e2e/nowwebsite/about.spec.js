/// <reference types="cypress" />

describe("About Page Tests", () => {
  beforeEach(() => {
    cy.visit("/about/");
  });

  // About Page Tests
  //.wp-block is the selector to .wp-block-image
  it("About page - logo and cover banner", () => {
  
    cy.checkLogo();
    cy.checkCoverBanner();

    // Our Partner network 
    cy.get('.wp-block-group__inner-container').should("be.visible");

    //Post Haste
    cy.get('.wp-image-1305').should('be.visible');
    cy.get('.wp-container-13 > :nth-child(1) > p').should('contain.text', 'Provide nationwide overnight deliveries by midday next business day.' )

    // NZ Couriers
    cy.get('.wp-image-1306').should("be.visible");
    cy.get(':nth-child(2) > .has-text-align-left').should('contain.text', 'Specialists in the delivery of time sensitive documents and parcels.')
    
    // Castle Parcel
    cy.get('.wp-image-1254').should('be.visible')
    cy.get('.wp-container-13 > :nth-child(3) > p').should('contain.text', 'Castle Parcels operates in the economy next day (two day inter-island) delivery segment, with the ability to cater for high volume parcel customers and multi piece consignments.');

    // Sub 60
    cy.get('.wp-image-1255').should("be.visible");
    cy.get('.wp-container-17 > :nth-child(1) > p').should('contain.text', 'Delivering New Zealand’s foremost point to point courier service.');

    // Security express
    cy.get('.wp-image-1256').should("be.visible");
    cy.get('.wp-container-17 > :nth-child(2) > p').should('contain.text', 'Specialises in transport of valuable items and documents.');
    
    // Kiwi express
    cy.get('.wp-image-1257').should("be.visible");
    cy.get('.wp-container-17 > :nth-child(3) > p').should('contain.text', 'Offering 15 minute, 30 minute and 1 hour deliveries.');

    cy.footerValidation();
  });
});