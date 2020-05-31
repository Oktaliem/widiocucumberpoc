import { addScreenshot, addText } from '../support/lib/context';

export class ItemPage {
    get itemPage() { return $("a[href='http://0.0.0.0:10080/common/items']") }
    get itemName() { return $("#name") }
    get sku() { return $("#sku") }
    get desc() { return $("#description") }
    get purchasePrice() { return $("#purchase_price") }
    get salesPrice() { return $("#sale_price") }
    get quantity() { return $("#quantity") }

    openItemPage() {
        addText("Click on item page");
        this.itemName.click();
    }

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

}