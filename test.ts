import { test as base } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { LoginPage } from './page-objects/login-page';
import { InventoryPage } from './page-objects/inventory-page';
import { InventoryItemPage } from './page-objects/inventory-item-page';
import { CartPage } from './page-objects/cart-page';
import { CheckoutStepOnePage } from './page-objects/checkout-step-one-page';
import { CheckoutStepTwoPage } from './page-objects/checkout-step-two-page';
import { CheckoutCompletePage } from './page-objects/checkout-complete-page';
import { HeaderComponent } from './page-objects/header-component';
import { SidebarComponent } from './page-objects/sidebar-component';
import { FooterComponent } from './page-objects/footer-component';

type Fixtures = {
  axeBuilder: AxeBuilder;
  headerComponent: HeaderComponent;
  sidebarComponent: SidebarComponent;
  footerComponent: FooterComponent;
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  inventoryItemPage: InventoryItemPage;
  cartPage: CartPage;
  checkoutStepOnePage: CheckoutStepOnePage;
  checkoutStepTwoPage: CheckoutStepTwoPage;
  checkoutCompletePage: CheckoutCompletePage;
};

export const test = base.extend<Fixtures>({
  headerComponent: async ({ page }, use) => {
    await use(new HeaderComponent(page));
  },
  sidebarComponent: async ({ page }, use) => {
    await use(new SidebarComponent(page));
  },
  footerComponent: async ({ page }, use) => {
    await use(new FooterComponent(page));
  },
  axeBuilder: async ({ page }, use) => {
    await use(new AxeBuilder({ page }));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  inventoryItemPage: async ({ page }, use) => {
    await use(new InventoryItemPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutStepOnePage: async ({ page }, use) => {
    await use(new CheckoutStepOnePage(page));
  },
  checkoutStepTwoPage: async ({ page }, use) => {
    await use(new CheckoutStepTwoPage(page));
  },
  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },
});

export { expect } from '@playwright/test';
export type { Page, Locator, TestInfo } from '@playwright/test';