import type { Locator, Page } from '@playwright/test';

export class CartPage {
  readonly url = '/cart.html';

  readonly title: Locator;
  readonly cartContentsContainer: Locator;
  readonly cartList: Locator;
  readonly cartQuantityLabel: Locator;
  readonly cartDescLabel: Locator;
  readonly cartItems: Locator;
  readonly itemQuantity: Locator;
  readonly itemName: Locator;
  readonly itemDescription: Locator;
  readonly itemPrice: Locator;
  readonly continueShoppingButton: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.title = page.getByTestId('title');
    this.cartContentsContainer = page.getByTestId('cart-contents-container');
    this.cartList = page.getByTestId('cart-list');
    this.cartQuantityLabel = page.getByTestId('cart-quantity-label');
    this.cartDescLabel = page.getByTestId('cart-desc-label');
    this.cartItems = page.getByTestId('inventory-item');
    this.itemQuantity = page.getByTestId('item-quantity');
    this.itemName = page.getByTestId('inventory-item-name');
    this.itemDescription = page.getByTestId('inventory-item-desc');
    this.itemPrice = page.getByTestId('inventory-item-price');
    this.continueShoppingButton = page.getByTestId('continue-shopping');
    this.checkoutButton = page.getByTestId('checkout');
  }
}
