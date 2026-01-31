import { test, expect } from '../fixtures';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should match login page screenshot', async ({ page }) => {
      await expect(page).toHaveScreenshot('LoginPage.png');
  });

  test('should display logo and form elements', async ({ loginPage }) => {
    await expect(loginPage.logo).toBeVisible();
    await expect(loginPage.logo).toHaveText('Swag Labs');
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('should show error for invalid credentials', async ({ loginPage }) => {
    await loginPage.login('invalid_user', 'wrong_password');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
  });

  test('should show error for locked out user', async ({ loginPage }) => {
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out');
  });

  test('should login successfully with valid credentials', async ({ page, loginPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL('/inventory.html');
  });
});
