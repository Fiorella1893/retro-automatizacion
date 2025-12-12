import { Page } from 'playwright';

export class ProductsPage {
  constructor(private page: Page) {}
  async isVisible() {
    return this.page.isVisible(".inventory_list");
  }
}
