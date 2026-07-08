import {setWorldConstructor, World} from '@cucumber/cucumber'
import {Browser, BrowserContext, Page} from '@playwright/test'
import { LoginPage } from '../test/pages/LoginPage'
import { RegisterPage } from '../test/pages/registerPage'


export class PrasannaWorld extends World{
    browser !: Browser
    context !: BrowserContext
    page !: Page


    loginPage!: LoginPage
    registerPage !: RegisterPage
}

setWorldConstructor(PrasannaWorld);