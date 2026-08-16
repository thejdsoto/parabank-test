import { expect } from '@wdio/globals';
import { userData, invalidUserData } from '../data/user.data.js';
import LoginPage from '../pageobjects/login.page.js';

describe('My Login application', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });
    
    it('should display the login form', async () => {
        await expect(LoginPage.inputUsername).toBeDisplayed();
        await expect(LoginPage.inputPassword).toBeDisplayed();
        await expect(LoginPage.btnSubmit).toBeDisplayed();
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login(userData.username, userData.password);
    })

    it('should not login with invalid credentials', async () => {
        await LoginPage.login(invalidUserData.firstName, invalidUserData.lastName);
        await expect(LoginPage.validationMessage).toHaveText(
            expect.stringContaining(invalidUserData.errorMessage)
        );
    });
});

