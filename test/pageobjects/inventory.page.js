class InventoryPage {

    get addBackpack () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get removeBackpack () {
        return $('#remove-sauce-labs-backpack');
    }

    get addBikeLight () {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    get removeBikeLight () {
        return $('#remove-sauce-labs-bike-light');
    }

    get addTshirt () {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    get removeTshirt () {
        return $('#remove-sauce-labs-bolt-t-shirt');
    }

    get addJacket () {
        return $('#add-to-cart-sauce-labs-fleece-jacket');
    }

    get removeJacket () {
        return $('#remove-sauce-labs-fleece-jacket');
    }

    get addOnesie () {
        return $('#add-to-cart-sauce-labs-onesie');
    }

    get removeOnesie () {
        return $('#remove-sauce-labs-onesie');
    }

    get addTshirtRed () {
        return $('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }

    get removeTshirtRed () {
        return $('//*[@id="remove-test.allthethings()-t-shirt-(red)"]');
    }

    get shoppingCartBtn () {
        return $('.shopping_cart_link');
    }

    // /**
    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */
    // async login (username, password) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnLogin.click();
    // }

}

export default new InventoryPage();
