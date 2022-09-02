const { doesNotMatch } = require("assert");
const driver = require("webdriverio");
var assert = require("assert");

// describe("Search Wikipedia Functionality", () => {
//   it("can find search results", async () => {
//     var searchSelector = await $(`~Search Wikipedia`);
//     await searchSelector.waitForDisplayed({ timeout: 30000 });
//     await searchSelector.click();

//     var insertTextSelector = await $(
//       'android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")'
//     );
//     await insertTextSelector.waitForDisplayed({ timeout: 30000 });

//     await insertTextSelector.addValue("Browsertack");
//     await browser.pause(5000);

//     var allProductsName = await $$(`android.widget.TextView`);
//     assert(allProductsName.length > 0);
//   });
// });
// describe("login test", () => {
//   it("can login", async () => {
//     var username = await $(`~Username`);
//     await username.waitForDisplayed({ timeout: 30000 });
//     await username.addValue("lobna");
//     var password = await $(`~Password`);
//     await password.waitForDisplayed({ timeout: 30000 });
//     await password.addValue("imaxeam");
//     // var options = await $(`~Options`);
//     // await options.waitForDisplayed({ timeout: 30000 });
//     // await options.addValue("prod.maxapps-maximo.com");
//     var connect = await $(`~Connect`);
//     await connect.waitForDisplayed({ timeout: 30000 });
//     await connect.click();
//   });
// });
// describe("simple react app test", () => {
//   it("can add value in text input", async () => {
//     var textInput = await $(`~textInput`);
//     await textInput.waitForDisplayed({ timeout: 30000 });
//     await textInput.addValue("thisisatest");
//   });
//   it("can click on button", async () => {
//     var button = await $(`~button`);
//     await button.waitForDisplayed({ timeout: 30000 });
//     await button.click();
//   });
// });

// describe("login test", () => {
//   it("can login using options/code", async () => {
//     var username = await $(`~Username`);
//     await username.waitForDisplayed({ timeout: 30000 });
//     await username.addValue("lobna");
//     var password = await $(`~Password`);
//     await password.waitForDisplayed({ timeout: 30000 });
//     await password.addValue("imaxeam");
//     // var optionsButton = await $(`~OptionsButton`);
//     // await optionsButton.waitForDisplayed({ timeout: 30000 });
//     // await optionsButton.click();
//     // var optionsField = await $(`~OptionsField`);
//     // await optionsField.waitForDisplayed({ timeout: 30000 });
//     // await optionsField.addValue("142.112.52.234:41004");
//     var codeField = await $(`~CodeField`);
//     await codeField.waitForDisplayed({ timeout: 30000 });
//     await codeField.addValue("142.112.52.234:41004");
//     var connectButton = await $(`~connectButton`); //add condition
//     await connectButton.waitForDisplayed({ timeout: 30000 });
//     await connectButton.click();
//     var imxAlertButton = await $(`~imxButton2`);
//     await imxAlertButton.waitForDisplayed({ timeout: 30000 });
//     await imxAlertButton.click();
//   });
//   it("shows optionsField/code after logging out when logging with optionsField/code", async () => {
//     var settingsButton = await $("~SettingsButton");
//     await settingsButton.waitForDisplayed({ timeout: 30000 });
//     settingsButton.click();
//     var disconnectButton = await $("~DisconnectButton");
//     await disconnectButton.waitForDisplayed({ timeout: 30000 });
//     disconnectButton.click();
//     var okButton = await $("~imxButton2");
//     await okButton.waitForDisplayed({ timeout: 30000 });
//     okButton.click();
//   });
// });
// describe("transactions test", () => {
//   it("can can login using options", async () => {
//     var username = await $(`~Username`);
//     await username.waitForDisplayed({ timeout: 30000 });
//     await username.addValue("lobna");
//     var password = await $(`~Password`);
//     await password.waitForDisplayed({ timeout: 30000 });
//     await password.addValue("imaxeam");
//     var optionsButton = await $(`~OptionsButton`);
//     await optionsButton.waitForDisplayed({ timeout: 30000 });
//     await optionsButton.click();
//     var optionsField = await $(`~OptionsField`);
//     await optionsField.waitForDisplayed({ timeout: 30000 });
//     // await optionsField.addValue("24.53.58.40:4104");
//     await optionsField.addValue("142.112.52.234:41004");
//     // var codeField = await $(`~CodeField`);
//     // await codeField.waitForDisplayed({ timeout: 30000 });
//     // await codeField.addValue("142.112.52.234:41004");
//     var connectButton = await $(`~connectButton`); //add condition
//     await connectButton.waitForDisplayed({ timeout: 30000 });
//     await connectButton.click();
//     var imxAlertButton = await $(`~imxButton2`);
//     await imxAlertButton.waitForDisplayed({ timeout: 30000 });
//     await imxAlertButton.click();
//   });
//   // it("can create new SR", async () => {
//   //   var mboAsset = await $(
//   //     `~mboimxComponent_4_1658153492230_0.3835662230322062`
//   //   );
//   //   await mboAsset.waitForDisplayed({ timeout: 30000 });
//   //   await mboAsset.click();
//   //   var actionButton = await $("~actionButton");
//   //   await actionButton.waitForDisplayed({ timeout: 30000 });
//   //   await actionButton.click();
//   //   var summaryField = await $("~FormInputText2");
//   //   await summaryField.waitForDisplayed({ timeout: 30000 });
//   //   await summaryField.addValue("summary11");
//   //   var assetField = await $("~FormInputText3");
//   //   await assetField.waitForDisplayed({ timeout: 30000 });
//   //   await assetField.addValue("asset11");
//   //   var locationField = await $("~FormInputText");
//   //   await locationField.waitForDisplayed({ timeout: 30000 });
//   //   await locationField.addValue("location11");
//   //   var submitButton = await $("~submitForm");
//   //   await submitButton.waitForDisplayed({ timeout: 30000 });
//   //   await submitButton.click();
//   // });

