import HomePage, { logout } from "../../support/PageObject/HomePage/HomePage";
import LoginSauceDemoPage, { login } from "../../support/PageObject/LoginPage/LoginSauceDemoPage";

describe('Login function', () => {
    const loginPage = new LoginSauceDemoPage();
    const homePage = new HomePage();
    var testData;
    var dataPath = 'login/accountList';

    before(function(){
        cy.fixture(dataPath).then(function(accountJsonFile){
            testData = accountJsonFile.accounts;
            cy.log(testData);
        })
    })

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/');
    })

    after(()=>{
        logout();
    })

    it("Should show error message if login with blank username and blank password", function(){
        var invalidAccount = testData[0];
        cy.login(invalidAccount.username, invalidAccount.password);
        loginPage.getErrorMessage()
            .should('be.visible')
            .invoke('text')
            .should('equal', invalidAccount.message);
    })
    it("Should show error message if login with invalid username and valid password", function(){
        var invalidAccount = testData[1];
        cy.login(invalidAccount.username, invalidAccount.password);
        loginPage.getErrorMessage()
            .should('be.visible')
            .invoke('text')
            .should('equal', invalidAccount.message);
    })
    it("Should show error message if login with valid username and invalid password", function(){
        var invalidAccount = testData[2];
        cy.login(invalidAccount.username, invalidAccount.password);
        loginPage.getErrorMessage()
            .should('be.visible')
            .invoke('text')
            .should('equal', invalidAccount.message);
    })
    it("Should show error message if login with invalid username and invalid password", function(){
        var invalidAccount = testData[3];
        cy.login(invalidAccount.username, invalidAccount.password);
        loginPage.getErrorMessage()
            .should('be.visible')
            .invoke('text')
            .should('equal', invalidAccount.message);
    })
    it("Should login successfully with valid username and valid password", function(){
        var validAccount = testData[4];
        cy.login(validAccount.username, validAccount.password);
        homePage.getCartButton()
            .should('be.visible');
    })
})