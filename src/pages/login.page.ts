import { Page } from './base.page';
import { addScreenshot, addText } from '../support/lib/context';
import { expect } from 'chai';

export class LoginPage extends Page {
    
    get username() { return $("[name='email']") }
    get password() { return $("[name='password']") }
    get loginBtn() { return $('.btn') }
    get titlePage() { return $('h1') }
    get alert(){return $('.alert')}

    inputUserName(userName: string) {
        addText("input user name");
        this.username.setValue(userName);
        addScreenshot();
    }

    inputPasword(pwd: String) {
        addText("input password");
        this.password.setValue(pwd);
        addScreenshot();
    }

    clickLoginBtn() {
        addText("click login button");
        this.loginBtn.click();
        addScreenshot();
    }

    landingToDashboardPage() {
        addText("verify user has logged in successfully")
        expect(this.titlePage.getText()).to.equal('Dashboard');
        addScreenshot();
    }

    verifyErrorMessageIsCorrect(errorMessage: string) {  
        addText("verify error message is correct") 
        expect(this.alert.getText()).to.equal(errorMessage);
        addScreenshot();
      }
}