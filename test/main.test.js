import deviceLocators from "../pages/locators/mainPageLocators";
import addPageLocators from "../pages/locators/AddPageLocators";
import Utils from "../pages/actions/utils";
import { faker } from "@faker-js/faker";
import Url from "../constant/pageUrls"

fixture`Ninja Devices`.page(Url.devices.mainui);

test("Verify page elements", async (t) => {
  const devices = await Utils.getAndSortDevices(); 
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
  const formatSystemType = await Utils.ValidateType(systemType)
  await t
    .click(addPageLocators.textBox.txtType.child("option").nth(randNumber))
    .typeText(addPageLocators.textBox.txtHddCapacity, hdd_capacity.toString())
    .click(addPageLocators.buttons.btnSave);
  await Utils.refresh();
  await t
    .expect(await deviceLocators.label.lblDeviceName.withExactText(systemName).visible).ok()
    .scrollIntoView(deviceLocators.label.lblDeviceName.withExactText(systemName))
    .expect(await deviceLocators.label.lblDeviceName.withExactText(systemName).nextSibling("span").withExactText(formatSystemType).visible).ok()
    .expect(await deviceLocators.label.lblDeviceName.withExactText(systemName).nextSibling("span").withExactText(`${hdd_capacity} GB`.toString()).visible).ok();
});

test("Verify rename first element", async (t) => {
  const devices = await Utils.getAndSortDevices();
  const id= devices[0].id
  const type=devices[0].type
  const capacity=devices[0].hdd_capacity
  await Utils.updateDevice(id,type,capacity)
  await Utils.refresh();
  await t
  .expect(await deviceLocators.label.lblDeviceName.withExactText("Renamed Device").visible).ok()
  .scrollIntoView(deviceLocators.label.lblDeviceName.withExactText("Renamed Device"))
  .expect(await deviceLocators.label.lblDeviceName.withExactText("Renamed Device").nextSibling("span").withExactText(type).visible).ok()
  .expect(await deviceLocators.label.lblDeviceName.withExactText("Renamed Device").nextSibling("span").withExactText(`${capacity} GB`.toString()).visible).ok();
});

test("Verify delete last element", async (t) => {
  const devices = await Utils.getAndSortDevices();
  const arrayLength =devices.length 
  const lastElement = devices.length -1; 
  const id= devices[lastElement].id
  const name= devices[lastElement].system_name
  await Utils.deleteDeviceById(id)
  const newdevices = await Utils.getAndSortDevices();
  await Utils.refresh();
  await t
  .expect(newdevices.length).eql(arrayLength -1)
  .expect(await deviceLocators.label.lblDeviceName.withExactText(name).visible).notOk()
});
