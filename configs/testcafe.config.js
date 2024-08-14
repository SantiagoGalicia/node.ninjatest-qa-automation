module.exports = {
  browsers: ["chrome"],
  concurrency: 1,
  reporter: [
    { name: "json", output: "reports/json/report.json" },
    { name: "allure", output: "reports/allure" },
    { name: "spec" },
  ],
  screenshots: {
    path: "screenshots/",
    takeOnFails: true,
  },
};
