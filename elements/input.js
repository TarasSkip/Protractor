let BaseElement = require('./base.element');

class WebInput extends BaseElement {
    async sendKeys(text) {
        console.log(`Sendig text "${text}" to input "${this.elementName}"`);
        await this.protractorElement.sendKeys(text);
    }
}

module.exports = WebInput;