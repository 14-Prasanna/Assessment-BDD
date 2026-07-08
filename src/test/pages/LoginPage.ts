import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  private loginlink = this.page.locator("//a[@class='ico-login']");
  private email = this.page.locator("#Email");
  private password = this.page.locator("#Password");
  private loginbtn = this.page.locator("//input[@value='Log in']");
  private error = this.page.locator("//div[@class='validation-summary-errors']");
  private account = this.page.locator("//a[contains(@href,'customer/info')]");

  async clickloginlink() { 

    await this.click(this.loginlink); 
}
  async enteremail(email: string) { 
    
    await this.fill(this.email, email); 

    }
  async enterpass(pass: string) { 
    await this.fill(this.password, pass); 
}
  async clkloginbtn() { 
    await this.click(this.loginbtn);
 }

  async successmsg() { 
    return (await this.account.textContent())?.trim() || ""; 
}
  async errormsg() {
     return (await this.error.textContent())?.trim() || ""; 
    }
}
