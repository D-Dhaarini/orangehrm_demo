import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { FeaturePage } from '../pages/FeaturePage';
const username = 'Admin';
const password = 'admin123';
test.beforeEach("Login", async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.navigateTo();
    await loginPage.clickLoginButton(username, password);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

});
test("Add Employee", async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    const featurePage=new FeaturePage(page);
    await featurePage.navigateToPIM();
    const firstName='James';
    const lastName='mike';
    const employeeId=123;
    await featurePage.addEmployee(firstName,lastName,employeeId);
})
