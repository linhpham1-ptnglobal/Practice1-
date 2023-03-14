import HomePage from "../../support/PageObject/HomePage/HomePage";

describe('Check whether the writing to file and verify the json data', ()=>{
    var accountData;
    var dataPath = 'login/accountList';
    var filePath = 'cypress/fixtures/WriteReadFile/optionList.json';
    const homePage = new HomePage();

    before(()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.fixture(dataPath).then(function(accountJsonFile){
            accountData = accountJsonFile.accounts[4];
            cy.log(accountData);
        })
    })
    it('List of option in optionList.json should be match in filter dropdown', ()=>{
        cy.login(accountData.username, accountData.password);
        homePage.getFilterOption().then(($a)=>{
            const optionList = [];
            for(let i=0; i<$a.length; i++){
                optionList.push({
                    value: $a.eq(i)[0].value,
                    option: $a.eq(i)[0].textContent
                })
            }
            cy.writeFile(filePath, optionList)
            cy.readFile(filePath).then($a=>{
                expect(JSON.stringify($a)).to.eq(JSON.stringify(optionList));
            });
        });
    })
})