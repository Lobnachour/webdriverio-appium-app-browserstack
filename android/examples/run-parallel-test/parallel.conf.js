exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || "lobnaachour_7JojcI",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "URpFrLsGrdWGU5KhspAD",

  updateJob: false,
  specs: ["./examples/run-parallel-test/specs/login.js"],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    project: "First Webdriverio Android Project",
    build: "Webdriverio Android Parallel",
    app:
      process.env.BROWSERSTACK_APP_ID ||
      "bs://2894f8b8d69e4abd36f79d7f47478498aac507c9",
    "browserstack.debug": true,
    autoGrantPermissions: "true",
  },

  capabilities: [
    {
      device: "Google Pixel 3",
      os_version: "9.0",
      name: "session1",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session2",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session3",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session4",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session5",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session6",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session7",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session8",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session9",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session10",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session11",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session12",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session13",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session14",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session15",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session16",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session17",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session18",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session19",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session20",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session21",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session22",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session23",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session24",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session25",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session26",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session27",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session28",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session29",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session30",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session31",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session32",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session33",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session34",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session35",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session36",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session37",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session38",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session39",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session40",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session41",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session42",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session43",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session44",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session45",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session46",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session47",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session48",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session49",
    },
    {
      device: "Samsung Galaxy S10e",
      os_version: "9.0",
      name: "session50",
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

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
