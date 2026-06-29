const { test, expect } = require('@playwright/test');

test.describe('Main Tests', () => {

  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('docs page loads', async ({ page }) => {
    await page.goto('/docs/intro');
    await expect(
      page.getByRole('heading', { name: 'Installation' })
    ).toBeVisible();
  });

  test('page has navigation links', async ({ page }) => {
    await page.goto('/');
    const links = page.getByRole('link');
    const count = await links.count();
    expect(count).toBeGreaterThan(5);
  });

});
// PR trigger verification