import { addScreenshot, addText } from '../support/lib/context';
import { MenuPage } from './menucomponent.page';

export class ItemPage extends MenuPage {

    get itemName() { return $("#name") }
    get sku() { return $("#sku") }
    get desc() { return $("#description") }
    get purchasePrice() { return $("#purchase_price") }
    get salesPrice() { return $("#sale_price") }
    get quantity() { return $("#quantity") }
    get addNewItemBtn() { return $(".btn-success") }
    get categoryDll() { return $("#select2-category_id-results") }

    inputItemName(itemName: string) {
        addText("Input item name");
        this.itemName.setValue(itemName)
        addScreenshot();
    }

    inputSku(sku: string) {
        addText("Input sku: " + sku);
        this.sku.setValue(sku + "-001");
        addScreenshot();
    }

    inputDesc(description: string) {
        addText("Input description: " + description);
        this.desc.setValue(description);
        addScreenshot();
    }

    inputSalesPrice(saleprice: any) {
        addText("Input Sales Price: " + saleprice);
        this.salesPrice.setValue(saleprice);
        addScreenshot();
    }

    inputPurchasePrice(purchaceprice: any) {
        addText("Input Purchase Price: " + purchaceprice);
        this.purchasePrice.setValue(purchaceprice);
        addScreenshot();
    }

    inputQuantity(num: any) {
        addText("Input Quantity: " + num);
        this.quantity.setValue(num);
        addScreenshot();
    }

    clickOnAddItemBtn() {
        addText("Click on add intem button");
        this.addNewItemBtn.click();
        addScreenshot();
    }

    selectCategory(category: string) {
        addText("Select category:" + category);
        this.categoryDll.selectByVisibleText(category);
        addScreenshot();
    }

}