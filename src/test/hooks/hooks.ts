import { Before, After, BeforeAll, AfterAll, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { PrasannaWorld } from "../../world/PrasannaWorld";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/registerPage";


let browser: Browser

setDefaultTimeout(60 * 1000);

BeforeAll({ timeout: 60 * 1000 }, async () =>{
    browser = await chromium.launch({ headless: true });
});


Before(async function(this: PrasannaWorld) {
    this.browser = browser
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.page.setDefaultTimeout(60 * 1000);
    this.page.setDefaultNavigationTimeout(60 * 1000);

    this.loginPage = new LoginPage(this.page);
    this.registerPage = new RegisterPage(this.page)
});

After(async function (this:PrasannaWorld, {pickle, result}) {
    if (result?.status === Status.FAILED && this.page) {
        const screenshot = await this.page.screenshot({
            path: `reports/screenshots/${pickle.name}.png`
        });

        await this.attach(screenshot, "image/png");
    }

    await this.page?.close();
    await this.context?.close();
});

AfterAll( async () =>{
    await browser?.close();
})


