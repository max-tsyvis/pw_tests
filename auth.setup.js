const { test } = require('@playwright/test');

const authFile = 'playwright/.auth/state.json';

test('Authenticate', async ({ page }) => {
  await page.goto('https://qa.wmc.14west.io/platform/organization');
  await page.getByLabel('14 West/Corporate E-mail Address').fill('i.test_1');
  await page.getByRole('button', { name: 'Continue'}).click();
  await page.getByLabel('Password').fill('oL8{3]IiXw0_');
  await page.getByRole('button', { name: 'Continue'}).click();
  
  await expect(page.getByText('Organizations')).toBeVisible;
  
  await page.context().storageState({ path: 'playwright/state.json' });
});