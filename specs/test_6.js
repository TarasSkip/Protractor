let MainPage = require("../pages/main.page");
let LoginPage = require("../pages/login.page");
let ProductsCatalogPage = require("../pages/productsCatalog.page");
let CartPage = require("../pages/cart.page");

describe('Hotline Protractor Test - Work with card suite', () => {
    it('TC #6. Add to cart and buy', async () => {
        let email = `vasyapupkin446@gmail.com`;
        let password = 'vasyapupkin';
        await MainPage.open();
        await MainPage.waitForPageToBeAvailable();
        await MainPage.navigateToLogin();
        await LoginPage.waitForLoginToBeClickable();
        await LoginPage.login(email, password);
        expect(await MainPage.getAccountNameElement().getText()).toEqual('vasyapupkin446');
        await MainPage.navigateToSubSubCategoryPump();
        await ProductsCatalogPage.waitForPageToBeAvailable();
        await ProductsCatalogPage.checkBuyOnHotlineCheckbox();
        await ProductsCatalogPage.ckickOnThirdItemInCatalog();
        await ProductsCatalogPage.waitForBuyNowButtonToBeAvailable();
        await ProductsCatalogPage.ckickBuyNowButon();
        await CartPage.waitForPageToBeAvailable();
        expect(await CartPage.getHeaderElement().getText()).toEqual('Корзина');
        //  expect(await CartPage.getProductAmountElement().getAttribute('value')).toBe('1'); - works but commented - the same account used here, cart should be cleared before each run (next TC)
        await CartPage.selectNPDelivery();
        await CartPage.selectNPDeliveryDepartment();
        await CartPage.clickOrderButton();
        expect(await CartPage.getHeaderElement().getText()).toEqual('Оформление и оплата вашего заказа');
    });
});
