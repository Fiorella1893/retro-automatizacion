import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CustomWorld } from "../support/world";

Given("I open the login page", async function (this: CustomWorld) {
  this.login = new LoginPage(this.page!);
  await this.login.open();
});

When("I login with {string} and {string}", async function (this: CustomWorld, u: string, p: string) {
  await this.login.login(u,p);
});

Then("I should be in products page", async function (this: CustomWorld) {
  const products = new ProductsPage(this.page!);
  expect(await products.isVisible()).to.be.true;
});

Then("I should see an error", async function (this: CustomWorld) {
  const msg = await this.login.getError();
  expect(msg).to.not.be.null;
});