//   // it("can create new ticket on prod", async () => {
//   //   var mboAsset = await $(
//   //     `~mboimxComponent_0_1658937930560_0.5181636068209778`
//   //   );
//   //   await mboAsset.waitForDisplayed({ timeout: 30000 });
//   //   await mboAsset.click();
//   //   var actionButton = await $(
//   //     "~imxComponent_event_1658153492231_0.6645492948739823"
//   //   );
//   //   await actionButton.waitForDisplayed({ timeout: 30000 });
//   //   await actionButton.click();
//   //   var summaryField = await $("~FormInputText2");
//   //   await summaryField.waitForDisplayed({ timeout: 30000 });
//   //   await summaryField.addValue("tessst");
//   //   var submitButton = await $("~submitForm");
//   //   await submitButton.waitForDisplayed({ timeout: 30000 });
//   //   await submitButton.click();
//   // });
//   it("can create new asset", async () => {
//     var mboAsset = await $(`~mbom`);
//     await mboAsset.waitForDisplayed({ timeout: 30000 });
//     await mboAsset.click();
//     var subMboAsset = await $("~subMbo0");
//     await subMboAsset.waitForDisplayed({ timeout: 30000 });
//     await subMboAsset.click();
//     var actionButton = await $("~buttone");
//     await actionButton.waitForDisplayed({ timeout: 30000 });
//     await actionButton.click();
//     var assetField = await $("~FormInputText0");
//     await assetField.waitForDisplayed({ timeout: 30000 });
//     await assetField.addValue("testest1");
//     var serialField = await $("~FormInputText1");
//     await serialField.waitForDisplayed({ timeout: 30000 });
//     await serialField.addValue("100");
//     // var locationField = await $("~FormInputText3");
//     // await locationField.waitForDisplayed({ timeout: 30000 });
//     // await locationField.addValue("pt100");
//     var assetField = await $("~submitForm");
//     await assetField.waitForDisplayed({ timeout: 30000 });
//     await assetField.click();
//   });
// });

// describe("upload in carousel image test", () => {
//   it("can can login using options", async () => {
//     var username = await $(`~Username`);
//     await username.waitForDisplayed({ timeout: 30000 });
//     await username.addValue("lobna");
//     var password = await $(`~Password`);
//     await password.waitForDisplayed({ timeout: 30000 });
//     await password.addValue("imaxeam");
//     var optionsButton = await $(`~OptionsButton`);
//     await optionsButton.waitForDisplayed({ timeout: 30000 });
//     await optionsButton.click();
//     var optionsField = await $(`~OptionsField`);
//     await optionsField.waitForDisplayed({ timeout: 30000 });
//     await optionsField.addValue("prod.maxapps-maximo.com");
//     var connectButton = await $(`~connectButton`); //add condition
//     await connectButton.waitForDisplayed({ timeout: 30000 });
//     await connectButton.click();
//     var imxAlertButton = await $(`~imxButton2`);
//     await imxAlertButton.waitForDisplayed({ timeout: 30000 });
//     await imxAlertButton.click();
//   });
//   it("can upload images", async () => {
//     var listItem = await $(`~ListItem0`);
//     await listItem.waitForDisplayed({ timeout: 30000 });
//     if (listItem.isDisplayed) {
//       listItem.click();
//     }
//   });
// });

