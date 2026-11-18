import { Page, expect } from '@playwright/test';
export class FeaturePage {
    readonly page: Page;
    constructor(page) {
        this.page = page;
    }
    async navigateToPIM(){
        await this.page.getByRole('link',{name:'PIM'}).click();
    }
    async addEmployee(firstName:string,lastName:string,employeeId:number){
        await this.page.getByRole('link',{name:'Add Employee'}).click();
        await this.page.getByRole('textbox',{name:'First Name'}).fill(firstName);
        await this.page.getByRole('textbox',{name:'Last Name'}).fill(lastName);
        await this.page.getByRole('textbox').nth(4).fill(employeeId.toString());
        await this.page.getByRole('button',{name:'Save'}).click();
        console.log('successfully created employee');
    }
}