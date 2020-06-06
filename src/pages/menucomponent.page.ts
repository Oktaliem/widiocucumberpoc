import { HeaderComponent } from './headercomponent.page';

export class MenuPage extends HeaderComponent {

    get itemPage() { return $("//a[contains(.,'Items')]") }

    openItemPage() {
        this.itemPage.click();
    }

}
