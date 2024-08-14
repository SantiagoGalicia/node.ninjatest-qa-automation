# Node Ninja Test QA Automation

## Descripción

Este proyecto es una suite de pruebas de API utilizando [TestCafe](https://devexpress.github.io/testcafe/). Proporciona configuraciones y scripts para ejecutar pruebas, generar reportes y gestionar dependencias.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Scripts](#scripts)
- [Dependencias](#dependencias)
- [Uso](#uso)
- [Reportes](#reportes)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Problemas](#Problemas)

## Instalación

Para instalar las dependencias del proyecto, ejecuta:
npm install

Genera un archivo .env con la siguiente estructura en la raiz del proyecto
URL=http://localhost:3001
API_URL=http://localhost:3000

## Scripts
El package.json incluye los siguientes scripts:

[Main] Ejecuta las pruebas de TestCafe especificadas en test/main.test.js utilizando la configuración en configs/testcafe.config.js.

npm run Main

[Allure]: Genera y abre reportes de Allure a partir de los resultados de las pruebas. Asegúrate de tener Allure Commandline instalado globalmente para usar este comando.

npm run Allure

## Dependencias
El proyecto utiliza las siguientes dependencias:

allure: 0.0.0
allure-commandline: ^2.30.0
axios: ^1.7.4
dotenv: ^16.0.3
faker: ^5.5.3
testcafe: ^3.6.2
testcafe-reporter-allure: ^1.0.5
testcafe-reporter-html: ^1.4.6
testcafe-reporter-junit: ^3.0.2

Para el desarrollo, se usan las siguientes dependencias:

@faker-js/faker: ^7.6.0
downloads-folder: ^3.0.3

## Uso

Para ejecutar las pruebas, usa el siguiente comando:
npm run main

Para generar y visualizar los reportes de Allure:
npm run Allure


## Reportes
El proyecto está configurado para generar reportes en varios formatos. Los reportes se guardarán en los siguientes directorios:

JSON: reports/json/report.json
HTML: reports/html/report.html
JUnit: reports/xml/report.xml
Allure: reports/allure

## Contribución
Si deseas contribuir a este proyecto, por favor sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/your-feature).
Realiza tus cambios y haz commit (git commit -am 'Add new feature').
Envía tus cambios (git push origin feature/your-feature).
Crea un nuevo Pull Request.

## Licencia
Este proyecto está licenciado bajo la Licencia ISC. Consulta el archivo LICENSE para más detalles.

## Problemas
Si encuentras algún problema o error, por favor repórtalo en la sección de issues del repositorio.
