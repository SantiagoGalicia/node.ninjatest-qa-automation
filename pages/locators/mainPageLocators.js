import { Selector } from "testcafe";

class Devices {
  constructor() {
    this.buttons = {
      btnAddDevice: Selector('a[href="/devices/add"]'),
      btnEdit: Selector("a.device-edit"),
      btnRemove: Selector("button.device-remove"),
    };
    this.label = {
      lblDeviceName: Selector("span.device-name"),
      lblDeviceType: Selector("span.device-type"),
      lblDeviceCapacity: Selector("span.device-capacity"),
    };
  }
}

export default new Devices();
