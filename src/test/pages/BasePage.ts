import { Locator, Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async click(locator: Locator) {
    await locator.click();
  }

  async fill(locator: Locator, value: string) {
    await locator.fill(value);
  }

  async navigation(url?: string) {
    const target = url || process.env.loginurl || "https://demowebshop.tricentis.com/";
    await this.page.goto(target, { waitUntil: "networkidle" });
  }
}
