import HomePage from "../../support/PageObject/HomePage/HomePage";

describe('Verify that user should be able to select value in list', ()=>{
    var accountData;
    var defaultOption;
    var selectOption;
    var accountListDataPath = 'login/accountList';
    var defaultOptionDataPath = 'WriteReadFile/defaultOption';
    var selectOptionDataPatch = 'WriteReadFile/optionList';
    const homePage = new HomePage();

    before(()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.fixture(accountListDataPath).then(function(accountJsonFile){
            accountData = accountJsonFile.accounts[4];
            cy.login(accountData.username, accountData.password);
        })
        cy.fixture(defaultOptionDataPath).then(function(defaultOptionJsonFile){
            defaultOption = defaultOptionJsonFile.defaultOption;
        })
        cy.fixture(selectOptionDataPatch).then(function(selectOptionJsonFile){
            selectOption = selectOptionJsonFile[2];
        })
    })

    it('"NAME (A TO Z)" should be selected as default', ()=>{
        homePage.getActiveOption().invoke('text').should('eq', defaultOption.option);
    })
    it('"PRICE (LOW TO HIGH)" should be selected', ()=>{
        homePage.getFilter().select(selectOption.option);
        homePage.getActiveOption().invoke('text').should('eq', selectOption.option)
    })
    it('Price should be sorted low to high', ()=>{
        homePage.getItemPriceList().then(($a)=>{
            const priceArray = [];
            const sortedPriceArray = [];
            for(let i=0; i<$a.length; i++){
                priceArray.push(parseFloat($a[i].textContent.substring(1)));
                sortedPriceArray.push(parseFloat($a[i].textContent.substring(1)));
            }
            sortedPriceArray.sort(function(a,b) { return a - b;});
            expect(JSON.stringify(priceArray)).to.eq(JSON.stringify(sortedPriceArray));
        })
    })
})