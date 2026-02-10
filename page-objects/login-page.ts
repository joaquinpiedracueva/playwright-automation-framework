import type { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly heading: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly errorButton: Locator;
  readonly loginContainer: Locator;
  readonly credentialsContainer: Locator;
  readonly credentialsInfo: Locator;
  readonly passwordInfo: Locator;

  constructor(page: Page) {
    this.heading = page.locator('.login_logo').filter({ hasText: 'Swag Labs' });
    this.usernameInput = page.getByTestId('username');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-button');
    this.errorMessage = page.getByTestId('error');
    this.errorButton = page.getByTestId('error-button');
    this.loginContainer = page.getByTestId('login-container');
    this.credentialsContainer = page.getByTestId('login-credentials-container');
    this.credentialsInfo = page.getByTestId('login-credentials');
    this.passwordInfo = page.getByTestId('login-password');
  }
}
