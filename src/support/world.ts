import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";

export class CustomWorld extends World {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
  login: any;
}

setWorldConstructor(CustomWorld);
