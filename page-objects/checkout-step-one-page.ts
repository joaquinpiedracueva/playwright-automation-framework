import type { Locator, Page } from '@playwright/test';

export class CheckoutStepOnePage {
  readonly url = '/checkout-step-one.html';

  readonly title: Locator;
  readonly checkoutInfoContainer: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly cancelButton: Locator;
  readonly continueButton: Locator;
  readonly errorMessage: Locator;
  readonly errorButton: Locator;

  constructor(page: Page) {
    this.title = page.getByTestId('title');
    this.checkoutInfoContainer = page.getByTestId('checkout-info-container');
    this.firstNameInput = page.getByTestId('firstName');
    this.lastNameInput = page.getByTestId('lastName');
    this.postalCodeInput = page.getByTestId('postalCode');
    this.cancelButton = page.getByTestId('cancel');
    this.continueButton = page.getByTestId('continue');
    this.errorMessage = page.getByTestId('error');
    this.errorButton = page.getByTestId('error-button');
  }
}
