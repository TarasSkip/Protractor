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

class CartPage extends BasePage {
    async waitForPageToBeAvailable() {
        await this.getDeliveryOptionsDDElement().waitForElementToBeVisible(10000);
    }

    async waitForNPDepartmentDDToBeAvailable() {
        await this.getNPDepartmentDDElement().waitForElementToBeVisible(10000);
    }

    async waitForOrderButtonToBeClickable() {
        await this.getOrderButtonElement().waitForElementToBeClickable(10000);
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
}

module.exports = new CartPage();