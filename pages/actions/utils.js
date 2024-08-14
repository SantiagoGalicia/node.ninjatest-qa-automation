const axios = require("axios");
import { ClientFunction } from 'testcafe';
import Url from "../../constant/pageUrls"

class Utils {
  async getAndSortDevices() {
    try {
      const response = await axios.get( Url.devices.endpoint + "/Devices");
      const devices = response.data;
      if (!Array.isArray(devices)) {
        throw new Error("Expected devices to be an array");
      }

      const sortedDevices = devices.sort((a, b) => {
        return parseInt(a.hdd_capacity) - parseInt(b.hdd_capacity);
      });
      return sortedDevices;
    } catch (error) {
      console.error("Error fetching or sorting devices:", error);
      throw error;
    }
  }

  async getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  async refresh() {
    await ClientFunction(() => {
      document.location.reload();
    })();
  }
}

export default new Utils();
