let AlpinismPage = require('../pages/alpinism.page');

describe('Hotline Protractor Test - Advanced search', () => {
    it('TC #10. Advanced search', async () => {
        await AlpinismPage.open();
        await AlpinismPage.checkHighjackingEquipmentCheckbox();
        expect(await AlpinismPage.countDisabledProducersCheckboxes()).toBe(7);
        await AlpinismPage.setPriceRange('1200', '2000');
        expect(await AlpinismPage.getItemNames()).toContain('Petzl Rocpec P26');  
    });
});