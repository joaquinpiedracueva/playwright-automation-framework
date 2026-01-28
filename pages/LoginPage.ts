import { expect } from '../fixtures';
import type { Locator, Page } from '../fixtures';

export class LoginPage {
  constructor(
    private page: Page,
    private pageUrl: string = '/',
    private pageHeading: Locator = page.locator('.login_logo'),
    private usernameInput: Locator = page.locator('[data-test="username"]'),
    private passwordInput: Locator = page.locator('[data-test="password"]'),
    private loginButton: Locator = page.locator('[data-test="login-button"]'),
    private errorMessageContainer: Locator = page.locator('[data-test="error"]'),
    private acceptedUsernamesHeading: Locator = page.getByRole('heading', { name: 'Accepted usernames are:' }),
    private acceptedPasswordsHeading: Locator = page.getByRole('heading', { name: 'Password for all users:' }),
    private loginCredentialsList: Locator = page.locator('[data-test="login-credentials"]'),
    private loginPasswordList: Locator = page.locator('[data-test="login-password"]'),
  ) {}

  async goto() {
    await this.page.goto(this.pageUrl);
  }

  async assertPageElements() {
    await expect(this.page).toHaveURL(this.pageUrl);
    await expect(this.pageHeading).toBeVisible();
    await expect(this.pageHeading).toHaveText('Swag Labs');
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
    await expect(this.acceptedUsernamesHeading).toBeVisible();
    await expect(this.acceptedPasswordsHeading).toBeVisible();
    await expect(this.loginCredentialsList).toBeVisible();
    await expect(this.loginPasswordList).toBeVisible();
    await expect(this.loginCredentialsList).toContainText('standard_user');
    await expect(this.loginCredentialsList).toContainText('locked_out_user');
    await expect(this.loginCredentialsList).toContainText('problem_user');
    await expect(this.loginCredentialsList).toContainText('performance_glitch_user');
    await expect(this.loginCredentialsList).toContainText('error_user');
    await expect(this.loginCredentialsList).toContainText('visual_user');
    await expect(this.loginPasswordList).toContainText('secret_sauce');
    await expect(this.errorMessageContainer).toBeHidden();
  }
}