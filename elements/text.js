let BaseElement = require('./base.element');

class TextBox extends BaseElement {
    async getText(text) {
        let string = await this.protractorElement.getText();
        console.log(`Getting text "${string}" from text box "${this.elementName}"`);
        return string;
    }
}

module.exports = TextBox;