import LoginPage from '../pageobjects/login.page';
import Sidebar from '../pageobjects/sidebar';

describe('Tests for About page and social media links from About page', () => {
    beforeAll('Navigate to url', ()=> {
        browser.url("https://www.saucedemo.com/");
    })

    it('Should login with valid credentials', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('Should open About page and go to social media pages from About page', async () => {
        await LoginPage.btnBurgerMenu.click();
        await Sidebar.aboutBtn.click();
        await expect(browser).toHaveUrl('https://saucelabs.com/');
        await Sidebar.facebookIcon.waitForClickable();
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
        browser.pause(12000);
        await browser.switchWindow('Iniciar sesión | LinkedIn');
        await expect(browser).toHaveUrlContaining('https://www.linkedin.com');
        await browser.switchWindow('https://saucelabs.com/');
    });

});