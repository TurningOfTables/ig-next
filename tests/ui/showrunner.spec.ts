import { test, expect } from "@playwright/test";
import { Selectors } from "./selectors/selectors";

test.describe("Showrunner", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/showrunner");
  });

  test("should load with major components", async ({ page }) => {
    await page.waitForSelector(Selectors.FOOTER);
  });
});
