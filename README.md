# Node Ninja Test QA Automation

## Description

This project is an API testing suite using [TestCafe](https://devexpress.github.io/testcafe/). It provides configurations and scripts to run tests, generate reports, and manage dependencies.

testcafe-project/

├── configs/
│   ├── testcafe.config.js 
│ 
├── constans/
│   ├── pageUrls.js
│ 
├── pages/
│   ├── actions/
│       ├── Utils.js
│ 
├── locators/
│   ├── AddPageLocators/
│   ├── mainPageLocators/
│
├── reports/
│   ├── json/
│
├── screenshots/
│   
├── tests/
│   ├── main.test.js
│
└── allure/
│    ├── allure-results
│    ├── allure-report.js
│     
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── .env   


## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Reports](#reports)
- [Contributing](#contributing)
- [License](#license)
- [Issues](#issues)

## Installation

To install the project dependencies, run:
```
npm install
```

## Scripts

The `package.json` includes the following scripts:

[Main] Runs the TestCafe tests specified in `test/main.test.js` using the configuration in `configs/testcafe.config.js`.

```
npm run Main
```

[Allure]: Generates and opens Allure reports from the test results. Make sure to have Allure Commandline installed globally to use this command.

```
npm run Allure
```

## Dependencies

The project uses the following dependencies:

- allure: 0.0.0
- allure-commandline: ^2.30.0
- axios: ^1.7.4
- dotenv: ^16.0.3
- faker: ^5.5.3
- testcafe: ^3.6.2
- testcafe-reporter-allure: ^1.0.5
- testcafe-reporter-html: ^1.4.6
- testcafe-reporter-junit: ^3.0.2

For development, the following dependencies are used:

- @faker-js/faker: ^7.6.0
- downloads-folder: ^3.0.3

## Usage

To run the tests, use the following command:
```
npm run main
```

To generate and view Allure reports:
```
npm run Allure
```

## Reports

The project is configured to generate reports in various formats. Reports will be saved in the following directories:

- JSON: `reports/json/report.json`
- HTML: `reports/html/report.html`
- JUnit: `reports/xml/report.xml`
- Allure: `reports/allure`

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push your changes (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the ISC License. See the `LICENSE` file for details.

## Issues

If you encounter any problems or errors, please report them in the issues section of the repository.

---