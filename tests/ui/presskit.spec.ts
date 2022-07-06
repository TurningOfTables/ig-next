import { test, expect } from "@playwright/test";
import { Selectors } from "./selectors/selectors";

test.describe("Presskit Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/presskit");
  });

  test("should load with major components", async ({ page }) => {
    await page.waitForSelector(Selectors.FOOTER);
  });
});
