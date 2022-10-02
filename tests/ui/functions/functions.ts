import { Page } from "@playwright/test";
import { Selectors } from "../selectors/selectors";

export async function NavbarTest(page: Page) {
    await page.waitForSelector(Selectors.NAVBAR)
    await page.waitForSelector(Selectors.NAVBAR_HOME)
    await page.waitForSelector(Selectors.NAVBAR_SHOWRUNNER)
    await page.waitForSelector(Selectors.NAVBAR_THIS_MERCHANT_LIFE)
    await page.waitForSelector(Selectors.NAVBAR_PRESS_KIT)
}