const { defineConfig } = require("cypress");
const { readPdf } = require('./cypress/scripts/readPdf');
const { allureCypress } = require("allure-cypress/reporter");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  projectId: 't61r72',
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      // implement node event listeners here
      on("file:preprocessor", cucumber());
      on('task', {
        readPdf
      })
    },
    specPattern: "**/*.feature" // uncomment this line when u run cucumber tests
  },
});
