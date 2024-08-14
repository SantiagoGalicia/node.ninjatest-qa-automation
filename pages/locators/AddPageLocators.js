import { Selector } from "testcafe";

class Devices {
  constructor() {
    this.buttons = {
      btnSave: Selector("button.submitButton"),
    };
    this.label = {
      addNewDeviceHeader: Selector("h3").withExactText("NEW DEVICE"),
    };
    this.textBox = {
      txtSystemName: Selector("#system_name"),
      txtType: Selector("#type"),
      txtHddCapacity: Selector("#hdd_capacity"),
    };
  }
}

export default new Devices();
