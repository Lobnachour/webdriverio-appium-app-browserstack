describe("login test", () => {
  it("can can login using options", async () => {
    var username = await $(`~Username`);
    await username.waitForDisplayed({ timeout: 30000 });
    switch (browser.capabilities.sessionName) {
      case "session1":
        await username.addValue("lobna");
        break;
      case "session2":
        await username.addValue("riadh");
        break;
      case "session3":
        await username.addValue("ines");
        break;
      case "session4":
        await username.addValue("hamza");
        break;
      case "session5":
        await username.addValue("jasser");
        break;
      case "session6":
        await username.addValue("yessine");
        break;
      case "session7":
        await username.addValue("oussama");
        break;
      case "session8":
        await username.addValue("oumayma");
        break;
      case "session9":
        await username.addValue("bassem");
        break;
      case "session10":
        await username.addValue("medamin");
        break;
      case "session11":
        await username.addValue("user1");
        break;
      case "session12":
        await username.addValue("user2");
        break;
      case "session13":
        await username.addValue("user3");
        break;
      case "session14":
        await username.addValue("user4");
        break;
      case "session15":
        await username.addValue("user5");
        break;
      case "session16":
        await username.addValue("user6");
        break;
      case "session17":
        await username.addValue("user7");
        break;
      case "session18":
        await username.addValue("user8");
        break;
      case "session19":
        await username.addValue("user9");
        break;
      case "session20":
        await username.addValue("user10");
        break;
      case "session21":
        await username.addValue("user11");
        break;
      case "session22":
        await username.addValue("user12");
        break;
      case "session23":
        await username.addValue("user13");
        break;
      case "session24":
        await username.addValue("user14");
        break;
      case "session25":
        await username.addValue("user15");
        break;
      case "session26":
        await username.addValue("user16");
        break;
      case "session27":
        await username.addValue("user17");
        break;
      case "session28":
        await username.addValue("user18");
        break;
      case "session29":
        await username.addValue("user19");
        break;
      case "session30":
        await username.addValue("user20");
        break;
      case "session31":
        await username.addValue("user21");
        break;
      case "session32":
        await username.addValue("user22");
        break;
      case "session33":
        await username.addValue("user23");
        break;
      case "session34":
        await username.addValue("user24");
        break;
      case "session35":
        await username.addValue("user25");
        break;
      case "session36":
        await username.addValue("user26");
        break;
      case "session37":
        await username.addValue("user27");
        break;
      case "session38":
        await username.addValue("user28");
        break;
      case "session39":
        await username.addValue("user29");
        break;
      case "session40":
        await username.addValue("user30");
        break;
      case "session41":
        await username.addValue("user31");
        break;
      case "session42":
        await username.addValue("user32");
        break;
      case "session43":
        await username.addValue("user33");
        break;
      case "session44":
        await username.addValue("user34");
        break;
      case "session45":
        await username.addValue("user35");
        break;
      case "session46":
        await username.addValue("user36");
        break;
      case "session47":
        await username.addValue("user37");
        break;
      case "session48":
        await username.addValue("user38");
        break;
      case "session49":
        await username.addValue("user39");
        break;
      case "session50":
        await username.addValue("user40");
        break;

      default:
        await username.addValue("lobna");
    }
    var password = await $(`~Password`);
    await password.waitForDisplayed({ timeout: 30000 });
    await password.addValue("imaxeam");
    var optionsButton = await $(`~OptionsButton`);
    await optionsButton.waitForDisplayed({ timeout: 30000 });
    await optionsButton.click();
    var optionsField = await $(`~OptionsField`);
    await optionsField.waitForDisplayed({ timeout: 30000 });
    await optionsField.addValue("uat.maxapps-maximo.com");
    var connectButton = await $(`~connectButton`); //add condition
    await connectButton.waitForDisplayed({ timeout: 30000 });
    await connectButton.click();
    var imxAlertButton = await $(`~imxButton2`);
    let isDisplayed = await imxAlertButton.isDisplayed();

    if (isDisplayed) {
      await imxAlertButton.click();
    }
  });
  it("clicks sr", async () => {
    var mboAsset = await $(`~mbo1`);
    await mboAsset.waitForDisplayed({ timeout: 30000 });
    await mboAsset.click();
  });
});
