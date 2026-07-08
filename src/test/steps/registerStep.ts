import { Given, When, Then } from '@cucumber/cucumber';
import { PrasannaWorld } from './../../world/PrasannaWorld';

Given('the user is on the Demo Webshop home page', async function (this: PrasannaWorld) {
  const url = process.env.registerurl || "https://demowebshop.tricentis.com/";
  await this.page.goto(url, { waitUntil: "networkidle" });
  await this.page.waitForSelector(".ico-register");
});

When('the user clicks register link on the home page', async function (this: PrasannaWorld) {
  await this.registerPage.clickRegisterLink();
});

When('the user enters the first name {string}', async function (this: PrasannaWorld, firstname: string) {
  await this.registerPage.fill(this.registerPage['fname'], firstname);
});

When('the user enters the last name {string}', async function (this: PrasannaWorld, lastname: string) {
  await this.registerPage.fill(this.registerPage['lname'], lastname);
});

When('the user enters the email {string}', async function (this: PrasannaWorld, email: string) {
  await this.registerPage.fill(this.registerPage['email'], email);
});

When('the user enters the password {string}', async function (this: PrasannaWorld, password: string) {
  await this.registerPage.fill(this.registerPage['registerPass'], password);
});

When('the user enters the confirm password {string}', async function (this: PrasannaWorld, confpass: string) {
  await this.registerPage.fill(this.registerPage['confPass'], confpass);
});

When('the user clicks the register button', async function (this: PrasannaWorld) {
  await this.registerPage.click(this.registerPage['registerBtn']);
});

Then('the registration result should be {string}', async function (this: PrasannaWorld, result: string) {
  if (result.includes('completed')) {
    await this.registerPage.validateSuccess(result);
  } else {
    await this.registerPage.validateFailure(result);
  }
});
