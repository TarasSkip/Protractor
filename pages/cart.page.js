let BasePage = require('./base.page');
let WebButton = require('../elements/button');
let TextBox = require('../elements/textBox');
let DropDown = require('../elements/drop-down');

let orderButtonLocator = by.css('a[href="/checkout"]');
let headerLocator = by.css('div > h1');
let cartHeaderLocator = by.css('.inline.text-x-lg');
let productAmountLocator = by.css('.field[type = "number"]');
let deliveryOptionsDDLocator = by.css('select.m_b-sm');
let NPDepartmentDDLocator = by.name('warehouseNP');

let cartItemLocator = by.css('.item-cart');
let cartContentTextLocator = by.css('.m_b-md .h4');
let goToCartButtonLocator = by.css('a[href="/cart/"]');

let deleteFirstCartItemInPopupLocator = by.css('.li-scroll .row-indent:nth-child(1) i');
let ItemsInCartLocator = by.css('.row-indent[data-order-item]'); //  All items
let deleteLastCartItemLocator = by.css('div[data-cart-content] .row-indent:nth-last-child(2) i'); //  Last item on Cart page

let cartBusyLocator = by.css('[data-dropdown-target="cart"].busy');

class CartPage extends BasePage {
    // timeout methods
    async waitForPageToBeAvailable() {
        await this.getDeliveryOptionsDDElement().waitForElementToBeVisible(10000);
    }

    async waitForNPDepartmentDDToBeAvailable() {
        await this.getNPDepartmentDDElement().waitForElementToBeVisible(10000);
    }

    async waitForOrderButtonToBeClickable() {
        await this.getOrderButtonElement().waitForElementToBeClickable(10000);
    }

    async waitForGoToCartButtonToBeClickable() {
        await this.getGoToCartButtonElement().waitForElementToBeClickable(10000);
    }

    async waitForCartItemToBeClickable() {
        await this.getCartItemElement().waitForElementToBeClickable(10000);
    }

    async waitForCartToBeAvailable() {
        await this.getCartBusyElement().waitElementPresence(10000);
        await this.getCartBusyElement().waitElementStaleness(10000);
    }

    // action methods
    async selectNPDelivery() {
        await allure.createStep('Select delivery type (NP)', async () => {
            await this.getDeliveryOptionsDDElement().dropDownSelectByText('До склада Новой');
            await this.waitForNPDepartmentDDToBeAvailable();
        })();
    }

    async selectNPDeliveryDepartment() {
        await allure.createStep('Select NP delivery department', async () => {
            await this.getNPDepartmentDDElement().dropDownSelectByIndex(2);
            await this.waitForOrderButtonToBeClickable();
        })();
    }

    async clickOrderButton() {
        await allure.createStep('Click "Order" button', async () => {
            await this.getOrderButtonElement().click();
        })();
    }

    async clickCartIcon() {
        await allure.createStep('Open cart popup', async () => {
            await this.waitForCartItemToBeClickable();
            await this.getCartItemElement().click();
            await this.waitForGoToCartButtonToBeClickable();
        })();
    }

    async removeOneCartElementFromPopup() { //  Popup should be already opened! (TC design)
        await allure.createStep('Remove cart element from cart popup', async () => {
            await this.waitForGoToCartButtonToBeClickable();
            await this.getFirstCartItemInPopupElement().click();
            await this.waitForGoToCartButtonToBeClickable();
        })();
    }

    async clickGoToCartButton() { //  Popup should be already opened! (TC design)
        await allure.createStep('Go to Cart page using button in cart popup', async () => {
            await this.waitForGoToCartButtonToBeClickable();
            await this.getGoToCartButtonElement().click();
            await this.waitForPageToBeAvailable();
        })();
    }

    async deleteLastItemInCart() { //  Last item in cart list
        await allure.createStep('Delete last item in the list (on Cart page)', async () => {
            await this.getDeleteLastCartItemElement().click();
            await this.waitForPageToBeAvailable();
        })();
    }

    // elements getters
    getOrderButtonElement() {
        return new WebButton(element(orderButtonLocator), "Order button");
    }

    getHeaderElement() {
        return new TextBox(element(headerLocator), "Page header");
    }

    getCartHeaderElement() {
        return new TextBox(element(cartHeaderLocator), "Cart header");
    }

    getProductAmountElement() {
        return new TextBox(element(productAmountLocator), "Product amount");
    }

    getDeliveryOptionsDDElement() {
        return new DropDown(element(deliveryOptionsDDLocator), "Delivery options");
    }

    getNPDepartmentDDElement() {
        return new DropDown(element(NPDepartmentDDLocator), "NP department");
    }

    getCartItemElement() {
        return new WebButton(element(cartItemLocator), "Cart item/button");
    }

    getCartContentTextElement() {
        return new TextBox(element(cartContentTextLocator), "Cart products content");
    }

    getGoToCartButtonElement() {
        return new WebButton(element(goToCartButtonLocator), "Go to cart button");
    }

    getFirstCartItemInPopupElement() {
        return new WebButton(element(deleteFirstCartItemInPopupLocator), "Delete first item in cart (popup element)");
    }

    getAllItemsInCartElement() {
        return element.all(ItemsInCartLocator);
    }

    getDeleteLastCartItemElement() {
        return new WebButton(element(deleteLastCartItemLocator), "Delete last item in cart (on Cart page)");
    }

    getCartBusyElement() {
        return new WebButton(element(cartBusyLocator), "Cart busy");
    }
}

module.exports = new CartPage();