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
};
export default HomePage;
export function logout(){
    const homePage = new HomePage();
    homePage.getBurgerButton()
        .click();
    homePage.getLogoutLink()
        .click();
}