describe("upload media in form image test", () => {
  it("can can login using options", async () => {
    var username = await $(`~Username`);
    await username.waitForDisplayed({ timeout: 30000 });
    await username.addValue("lobna");
    var password = await $(`~Password`);
    await password.waitForDisplayed({ timeout: 30000 });
    await password.addValue("imaxeam");
    var optionsButton = await $(`~OptionsButton`);
    await optionsButton.waitForDisplayed({ timeout: 30000 });
    await optionsButton.click();
    var optionsField = await $(`~OptionsField`);
    await optionsField.waitForDisplayed({ timeout: 30000 });
    await optionsField.addValue("142.112.52.234:41004");
    var connectButton = await $(`~connectButton`); //add condition
    await connectButton.waitForDisplayed({ timeout: 30000 });
    await connectButton.click();
    var imxAlertButton = await $(`~imxButton2`);
    await imxAlertButton.waitForDisplayed({ timeout: 30000 });
    await imxAlertButton.click();
  });
  it("can upload media", async () => {
    var mboAsset = await $(`~mbo4`);
    await mboAsset.waitForDisplayed({ timeout: 30000 });
    await mboAsset.click();
    var actionButton = await $("~buttone");
    await actionButton.waitForDisplayed({ timeout: 30000 });
    await actionButton.click();
    //audio
    var audioIcon = await $("~AudioIcon");
    await audioIcon.waitForDisplayed({ timeout: 30000 });
    await audioIcon.click();
    var startStopAudio = await $("~StartStopAudio");
    await startStopAudio.waitForDisplayed({ timeout: 30000 });
    await startStopAudio.click();
    await startStopAudio.touchAction({ action: "wait", ms: 10000 });
    await startStopAudio.click();
    //video
  });
});

// describe("scroll test", () => {
//   it("can can login using options", async () => {
//     var username = await $(`~Username`);
//     await username.waitForDisplayed({ timeout: 30000 });
//     await username.addValue("lobna");
//     var password = await $(`~Password`);
//     await password.waitForDisplayed({ timeout: 30000 });
//     await password.addValue("imaxeam");
//     var optionsButton = await $(`~OptionsButton`);
//     await optionsButton.waitForDisplayed({ timeout: 30000 });
//     await optionsButton.click();
//     var optionsField = await $(`~OptionsField`);
//     await optionsField.waitForDisplayed({ timeout: 30000 });
//     await optionsField.addValue("142.112.52.234:41004");
//     var connectButton = await $(`~connectButton`); //add condition
//     await connectButton.waitForDisplayed({ timeout: 30000 });
//     await connectButton.click();
//     var imxAlertButton = await $(`~imxButton2`);
//     await imxAlertButton.waitForDisplayed({ timeout: 30000 });
//     await imxAlertButton.click();
//   });
//   it("can scroll (card/list mode)", async () => {
//     var mboAsset = await $(`~mbo4`);
//     await mboAsset.waitForDisplayed({ timeout: 30000 });
//     mboAsset.click();
//     var listItem = await $(`~ListItem0`);
//     await listItem.waitForDisplayed({ timeout: 30000 });
//     await listItem.click();
//   });
// });

describe("APIs test", () => {
  it.skip("test api", async () => {
    var codeField = await $(`~CodeField`);
    await codeField.waitForDisplayed({ timeout: 30000 });
    // assign value using add and set
    await codeField.addValue("test addvalue");
    await codeField.clearValue();
    await codeField.setValue("test setValue");
    let value = await codeField.getValue();
    assert(value === "test setValue");
  });
  it.skip("test click & doubclick", async () => {
    var userName = await $("~Username");
    await userName.waitForDisplayed({ timeout: 30000 });
    await userName.doubleClick(); //doubleclick notworking
  });
  it.skip("gets attribute", async () => {
    var userName = await $("~Username");
    let attr = await userName.getAttribute("clickable"); //works
    console.log("attr", attr);
    // var connectButton = await $("~connectButton");
    // let padding = await connectButton.getCSSProperty("padding"); //timeouted
    // console.log("padding", padding);
    //   let property = await connectButton.getProperty("testID");//timeouted
    //   console.log("property", property);
  });
  it.skip("get location", async () => {
    var connectButton = await $("~connectButton");
    let location = connectButton.getLocation();
    console.log("location", location);
  });
  it.skip("clicks 10px away", async () => {
    var codeField = await $("~connectButton");
    await codeField.waitForDisplayed({ timeout: 30000 });
    await codeField.touchAction({ action: "tap", x: 10, y: 10 });
  });
});

/*demo example*/
// describe("login test", () => {
//   it("can can login using options", async () => {
//     var username = await $(`~Username`);
//     await username.waitForDisplayed({ timeout: 30000 });
//     await username.addValue("lobna");
//     var password = await $(`~Password`);
//     await password.waitForDisplayed({ timeout: 30000 });
//     await password.addValue("imaxeam");
//     var optionsButton = await $(`~OptionsButton`);
//     await optionsButton.waitForDisplayed({ timeout: 30000 });
//     await optionsButton.click();
//     var optionsField = await $(`~OptionsField`);
//     await optionsField.waitForDisplayed({ timeout: 30000 });
//     await optionsField.addValue("142.112.52.234:43004");
//     var connectButton = await $(`~connectButton`);
//     await connectButton.waitForDisplayed({ timeout: 30000 });
//     await connectButton.click();

//     var imxAlertButton = await $(`~imxButton2`);
//     let isDisplayed = await imxAlertButton.isDisplayed();

//     if (isDisplayed) {
//       await imxAlertButton.click();
//     }
//   });
// });
