const { defineConfig } = require("cypress");
const { readPdf } = require('./cypress/scripts/readPdf');
const { allureCypress } = require("allure-cypress/reporter");


module.exports = defineConfig({
  projectId: 't61r72',
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      // implement node event listeners here
      on('task', {
        readPdf
      })
    },
  },
});
