import type { Locator, Page } from '@playwright/test';

export class CheckoutCompletePage {
  readonly url = '/checkout-complete.html';

  readonly title: Locator;
  readonly checkoutCompleteContainer: Locator;
  readonly ponyExpressImage: Locator;
  readonly completeHeader: Locator;
  readonly completeText: Locator;
  readonly backToProductsButton: Locator;

  constructor(page: Page) {
    this.title = page.getByTestId('title');
    this.checkoutCompleteContainer = page.getByTestId('checkout-complete-container');
    this.ponyExpressImage = page.getByTestId('pony-express');
    this.completeHeader = page.getByTestId('complete-header');
    this.completeText = page.getByTestId('complete-text');
    this.backToProductsButton = page.getByTestId('back-to-products');
  }
}
