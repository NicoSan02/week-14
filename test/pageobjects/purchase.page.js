class Purchase {
    get cartItems () {
        return $('#shopping_cart_container > a > span');
    }

    get shoppingCartBtn () {
    return $('.shopping_cart_link');
    }

    get checkoutBtn () {
        return $('#checkout');
    }

    get continueShoppingBtn () {
        return $('#continue-shopping');
    }

    get cancelBtn () {
        return $('#cancel')
    }


    get continueBtn () {
        return $('#continue');
    }

    get errorMsg () {
        return $('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error')
    }

    get inputFirstName () {
        return $('#first-name');
    }

    get inputLastName () {
        return $('#last-name');
    }

    get inputZipCode () {
        return $('#postal-code');
    }
    get finishBtn () {
        return $('#finish');
    }

    get backHomeBtn () {
        return $('#back-to-products');
    }

    get closeIcon () {
        return $('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3 > button > svg')
    }

    get ponyImg () {
        return $('.pony_express')
    }

    get title () {
        return $('.title')
    }

    async completeForm (name, lastName, zipCode) {
        await this.inputFirstName.setValue(name);
        await this.inputLastName.setValue(lastName);
        await this.inputZipCode.setValue(zipCode);
    }

    async incompleteForm1 (lastName, zipCode) {
        await this.inputFirstName.setValue();
        await this.inputLastName.setValue(lastName);
        await this.inputZipCode.setValue(zipCode);
    }
}

export default new Purchase();