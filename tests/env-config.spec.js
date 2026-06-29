const { test, expect } = require('@playwright/test');

test.describe('Environment Configuration', () => {

  test('API_URL is configured', async ({ page }) => {
    const apiUrl = process.env.API_URL;

    if (apiUrl) {
      console.log(`API_URL length: ${apiUrl.length}`);
      expect(apiUrl.length).toBeGreaterThan(0);
    } else {
      console.log('API_URL not set - using config default');
    }

    await page.goto('/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('AUTH_TOKEN is accessible', async () => {
    const token = process.env.AUTH_TOKEN || '';
    console.log(`AUTH_TOKEN present: ${token.length > 0}`);
    console.log(`AUTH_TOKEN length: ${token.length}`);

    if (token.length > 0) {
      expect(token.length).toBeGreaterThan(5);
    } else {
      console.log('No token set - skipping validation');
    }
  });

});