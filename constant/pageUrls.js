/*Incluye URLs de los distintos sitios */
require('dotenv').config({path: '.env'});

class Url {
    constructor() {
      this.devices = {
        mainui: process.env.URL,
        endpoint: process.env.API_URL,
       };
    }
}
export default new Url();