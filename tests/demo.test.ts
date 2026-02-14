import { test, expect } from '../test';

test.describe('unauthenticated', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test('should register and login new user', async ({ navComponent, registerPage, loginPage }) => {
    await registerPage.goto();
    await navComponent.dismissDialogs();
    const email = `user_${Date.now()}@juiceshop.com`;
    const password = 'new_password';
    await registerPage.register(email, password, 'Your eldest siblings middle name?', 'Bob');
    await expect(loginPage.heading).toBeVisible();
    await loginPage.login(email, password);
    await expect(navComponent.shoppingCart).toBeVisible();
  });
});

test.describe('authenticated', () => {
  test('should logout when authenticated', async ({ navComponent, homePage }) => {
    await homePage.goto();
    await expect(navComponent.shoppingCart).toBeVisible();
    await navComponent.logout();
    await expect(navComponent.shoppingCart).not.toBeVisible();
  });
});
