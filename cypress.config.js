const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: 'n7nvgh',
  viewportWidth: 1800,
  viewportHeight: 860,
  env: {
    barcode: '**',
    claimsUrl: '**',
    customerId: '**',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://nowcouriers.co.nz/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
