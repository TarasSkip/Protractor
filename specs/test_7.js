let MainPage = require("../pages/main.page");
let ProductsCatalogPage = require("../pages/productsCatalog.page");
let CartPage = require("../pages/cart.page");

describe('Hotline Protractor Test - Work with card suite', () => {
    it('TC #7. Delete from cart', async () => {
        await MainPage.open();
        await MainPage.waitForPageToBeAvailable();
        await MainPage.navigateToSubSubCategoryPump();
        await ProductsCatalogPage.waitForPageToBeAvailable();
        await ProductsCatalogPage.addThreeItemsToCart();
        await browser.sleep(7000);
        await CartPage.clickCartIcon();
        expect(await CartPage.getCartContentTextElement().getText()).toEqual('Товаров в корзине: 3');
        await CartPage.removeOneCartElementFromPopup();
        expect(await CartPage.getCartContentTextElement().getText()).toEqual('Товаров в корзине: 2');
        await browser.sleep(7000);
        await CartPage.clickGoToCartButton();
        await CartPage.waitForPageToBeAvailable();
        expect(await CartPage.getAllItemsInCartElement().count()).toBe(2);
        await CartPage.deleteLastItemInCart();
        await browser.sleep(7000);
        expect(await CartPage.getAllItemsInCartElement().count()).toBe(1);
        await MainPage.open();
        await MainPage.waitForPageToBeAvailable();
        await browser.sleep(7000);
        expect(await MainPage.getCartItemsCountElement().getText()).toEqual('1');
    });
});