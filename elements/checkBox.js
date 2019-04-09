let BaseElement = require('./base.element');

class CheckBox extends BaseElement {
    async checkCheckbox() {
        let checkbox = this.protractorElement;
        console.log(`Clicking on "${this.elementName}" checkbox`);
        //  await expect(checkbox.isSelected()).toBe(false).then(async () => {
        //    await checkbox.click();
        //  await expect(checkbox.isSelected()).toBe(true); does not work! - page refresh -> always false
        //  });
        if (!(await checkbox.isSelected())) {
            await checkbox.click();
        } else {
            console.log('Checkbox is already selected');
        }
    }

    async uncheckCheckbox() {
        let checkbox = this.protractorElement;
        console.log(`Clicking on "${this.elementName}" checkbox`);
        if ((await checkbox.isSelected())) {
            await checkbox.click();
        } else {
            console.log('Checkbox is already deselected');
        }
    }
}

module.exports = CheckBox;