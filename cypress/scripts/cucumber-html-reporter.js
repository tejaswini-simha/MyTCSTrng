const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'hierarchy',
  jsonDir: 'cypress/cucumber-json',
  output: 'reports/html_simple/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  scenarioTimestamp: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chrome  131.0.6778.86",
    "Platform": "Windows 11",
    // "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);
module.exports = {reporter};