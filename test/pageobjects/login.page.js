import Page from './page.js';

class LoginPage extends Page {
    get inputUsername() {
        return $('input[name="username"]');
    }

    get inputPassword() {
        return $('input[name="password"]'); 
    }

    get btnSubmit() {
        return $('input[value="Log In"]');
    }
    
    get validationMessage() {
        return $('p[class="error"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('index.htm');
    }
}

export default new LoginPage();
