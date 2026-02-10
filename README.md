# 🎭 Playwright Automation Framework

![Playwright](https://img.shields.io/badge/playwright-v1.58.1-FFFFFF)

A comprehensive Playwright + TypeScript test automation framework demonstrating cross-browser UI, API, accessibility, and visual regression testing.

## Getting Started

```bash
# Install dependencies
npm install

# Install browsers
npx playwright install

# Run all tests
npx playwright test

# Show HTML report
npx playwright show-report
```

### Available Projects

| Project                                                                   | Description                                         |
| ------------------------------------------------------------------------- | --------------------------------------------------- |
| `ui-web-chromium`, `ui-web-firefox`, `ui-web-webkit`                      | Cross-browser UI tests against saucedemo.com        |
| `ui-mobile-chromium`, `ui-mobile-webkit`                                  | Mobile viewport tests (Pixel 7, iPhone 15)          |
| `api`                                                                     | REST API tests against restful-booker.herokuapp.com |
| `accessibility-chromium`, `accessibility-firefox`, `accessibility-webkit` | WCAG compliance tests using axe-core                |

## Architecture

### Custom Fixtures

Extends Playwright's base test with Page Object fixtures. Tests import from `./test` instead of `@playwright/test`:

```typescript
import {test, expect} from "../test";
```

### Page Object Model

Page and component classes encapsulate locators in `page-objects/`. Shared UI regions (header, sidebar, footer) are modeled as independent component classes rather than a base class with inheritance. This is a deliberate choice for readability: when a test clicks a sidebar link, it references `sidebar.logoutLink` instead of `inventoryPage.logoutLink`, making it clear which UI component is being interacted with.

```
page-objects/
  login-page.ts            # Login-specific locators
  inventory-page.ts        # Inventory-specific locators (sort, items)
  header-component.ts      # Shared header (logo, cart, menu buttons)
  sidebar-component.ts     # Shared sidebar (nav links)
  footer-component.ts      # Shared footer (social links, copyright)
```

```typescript
// Tests reference the actual component, not a page that inherits it
test('example', async ({ header, sidebar, footer, inventoryPage }) => {
  await header.shoppingCartLink.click();        // header owns this
  await sidebar.logoutLink.click();             // sidebar owns this
  await expect(footer.container).toBeVisible(); // footer owns this
  await expect(inventoryPage.title).toHaveText('Products'); // page-specific
});
```

### Visual Baselines

Screenshots stored in `baselines/` with platform-specific paths:

- `baselines/web/` - Desktop browsers
- `baselines/mobile/android/` - Android viewports
- `baselines/mobile/ios/` - iOS viewports

### Playwright CLI

Login page locators and tests were built using [playwright-cli](https://github.com/microsoft/playwright-cli) to interactively inspect the DOM, identify `data-test` attributes, and verify error states before adding them to the Page Object Model and test specs.

### Environment Variables

Test credentials loaded from `.env` via dotenv. The `.env` file is tracked in git as it contains only public saucedemo.com test credentials for demonstration purposes.
