class HomePage{
    getCartButton(){
        return cy.get('#shopping_cart_container > a');
    }
    getBurgerButton(){
        return cy.get('button#react-burger-menu-btn');
    }
    getLogoutLink(){
        return cy.get('a#logout_sidebar_link');
    }
    getFilterOption(){
        return cy.get('select[data-test="product_sort_container"] option');
    }
    getFilter(){
        return cy.get('select[data-test="product_sort_container"]');
    }
    getActiveOption(){
        return cy.get('span.active_option');
    }
    getItemPriceList(){
        return cy.get('div.inventory_item_price');
    }
};
export default HomePage;
export function logout(){
    const homePage = new HomePage();
    homePage.getBurgerButton()
        .click();
    homePage.getLogoutLink()
        .click();
}