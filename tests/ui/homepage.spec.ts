import { test } from "@playwright/test";
import { NavbarTest } from "./functions/functions";
import { Selectors } from "./selectors/selectors";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load with major components", async ({ page }) => {
    await NavbarTest(page);

    await page.waitForSelector(Selectors.HEADER_IMAGE);
    await page.waitForSelector(Selectors.INTRO_TEXT);
    await page.waitForSelector(Selectors.INTRO_TEXT_QUOTE);

    await page.waitForSelector(Selectors.GAME_CARD_SHOWRUNNER);
    await page.waitForSelector(Selectors.GAME_CARD_THIS_MERCHANT_LIFE);
    await page.waitForSelector(Selectors.BUY_NOW_SHOWRUNNER);
    await page.waitForSelector(Selectors.BUY_NOW_THIS_MERCHANT_LIFE);

    await page.waitForSelector(Selectors.FOOTER);
  });
});
