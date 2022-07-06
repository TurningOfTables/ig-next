import { test, expect } from "@playwright/test";
import { Selectors } from "./selectors/selectors";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load with major components", async ({ page }) => {
    await page.waitForSelector(Selectors.HEADER_IMAGE);
    await page.waitForSelector(Selectors.INTRO_TEXT);
    await page.waitForSelector(Selectors.INTRO_TEXT_QUOTE);
    await page.waitForSelector(Selectors.FOOTER);
  });
});
