import type { Locator, Page } from '@playwright/test';

export class InventoryItemPage {
  readonly url = '/inventory-item.html';

  readonly backToProductsButton: Locator;
  readonly itemContainer: Locator;
  readonly itemName: Locator;
  readonly itemDescription: Locator;
  readonly itemPrice: Locator;
  readonly addToCartButton: Locator;
  readonly removeButton: Locator;

  constructor(page: Page) {
    this.backToProductsButton = page.getByTestId('back-to-products');
    this.itemContainer = page.getByTestId('inventory-item');
    this.itemName = page.getByTestId('inventory-item-name');
    this.itemDescription = page.getByTestId('inventory-item-desc');
    this.itemPrice = page.getByTestId('inventory-item-price');
    this.addToCartButton = page.getByTestId('add-to-cart');
    this.removeButton = page.getByTestId('remove');
  }
}
