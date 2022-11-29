import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';
import Purchase from '../pageobjects/purchase.page';
import Sidebar from '../pageobjects/sidebar';

describe('standard_user purchase', () => {
    beforeAll('Navigate to url', ()=> {
        browser.url("https://www.saucedemo.com/");
    })

    it('Should login with valid credentials', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('Should open About page and go to social media pages', async () => {
        await LoginPage.btnBurgerMenu.click();
        await Sidebar.aboutBtn.click();
        await expect(browser).toHaveUrl('https://saucelabs.com/');
        await Sidebar.facebookIcon.waitForClickable();
        // await browser.pause(12000);
        // await Sidebar.facebookIcon.scrollIntoView();
        await Sidebar.facebookIcon.click();
        await browser.switchWindow('https://www.facebook.com/saucelabs');
        await expect(browser).toHaveUrl('https://www.facebook.com/saucelabs');
        await browser.switchWindow('https://saucelabs.com/');
        await Sidebar.twitterIcon.waitForClickable();
        await Sidebar.twitterIcon.click();
        await browser.switchWindow('https://twitter.com/saucelabs');
        await expect(browser).toHaveUrl('https://twitter.com/saucelabs');
        await browser.switchWindow('https://saucelabs.com/');
        await Sidebar.linkedinIcon.waitForClickable();
        await Sidebar.linkedinIcon.click();
        await browser.switchWindow('https://www.linkedin.com/company/891955');
        await expect(browser).toHaveUrl('https://www.linkedin.com/company/891955');
        await browser.switchWindow('https://saucelabs.com/');
    });

});