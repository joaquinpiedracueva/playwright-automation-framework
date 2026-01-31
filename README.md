# Playwright Automation Framework

## Structure

```
├── .github/
│   └── workflows/
│       └── playwright.yml   # CI workflow for GitHub Actions
├── .gitignore
├── README.md
├── fixtures.ts              # Custom Playwright fixtures with page object injection
├── package.json             # Dependencies and scripts
├── package-lock.json
├── playwright.config.ts     # Test configuration and project definitions
├── tsconfig.json            # TypeScript configuration
├── pages/                   # Page Object Model classes
│   └── LoginPage.ts
├── tests/
│   ├── ui.spec.ts           # Cross-browser UI and visual tests
│   ├── api.spec.ts          # REST API tests
│   ├── accessibility.spec.ts # axe-core a11y tests
│   └── mobile.spec.ts       # Mobile screenshot tests
├── baselines/               # Visual regression baseline images
│   ├── web/                 # Desktop browser baselines
│   └── mobile/
│       ├── android/         # Pixel 7 baselines
│       └── ios/             # iPhone 15 baselines
├── test-results/            # Test execution artifacts
└── playwright-report/       # HTML report output
```

## Commands

```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/ui.spec.ts

# Run specific project (defined in playwright.config.ts)
npx playwright test --project=api
npx playwright test --project=ui-chromium
npx playwright test --project=accessibility-chromium
npx playwright test --project=mobile-chromium
npx playwright test --project=mobile-webkit

# Run single test by name
npx playwright test -g "LoginPage"

# Update UI baselines
npx playwright test --project=ui-chromium --update-snapshots

# Update mobile baselines
npx playwright test --project=mobile-chromium --update-snapshots
npx playwright test --project=mobile-webkit --update-snapshots

# Show HTML report
npx playwright show-report
```

## Architecture

### Test Types and Projects

- **UI Tests** (`ui.spec.ts`): Browser-based UI and visual regression tests against saucedemo.com. Run on Chromium, Firefox, and WebKit. Desktop baselines stored in `baselines/web/`.
- **API Tests** (`api.spec.ts`): REST API tests against restful-booker.herokuapp.com. No browser required.
- **Accessibility Tests** (`accessibility.spec.ts`): axe-core based a11y testing against a11y.me. Multi-browser.
- **Mobile Tests** (`mobile.spec.ts`): Mobile screenshot tests using Pixel 7 (Android) and iPhone 15 (iOS) device emulation. Baselines stored in `baselines/mobile/`.

### Page Object Model

- **`fixtures.ts`**: Custom Playwright fixtures that inject page objects into tests. Import `test` and `expect` from here instead of `@playwright/test`.
- **`pages/`**: Page object classes. Each page encapsulates locators (defined in constructor parameters) and action methods.

### Configuration (playwright.config.ts)

- Visual snapshot tolerance: 3% locally, 4% in CI
- CI mode: Uses GitHub + HTML reporters, 2 workers, 1 retry
- Local mode: HTML reporter, 3 workers, no retries
- Mobile baselines organized by platform (`baselines/mobile/android/`, `baselines/mobile/ios/`)
- Desktop baselines stored in `baselines/web/`