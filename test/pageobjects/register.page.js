import Page from './page.js';
import { browser } from '@wdio/globals';

class RegisterPage extends Page {
    get inputFirstName() {
        return $('input[id="customer.firstName"]');
    }

    get inputLastName() {
        return $('input[id="customer.lastName"]');
    }

    get inputAddress() {
        return $('input[id="customer.address.street"]');
    }

    get inputCity() {
        return $('input[id="customer.address.city"]');
    }

    get inputState() {
        return $('input[id="customer.address.state"]');
    }

    get inputZipCode() {
        return $('input[id="customer.address.zipCode"]');
    }

    get inputPhoneNumber() {
        return $('input[id="customer.phoneNumber"]');
    }

    get inputSSN() {
        return $('input[id="customer.ssn"]');
    }

    get inputUsername() {
        return $('input[id="customer.username"]');
    }

    get inputPassword() {
        return $('input[id="customer.password"]');
    }

    get inputConfirmPassword() {
        return $('input[id="repeatedPassword"]');
    }

    get btnRegister() {
        return $('input[value="Register"]');
    }

    get header() {
        return $('h1.title');
    }

    get message() {
        return $('h1.title + p');
    }

    open() {
        return super.open('register.htm');
    }


    async register(userData) {
        await this.inputFirstName.setValue(userData.firstName);
        await this.inputLastName.setValue(userData.lastName);
        await this.inputAddress.setValue(userData.address);
        await this.inputCity.setValue(userData.city);
        await this.inputState.setValue(userData.state);
        await this.inputZipCode.setValue(userData.zipCode);
        await this.inputPhoneNumber.setValue(userData.phoneNumber);
        await this.inputSSN.setValue(userData.ssn);
        await this.inputUsername.setValue(userData.username);
        await this.inputPassword.setValue(userData.password);
        await this.inputConfirmPassword.setValue(userData.password);
        await this.btnRegister.click();
        console.log('Complete CAPTCHA manually, then press Enter...');
        await browser.pause(10000);
    }
}

export default new RegisterPage();