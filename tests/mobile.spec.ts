import { test, expect } from '@playwright/test';

type Page =
  | 'LoginPage'
type Assertion = 'Screenshot';
type TestCase = `${Page} - ${Assertion}`;

test.describe('Mobile Tests', () => {
  test('LoginPage - Screenshot' satisfies TestCase, async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('LoginPage.png');
  });
});