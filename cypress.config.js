const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  modifyObstructiveCode: false,

  env: {
    ELECTRON_DISABLE_GPU: "true",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
