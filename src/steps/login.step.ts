import { When, Then, Given } from 'cucumber';
import { LoginPage } from '../pages/login.page';

let loginPage = new LoginPage;

When(/^I go to Akaunting login page$/, function () {
  loginPage.open('http://192.168.1.81:10080/auth/login');
});

When(/^I login with valid the username \"([^\"]*)\" and password \"([^\"]*)\"$/, 
function (userName, password) {
  loginPage.inputUserName(userName);
  loginPage.inputPasword(password);
  loginPage.clickLoginBtn();
});

Then(/^I can login successfully$/, function () {
  loginPage.landingToDashboardPage();
});

Then(/^I will see error message \"([^\"]*)\"$/, function (errorMessage) {
  loginPage.verifyErrorMessageIsCorrect(errorMessage);
});