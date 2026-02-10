import type { Locator, Page } from '@playwright/test';

export class CheckoutStepTwoPage {
  readonly url = '/checkout-step-two.html';

  readonly title: Locator;
  readonly checkoutSummaryContainer: Locator;
  readonly cartList: Locator;
  readonly cartQuantityLabel: Locator;
  readonly cartDescLabel: Locator;
  readonly cartItems: Locator;
  readonly itemQuantity: Locator;
  readonly itemName: Locator;
  readonly itemDescription: Locator;
  readonly itemPrice: Locator;
  readonly paymentInfoLabel: Locator;
  readonly paymentInfoValue: Locator;
  readonly shippingInfoLabel: Locator;
  readonly shippingInfoValue: Locator;
  readonly totalInfoLabel: Locator;
  readonly subtotalLabel: Locator;
  readonly taxLabel: Locator;
  readonly totalLabel: Locator;
  readonly cancelButton: Locator;
  readonly finishButton: Locator;

  constructor(page: Page) {
    this.title = page.getByTestId('title');
    this.checkoutSummaryContainer = page.getByTestId('checkout-summary-container');
    this.cartList = page.getByTestId('cart-list');
    this.cartQuantityLabel = page.getByTestId('cart-quantity-label');
    this.cartDescLabel = page.getByTestId('cart-desc-label');
    this.cartItems = page.getByTestId('inventory-item');
    this.itemQuantity = page.getByTestId('item-quantity');
    this.itemName = page.getByTestId('inventory-item-name');
    this.itemDescription = page.getByTestId('inventory-item-desc');
    this.itemPrice = page.getByTestId('inventory-item-price');
    this.paymentInfoLabel = page.getByTestId('payment-info-label');
    this.paymentInfoValue = page.getByTestId('payment-info-value');
    this.shippingInfoLabel = page.getByTestId('shipping-info-label');
    this.shippingInfoValue = page.getByTestId('shipping-info-value');
    this.totalInfoLabel = page.getByTestId('total-info-label');
    this.subtotalLabel = page.getByTestId('subtotal-label');
    this.taxLabel = page.getByTestId('tax-label');
    this.totalLabel = page.getByTestId('total-label');
    this.cancelButton = page.getByTestId('cancel');
    this.finishButton = page.getByTestId('finish');
  }
}
