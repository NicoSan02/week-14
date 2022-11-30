import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';

describe('Tests for social media links in inventory page', () => {
    beforeAll('Navigate to url', ()=> {
        browser.url("https://www.saucedemo.com/");
    })

    it('Should login with valid credentials', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('Should open social media links in the inventory', async () => {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await InventoryPage.twitterIconInv.waitForClickable();
        await InventoryPage.twitterIconInv.click();
        await browser.switchWindow('https://twitter.com/saucelabs');
        await expect(browser).toHaveUrl('https://twitter.com/saucelabs');
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');
        await InventoryPage.facebookIconInv.waitForClickable();
        await InventoryPage.facebookIconInv.click();
        await browser.switchWindow('https://www.facebook.com/saucelabs');
        await expect(browser).toHaveUrl('https://www.facebook.com/saucelabs');
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');
        await InventoryPage.linkedinIconInv.waitForClickable();
        await InventoryPage.linkedinIconInv.click();
        browser.pause(14000);
        await browser.switchWindow('Iniciar sesión | LinkedIn');
        await expect(browser).toHaveUrlContaining('https://www.linkedin.com');
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');
    });
});