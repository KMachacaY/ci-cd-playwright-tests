const { test, expect } = require('@playwright/test');

test.describe('Failing Tests - For CI Verification', () => {

  test('this test passes', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('INTENTIONAL FAIL - wrong title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/This Title Does Not Exist/);
  });

});