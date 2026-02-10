import type { Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly url = '/inventory.html';

  // Sort
  readonly title: Locator;
  readonly sortDropdown: Locator;
  readonly activeSortOption: Locator;

  // Inventory
  readonly inventoryContainer: Locator;
  readonly inventoryList: Locator;
  readonly inventoryItems: Locator;

  constructor(page: Page) {
    this.title = page.getByTestId('title');
    this.sortDropdown = page.getByTestId('product-sort-container');
    this.activeSortOption = page.getByTestId('active-option');

    this.inventoryContainer = page.getByTestId('inventory-container');
    this.inventoryList = page.getByTestId('inventory-list');
    this.inventoryItems = page.getByTestId('inventory-item');
  }
}
