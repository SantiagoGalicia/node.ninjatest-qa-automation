import deviceLocators from "../pages/locators/mainPageLocators";
import addPageLocators from "../pages/locators/AddPageLocators";
import Utils from "../pages/actions/utils";
import { faker } from "@faker-js/faker";
import Url from "../constant/pageUrls"

fixture`Ninja Devices`.page(Url.devices.mainui);

test("Verify page elements", async (t) => {
  const devices = await Utils.getAndSortDevices();
  console.log(devices);
  if (!Array.isArray(devices)) {
    throw new Error("Expected devices to be an array");
  }
  for (const [index, device] of devices.entries()) {
    const deviceNameUi = await deviceLocators.label.lblDeviceName.nth(index).innerText;
    const deviceTypeUi = await deviceLocators.label.lblDeviceType.nth(index).innerText;
    const deviceCapacityUi = await deviceLocators.label.lblDeviceCapacity.nth(index).innerText;
    await t
      .expect(deviceNameUi).eql(device.system_name)
      .expect(deviceTypeUi).eql(device.type)
      .expect(deviceCapacityUi).eql(`${device.hdd_capacity} GB`)
      .expect(deviceLocators.buttons.btnEdit.nth(index).visible).ok()
      .expect(deviceLocators.buttons.btnRemove.nth(index).visible).ok();
    let iterator = index + 1;
    console.log("iteracion: " + iterator + "------> OK");
  }
});

test("Verify add elements", async (t) => {
  await t.setTestSpeed(0.2);
  const randNumber = await Utils.getRandomNumber(3);
  const systemName = faker.company.name();
  const hdd_capacity = await Utils.getRandomNumber(1024);

  await t
    .click(deviceLocators.buttons.btnAddDevice)
    .expect(addPageLocators.label.addNewDeviceHeader.visible).ok()
    .typeText(addPageLocators.textBox.txtSystemName, systemName)
    .click(addPageLocators.textBox.txtType);
  const systemType = await addPageLocators.textBox.txtType.child("option").nth(randNumber).innerText;
  await t
    .click(addPageLocators.textBox.txtType.child("option").nth(randNumber))
    .typeText(addPageLocators.textBox.txtHddCapacity, hdd_capacity.toString())
    .click(addPageLocators.buttons.btnSave);
  await Utils.refresh();
  await t
    .expect(await deviceLocators.label.lblDeviceName.withExactText(systemName).visible).ok()
    .expect(await deviceLocators.label.lblDeviceName.withExactText(systemName).nextSibling("span").withExactText(systemType).visible).ok()
    .expect(await deviceLocators.label.lblDeviceName.withExactText(systemName).nextSibling("span").withExactText(`${hdd_capacity} GB`.toString()).visible).ok();
});
