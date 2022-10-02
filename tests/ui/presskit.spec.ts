import { test } from "@playwright/test";
import { NavbarTest } from "./functions/functions";
import { Selectors } from "./selectors/selectors";

test.describe("Presskit Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/presskit");
  });

  test("should load with major components", async ({ page }) => {
    await NavbarTest(page);
    await page.waitForSelector(Selectors.FOOTER);
  });
});
