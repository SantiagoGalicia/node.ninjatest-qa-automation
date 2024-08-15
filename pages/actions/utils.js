const axios = require("axios");
import { ClientFunction } from "testcafe";
import Url from "../../constant/pageUrls";

class Utils {
  async getAndSortDevices() {
    try {
      const response = await axios.get(Url.devices.endpoint + "/Devices");
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

  async getDeviceById(id) {
    try {
      const response = await axios.get(Url.devices.endpoint + "/devices/" + id);
      return response.data;
    } catch (error) {
      console.error(`Error fetching device with ID ${id}:`, error.message);
    }
  }

  async deleteDeviceById(id) {
    try {
      const response = await axios.delete(Url.devices.endpoint + "/devices/" + id
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching device with ID ${id}:`, error.message);
    }
  }

  async updateDevice(id,type,hdd_capacity) {
    const deviceData = {
      system_name: "Renamed Device",
      type: type,
      hdd_capacity: hdd_capacity,
    };
    try {
      const response = await axios.put(
        Url.devices.endpoint + "/devices/" + id,
        deviceData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating device:", error.message);
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

  async ValidateType(type) {
    if (type === "WINDOWS SERVER") {
      return "WINDOWS_SERVER";
    } else {
      return type;
    }
  }
}
export default new Utils();
