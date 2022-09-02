exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || "lobnaachour_NIBxY7",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "tumDNKrF4q2LxFGRNSsM",

  updateJob: false,
  specs: ["./examples/run-first-test/specs/first_test.js"],
  exclude: [],

  capabilities: [
    {
      project: "First Webdriverio Android Project",
      build: "Webdriverio Android",
      name: "first_test",
      device: "Google Pixel 3",
      os_version: "9.0",
      app:
        process.env.BROWSERSTACK_APP_ID ||
        "bs://5fbb64656f15423f8d14f4aa14f6647ab5596481",
      "browserstack.debug": true,
      // "browserstack.networkLogs": true,
      autoGrantPermissions: "true",
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 600000,
  },
};
