import { test, expect } from '../test';

test.describe('Accessibility Tests', () => {

  // test.beforeAll(async () => {
  // });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // test.afterEach(async () => {
  // });

  // test.afterAll(async () => {
  // });

  test('should have no wcag2a violations', async ({ axeBuilder }) => {
    const results = await axeBuilder.withTags(['wcag2a']).analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no wcag2aa violations', async ({ axeBuilder }) => {
    const results = await axeBuilder.withTags(['wcag2aa']).analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no wcag2aaa violations', async ({ axeBuilder }) => {
    const results = await axeBuilder.withTags(['wcag2aaa']).analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no wcag21a violations', async ({ axeBuilder }) => {
    const results = await axeBuilder.withTags(['wcag21a']).analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no wcag21aa violations', async ({ axeBuilder }) => {
    const results = await axeBuilder.withTags(['wcag21aa']).analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no wcag22aa violations', async ({ axeBuilder }) => {
    const results = await axeBuilder.withTags(['wcag22aa']).analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no best-practice violations', async ({ axeBuilder }) => {
    const results = await axeBuilder.withTags(['best-practice']).analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no section508 violations', async ({ axeBuilder }) => {
    const results = await axeBuilder.withTags(['section508']).analyze();
    expect(results.violations).toEqual([]);
  });
});