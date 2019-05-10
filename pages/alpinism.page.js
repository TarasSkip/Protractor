let BasePage = require('./base.page');
let WebButton = require('../elements/button');
let TextBox = require('../elements/textBox');
let CheckBox = require('../elements/checkBox');
let WebInput = require('../elements/input');

let baseUrl = 'https://hotline.ua/tourism/snaryazhenie-dlya-alpinizma/';

let pageHeaderLocator = by.css('.heading h1');
let highjackingEquipmentCheckboxLocator = by.css('div:nth-child(1) > div.item-bd > ul > li:nth-child(21)');
let allVisibleDisabledProducersLocator = by.css(`ul:nth-child(1) > li > label [data-filter-disabled]`);

let minPriceLocator = by.css('input[data-price-min]');
let maxPriceLocator = by.css('input[data-price-max]');
let priceSubmitLocator = by.css('.nowrap.m_b-lg [data-price-submit]');

let catalogItemLocator = by.css('.item-info p a');
let buyButtonLocator = by.css('.btn-orange.btn-cell');

class AlpinismPage extends BasePage {
    async waitForPageToBeAvailable() {
        await this.getPageHeaderElement().waitForElementToBeVisible(100000);
    }

    // action methods
        async open() {
            await allure.createStep('Open Mountaineering equipment page', async () => {
                await browser.get(baseUrl);
                await this.waitForPageToBeAvailable();
            })();
        }

        async checkHighjackingEquipmentCheckbox() {
            await allure.createStep('Check "Highjacking equipment" checkbox', async () => {
                await this.getSubmitPriceButtonElement().mouseMove();
                await this.getHighjackingEquipmentCheckboxElement().checkCheckbox();
            //  await browser.sleep(4000);
            })();
        }

        async countDisabledProducersCheckboxes() {
                //  let arr = await this.getAllVisibleDisabledProducersElement().getAttribute('data-filter-disabled'); //   TODO REMOVE
                //  let sum = await arr.length; //   TODO REMOVE
                //  console.log(`attributes array: ${arr}`);
                //  console.log(`sum: ${sum}`);
                let count = await this.getAllVisibleDisabledProducersElement().count();
                console.log(`elements count: ${count}`);
                return count;
        }

        async setPriceRange(minPrice = '', maxPrice = '') {
            await allure.createStep(`Set price range ${minPrice}-${maxPrice} UAH`, async () => {
                await this.enterMinPrice(minPrice);
                await this.enterMaxPrice(maxPrice);
                await this.clickSubmitPriceButton();
                await browser.sleep(3000);
                //  await this.getBuyButtonElement().waitForElementToBeClickable(4000); - those methods does not work here
            })();
        }

        async enterMinPrice(minPrice) {
            let ctrlA = protractor.Key.chord(protractor.Key.CONTROL, "a");
            await this.getMinPriceElement().sendKeys(ctrlA);
            await this.getMinPriceElement().sendKeys(minPrice);
        }

        async enterMaxPrice(maxPrice) {
            let ctrlA = protractor.Key.chord(protractor.Key.CONTROL, "a");
            await this.getMaxPriceElement().sendKeys(ctrlA);
            await this.getMaxPriceElement().sendKeys(maxPrice);
        }

        //  async clearMaxPrice() { //  - does not work with this field
        //    await this.getMaxPriceElement().clear();
        //  }

        //  async clearMinPrice() {
        //    await this.getMinPriceElement().clear();
        //  }

        async clickSubmitPriceButton() {
            await this.getSubmitPriceButtonElement().click();
        }

        async getItemNames() {
            let itemNamesArr = await this.getCatalogItemNameElement().getText();
            console.log(itemNamesArr);
            return itemNamesArr;
        }


        // elements getters
        getPageHeaderElement() {
            return new TextBox(element(pageHeaderLocator), "page header");
        }

        getHighjackingEquipmentCheckboxElement() {
            return new CheckBox(element(highjackingEquipmentCheckboxLocator), "Highjacking Equipment Checkbox");
        }

        getAllVisibleDisabledProducersElement() {
            return new CheckBox(element.all(allVisibleDisabledProducersLocator), "Visible disabled Producers checkboxes");
        }

        getMinPriceElement() {
            return new WebInput(element(minPriceLocator), "MIN price input");
        }

        getMaxPriceElement() {
            return new WebInput(element(maxPriceLocator), "MAX price input");
        }

        getSubmitPriceButtonElement() {
            return new WebButton(element(priceSubmitLocator), "Submit price button");
        }

        getCatalogItemNameElement() {
            return new TextBox(element.all(catalogItemLocator), "Catalog items");
        }

        getBuyButtonElement() {
            return new WebButton(element(buyButtonLocator), "Buy button");
        }
    }

module.exports = new AlpinismPage();