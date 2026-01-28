import { test, expect } from '../fixtures';

type Page =
  | 'LoginPage'
type Assertion = 'Elements';
type TestCase = `${Page} - ${Assertion}`;

test.describe('UI Automation', () => {
  test('LoginPage - Elements' satisfies TestCase, async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.assertPageElements();
  });
});