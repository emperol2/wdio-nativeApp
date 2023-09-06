import NativeApp from "../pages/nativeAppExample";
import AllureReporter from "@wdio/allure-reporter";

describe("Native App Test Suite Example", () => {
  afterEach(async () => {
    //@ts-ignore
    await browser.resetApp();
  });

  it("Should be able to select animation for list", async () => {
    AllureReporter.addSeverity("minor");
    AllureReporter.addStory("Check bouncing balls in animations list");
    AllureReporter.addDescription(
      "Animations list will be loaded and will contains bouncing balls",
      "text"
    );
    await NativeApp.selectOption("Animation");
    await expect(NativeApp.bouncingBalls).toBeDisplayed();
  });
});
