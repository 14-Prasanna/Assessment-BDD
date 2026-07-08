import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  private registerLink: Locator;
  private genderMale: Locator;
  private fname: Locator;
  private lname: Locator;
  private email: Locator;
  private registerPass: Locator;
  private confPass: Locator;
  private registerBtn: Locator;
  private errorMsg: Locator;
  private successMsg: Locator;

  constructor(page: Page) {
    super(page);
    this.registerLink = page.getByRole('link', { name: 'Register' });
    this.genderMale = page.locator('#gender-male');
    this.fname = page.locator('#FirstName');
    this.lname = page.locator('#LastName');
    this.email = page.locator('#Email');
    this.registerPass = page.locator('#Password');
    this.confPass = page.locator('#ConfirmPassword');
    this.registerBtn = page.locator('#register-button');
    this.errorMsg = page.locator("//div[@class='validation-summary-errors']");
    this.successMsg = page.locator("//div[@class='result']");
  }

  async clickRegisterLink() { await this.click(this.registerLink); }

  async register(fname: string, lname: string, email: string, password: string, confpass: string) {
    await this.click(this.genderMale);
    await this.fill(this.fname, fname);
    await this.fill(this.lname, lname);
    await this.fill(this.email, email);
    await this.fill(this.registerPass, password);
    await this.fill(this.confPass, confpass);
    await this.click(this.registerBtn);
  }

  async validateSuccess(result: string) {
    await expect(this.successMsg).toContainText(result);
  }

  async validateFailure(result: string) {
    await expect(this.errorMsg).toContainText(result);
  }
}
