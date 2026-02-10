import type { Locator, Page } from '@playwright/test';

export class HeaderComponent {
  readonly heading: Locator;
  readonly shoppingCartLink: Locator;
  readonly openMenuButton: Locator;
  readonly closeMenuButton: Locator;

  constructor(page: Page) {
    this.heading = page.locator('.app_logo').filter({ hasText: 'Swag Labs' });
    this.shoppingCartLink = page.getByTestId('shopping-cart-link');
    this.openMenuButton = page.getByTestId('open-menu');
    this.closeMenuButton = page.getByTestId('close-menu');
  }
}
