import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';
import Purchase from '../pageobjects/purchase.page';
import Sidebar from '../pageobjects/sidebar';


describe('standard_user inventory navigation and successful purchase of a product', () => {
    beforeAll('Navigate to url', ()=> {
        browser.url("https://www.saucedemo.com/");
    })

    it('Should login with valid credentials', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('Should add all the products to the cart', async () => {
        await InventoryPage.addBackpack.click();
        await InventoryPage.addBikeLight.click();
        await InventoryPage.addTshirt.click();
        await InventoryPage.addJacket.click();
        await InventoryPage.addOnesie.click();
        await InventoryPage.addTshirtRed.click();
        const cartItems = await (Purchase.cartItems).getText();
        await expect(cartItems).toBe('6');
    })

    it('Should remove all products from the cart', async () => {
        await InventoryPage.removeBackpack.click();
        await InventoryPage.removeBikeLight.click();
        await InventoryPage.removeTshirt.click();
        await InventoryPage.removeJacket.click();
        await InventoryPage.removeOnesie.click();
        await InventoryPage.removeTshirtRed.click();
        const cart = await $('#shopping_cart_container > a');
        await expect(cart).toHaveChildren(0);
    })

    it('Should add Backpack, then reset the cart and remove Backpack', async () => {
        await InventoryPage.addBackpack.click();
        await LoginPage.btnBurgerMenu.click();
        await Sidebar.resetBtn.click();
        const cart = await $('#shopping_cart_container > a');
        await expect(cart).toHaveChildren(0);
        await Sidebar.closeBtn.click();
        await InventoryPage.removeBackpack.click();
    })

    it('Should add Backpack, go to cart and continue shopping', async () => {
        await InventoryPage.addBackpack.click();
        await InventoryPage.shoppingCartBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await Purchase.continueShoppingBtn.click();
    })

    it('Should add T Shirt to cart and cancel checkout', async () => {
        await InventoryPage.addTshirt.click();
        await InventoryPage.shoppingCartBtn.click();
        await Purchase.checkoutBtn.click();
        await Purchase.cancelBtn.click();
        await LoginPage.btnBurgerMenu.click();
        await Sidebar.resetBtn.click();
        await Sidebar.closeBtn.click();
        await Purchase.continueShoppingBtn.click();
    })

    it('Should add Bike Light to cart, test errors in checkout information and cancel checkout', async () => {
        await InventoryPage.addBikeLight.click();
        await InventoryPage.shoppingCartBtn.click();
        await Purchase.checkoutBtn.click();
        await Purchase.continueBtn.click(),
        await expect(Purchase.errorMsg).toHaveText('Error: First Name is required');
        browser.refresh();
        await Purchase.completeForm('testName', '', '')
        await Purchase.continueBtn.click();
        await expect(Purchase.errorMsg).toHaveText('Error: Last Name is required')
        browser.refresh();
        await Purchase.completeForm('testName', 'testLastName', '')
        await Purchase.continueBtn.click();
        await expect(Purchase.errorMsg).toHaveText('Error: Postal Code is required')
        browser.refresh();
        await LoginPage.btnBurgerMenu.click();
        await Sidebar.resetBtn.click();
        await Sidebar.closeBtn.click();
        await Purchase.cancelBtn.click();
        await Purchase.continueShoppingBtn.click();
    })

    it('Should add T shirt to cart and complete checkout', async () => {
    await InventoryPage.addTshirt.click();
    await InventoryPage.shoppingCartBtn.click();
    await Purchase.checkoutBtn.click();
    await Purchase.completeForm('testName', 'testLastName', '2000');
    await Purchase.continueBtn.click();
    await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    await Purchase.finishBtn.click();
    await Purchase.backHomeBtn.click();
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
});