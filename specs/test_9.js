let MainPage = require("../pages/main.page");
let FeedbackPage = require ('../pages/feedback.page');

describe('Hotline Protractor Test - Send a message (attach file)', () => {
    it('TC #9. Attach file', async () => {
        await MainPage.open();
        await MainPage.waitForPageToBeAvailable();
        await MainPage.clickFeedbackLink();
        await FeedbackPage.waitForPageToBeAvailable();
        expect(await FeedbackPage.getHeaderElement().getText()).toEqual('Обратная связь для пользователей');
        await FeedbackPage.attachFirstFile();
        //  expect(await FeedbackPage.getFirstBrowseButtonText().getText()).toEqual('1.jpg'); - Probably, incorrect expected conditions - not able to get text - not hotline element
        await FeedbackPage.attachSecondFile();
        expect(await FeedbackPage.getBrowseErrorTextByButtonNumber(2).getText()).toEqual('Расширение загружаемого файла нет в списке разрешенных');
    });
});