import { test as base, expect } from '@playwright/test';

// Pages
import { LoginPage } from './pages/LoginPage';

type Pages = {
  loginPage: LoginPage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect };
export type { Page, Locator } from '@playwright/test';