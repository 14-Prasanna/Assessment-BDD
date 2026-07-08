import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { PrasannaWorld } from "../../world/PrasannaWorld";
import { LoginDet, csvdata } from "../../utils/csvReader";

let loginDetails: LoginDet;

Given('user is on the login page of the demowebshop website', async function (this: PrasannaWorld) {
  const baseUrl = process.env.BASE_URL || "https://demowebshop.tricentis.com/";
  const loginUrl = new URL("/login", baseUrl).toString();
  await this.page.goto(loginUrl, { waitUntil: "domcontentloaded" });
});

Given('user enters the credentials {string}', async function (this: PrasannaWorld, type: string) {
  const data = csvdata();
  const user = data.find(item => item.type.trim().toLowerCase() === type.trim().toLowerCase());
  if (!user) throw new Error(`No login data found for type: ${type}`);
  loginDetails = user;
  await this.loginPage.enteremail(loginDetails.email);
  await this.loginPage.enterpass(loginDetails.password);
});

When('user clicks on the login button', async function (this: PrasannaWorld) {
  await this.loginPage.clkloginbtn();
});

Then('user should see the corresponding messages', async function (this: PrasannaWorld) {
  const normalize = (value: string) => value.replace(/\s+/g, ' ').trim();

  if (loginDetails.type === "valid") {
    expect(await this.loginPage.successmsg()).toContain(loginDetails.email);
  } else {
    expect(normalize(await this.loginPage.errormsg())).toContain("Login was unsuccessful. Please correct the errors and try again.");
  }
});
