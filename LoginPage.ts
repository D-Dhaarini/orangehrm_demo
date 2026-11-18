import { Page, expect } from '@playwright/test';
export class LoginPage {
    readonly page: Page;
    constructor(page) {
        this.page = page;
    }
    async navigateTo() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await expect(this.page.getByRole('heading',{name:'Login'})).toBeVisible();
    }
    async clickLoginButton(username:string,password:string) {
        await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.getByRole('button',{name:'Login'}).click();
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
        console.log("Login success");


    }
}