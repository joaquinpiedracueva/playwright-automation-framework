import { test, expect } from '@playwright/test';

test.describe('Mobile Tests', () => {
  test('should match login page screenshot', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('LoginPage.png');
  });
});