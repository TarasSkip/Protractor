let MainPage = require("../pages/main.page");
let SearchResultsPage = require("../pages/searchResults.page");

describe('Hotline Protractor Test - Search suite', () => {
    it('TC #5. Search results', async () => {
        await MainPage.open();
        await MainPage.waitForPageToBeAvailable();
        await MainPage.search('samsung galaxy');
        await SearchResultsPage.waitForSearchPageToBeAvailable();
        expect(await SearchResultsPage.getSearchResults()).toBeGreaterThan(0);
        await SearchResultsPage.clickSearchResultsFirstLink();
        expect(await SearchResultsPage.getPageHeaderElement().getText()).toContain('Samsung Galaxy');
    });
});