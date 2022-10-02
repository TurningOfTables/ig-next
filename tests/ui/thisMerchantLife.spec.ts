import { test } from "@playwright/test";
import { NavbarTest } from "./functions/functions";
import { Selectors } from "./selectors/selectors";

test.describe("This Merchant Life", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/this-merchant-life");
  });

  test("should load with major components", async ({ page }) => {
    await NavbarTest(page);
    await page.waitForSelector(Selectors.FOOTER);
  });
});
