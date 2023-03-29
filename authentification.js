const { chromium, expect } = require('@playwright/test');

// test('loginToPlatform',  async ({ page }) =>  {
//     const browser = await chromium.launch();
//     const page = await browser.newPage();
//     await page.goto('/platform/organization');
//     await page.getByTestId('username').fill('i.test_1');
//     await page.getByRole('button', { name: 'Continue'}).click();
//     await page.getByTestId('password').fill('oL8{3]IiXw0_');
//     await page.getByRole('button', { name: 'Continue'}).click();
//     await expect(page.getByText('Organizations')).toBeVisible;
//     await page.context().storageState({ path: 'playwright/state.json' });
// });

module.exports = async (defineConfig) => {
    const { storageState } = defineConfig.projects[0].use;
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://qa.wmc.14west.io/platform/organization');
    await page.getByTestId('username').fill('i.test_1');
    await page.getByRole('button', { name: 'Continue'}).click();
    await page.getByLabel('Password').fill('oL8{3]IiXw0_');
    await page.getByRole('button', { name: 'Continue'}).click();
    await expect(page.getByText('Organizations')).toBeVisible;
    await page.context().storageState({ path: storageState });
    await browser.close();
}