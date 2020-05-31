import { When, Given } from "cucumber";
import { LoginPage } from '../pages/login.page';
import { ItemPage } from '../pages/item.page';

let loginPage = new LoginPage;
let itemPage = new ItemPage;

Given(/^I have logged in to Akauntin web portal$/, function () {
  loginPage.open('http://192.168.1.81:10080/auth/login');
  loginPage.inputUserName("admin@example.com");
  loginPage.inputPasword("password");
  loginPage.clickLoginBtn();
});

When(/^I add New Item Form with "([^"]*)?" and "([^"]*)?" and "([^"]*)?"$/,
  function (name, sku, description) {
    itemPage.openItemPage();
    browser.pause(10000);
    itemPage.inputItemName(name);
    itemPage.inputSku(sku);
    itemPage.inputDesc(description);
  });

When(/^I add "([^"]*)?" and "([^"]*)?" and with quantity "([^"]*)?"$/,
  function (saleprice, purchaceprice, num) {
    itemPage.inputSalesPrice(saleprice);
    itemPage.inputPurchasePrice(purchaceprice);
    itemPage.inputQuantity(num);
  });