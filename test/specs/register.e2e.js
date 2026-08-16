import { expect } from '@wdio/globals';
import { userData, successfulRegistrationData } from '../data/user.data.js';
import RegisterPage from '../pageobjects/register.page.js';

describe('Registration flow', () => {
    beforeEach(async () => {
        await RegisterPage.open();
    });

    it('should display the registration form', async () => {
        await expect(RegisterPage.inputFirstName).toBeDisplayed();
        await expect(RegisterPage.inputLastName).toBeDisplayed();
        await expect(RegisterPage.inputAddress).toBeDisplayed();
        await expect(RegisterPage.inputCity).toBeDisplayed();
        await expect(RegisterPage.inputState).toBeDisplayed();
        await expect(RegisterPage.inputZipCode).toBeDisplayed();
        await expect(RegisterPage.inputPhoneNumber).toBeDisplayed();
        await expect(RegisterPage.inputSSN).toBeDisplayed();
        await expect(RegisterPage.inputUsername).toBeDisplayed();
        await expect(RegisterPage.inputPassword).toBeDisplayed();
    });

    // Commenting out test since page detects bot activity and requires CAPTCHA completion, which cannot be automated
    // it('should register with valid user data', async () => {
    //     await RegisterPage.register(userData);
    //     await expect(RegisterPage.header).toHaveText(successfulRegistrationData.welcomeHeader);
    //     await expect(RegisterPage.message).toHaveText(successfulRegistrationData.welcomeMessage);
    // });
});