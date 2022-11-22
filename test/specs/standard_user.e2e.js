import loginPage from '../pageobjects/login.page';
import LoginPage from  '../pageobjects/login.page';


describe('My Login application', () => {
    beforeAll('Navigate to url', ()=> {
        browser.url("https://www.saucedemo.com/");
    })

    it('Should not login with empty inputs', async () => {
        await LoginPage.inputUsername.setValue("");
        await LoginPage.inputPassword.setValue("");
        await LoginPage.btnLogin.click();
        await expect(loginPage.errorMsg).toBeDisplayed();
        await expect(loginPage.errorMsg).toHaveText("Epic sadface: Username is required")
    });

    it('Should not login with empty password', async () => {
        await LoginPage.inputUsername.setValue("sgddfj");
        await LoginPage.inputPassword.setValue("");
        await LoginPage.btnLogin.click();
        await expect(loginPage.errorMsg).toBeDisplayed();
        await expect(loginPage.errorMsg).toHaveText("Epic sadface: Password is required");
        await browser.refresh();
    });

    it('Should not login with empty Username', async () => {
        await LoginPage.inputUsername.setValue("");
        await LoginPage.inputPassword.setValue("secret_sauce");
        await LoginPage.btnLogin.click();
        await expect(loginPage.errorMsg).toBeDisplayed();
        await expect(loginPage.errorMsg).toHaveText("Epic sadface: Username is required");
    });

    it('Should not login with invalid creentials', async () => {
        await LoginPage.login('standard_user', 'test');
        await expect(loginPage.errorMsg).toBeDisplayed();
        await expect(loginPage.errorMsg).toHaveText("Epic sadface: Username and password do not match any user in this service")
    });

    it('Should login with valid credentials', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await LoginPage.btnBurgerMenu.click();
        await LoginPage.btnLogout.click();
        await browser.refresh();

    });
});
