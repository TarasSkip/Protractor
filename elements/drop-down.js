let BaseElement = require('./base.element');
let WebButton = require('../elements/button');

let textLocator = `//option[contains(text(), "PlaceHolder")]`;
let indexLocator = `[name=warehouseNP] option:nth-child(PlaceHolder)`;

class DropDown extends BaseElement {
    async dropDownSelectByText(text) {
        console.log(`Select by text "${text}" in "${this.elementName}" drop-down`);
        await this.protractorElement.click();
        let locator2 = textLocator.replace(`PlaceHolder`, `${text}`);
        await new WebButton(element(by.xpath(locator2), `Drop-down option ${text}`)).click();
    }

    async dropDownSelectByIndex(index) {
        console.log(`Select by index "${index}" in "${this.elementName}" drop-down`);
        await this.protractorElement.click();
        let locator2 = indexLocator.replace(`PlaceHolder`, `${index}`);
        await new WebButton(element(by.css(locator2), `Drop-down option with index ${index}`)).click();
    }
}

module.exports = DropDown;