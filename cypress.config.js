const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: ('https://the-internet.herokuapp.com/'),
    defaultCommandTimeout: 100000,
    viewportHeight: 960,
    viewportWidth: 1530,
    // chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
