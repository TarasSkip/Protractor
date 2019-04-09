let BasePage = require('./base.page');
let WebButton = require('../elements/button');
let CheckBox = require('../elements/checkBox');

let CartPage = require("../pages/cart.page");

let buyOnHotlineCheckboxLocator = by.css('label[for="checkout-checkbox-mobile"]');
let thirdItemInCatalogLocator = by.css('.product-item:nth-child(3) .h4 a');
let secondItemInCatalogLocator = by.css('.product-item:nth-child(2) .h4 a');
let firstItemInCatalogLocator = by.css('.product-item:nth-child(1) .h4 a');

let buyNowButtonLocator = by.css('span.m_b-sm');

class ProductsCatalogPage extends BasePage {
    async waitForPageToBeAvailable() {
        await this.getBuyOnHotlineCheckboxElement().waitForElementToBeVisible(10000);
    }

    async waitForBuyNowButtonToBeAvailable() {
        await this.getBuyNowButtonElement().waitForElementToBeVisible(10000);
    }

    // action methods
    async checkBuyOnHotlineCheckbox() {
        await allure.createStep('Check "Buy on hotline" checkbox', async () => {
            await this.getBuyOnHotlineCheckboxElement().checkCheckbox();
        })();
    }

    async ckickOnThirdItemInCatalog() {
        await allure.createStep('Click on 3rd item in Catalog', async () => {
            await this.getThirdItemInCatalogElement().click();
        })();
    }

    async addThreeItemsToCart() { //    Preconditions. TODO - optimize
        await allure.createStep('Add three items to cart', async () => {
            await this.checkBuyOnHotlineCheckbox();
            await this.getThirdItemInCatalogElement().click();
            await this.waitForBuyNowButtonToBeAvailable();
            await this.ckickBuyNowButon();
            await CartPage.waitForPageToBeAvailable();
            await browser.navigate().back();
            await browser.navigate().back();
            await this.getSecondItemInCatalogElement().click();
            await this.waitForBuyNowButtonToBeAvailable();
            await this.ckickBuyNowButon();
            await CartPage.waitForPageToBeAvailable();
            await browser.navigate().back();
            await browser.navigate().back();
            await this.getFirstItemInCatalogElement().click();
            await this.waitForBuyNowButtonToBeAvailable();
            await this.ckickBuyNowButon();
            await CartPage.waitForPageToBeAvailable();
        })();
    }

    async ckickBuyNowButon() {
        await allure.createStep('Click "Buy Now" button', async () => {
            await this.getBuyNowButtonElement().click();
        })();
    }

    // elements getters
    getBuyOnHotlineCheckboxElement() {
        return new CheckBox(element(buyOnHotlineCheckboxLocator), "Buy on Hotline");
    }

    getThirdItemInCatalogElement() {
        return new WebButton(element(thirdItemInCatalogLocator), "3rd item in Catalog");
    }


    getSecondItemInCatalogElement() {
        return new WebButton(element(secondItemInCatalogLocator), "2nd item in Catalog");
    }

    getFirstItemInCatalogElement() {
        return new WebButton(element(firstItemInCatalogLocator), "1st item in Catalog");
    }

    getBuyNowButtonElement() {
        return new WebButton(element(buyNowButtonLocator), "Buy Now");
    }
}

module.exports = new ProductsCatalogPage();