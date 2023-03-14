import IframePage from "../../support/PageObject/IframePage/IframePage";

describe('Testing Iframe', ()=>{
    const iframePage = new IframePage();
    var testData;
    var dataPath = 'Iframe/searchKeywords';

    before(()=>{
        cy.fixture(dataPath).then(function(searchKeywordsJsonFile){
            testData = searchKeywordsJsonFile.searchKeywords;
        })
    })

    beforeEach(()=>{
        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrameTest');

    })

    it('Should contain the keyword in article', ()=>{
        const searchKeyword = testData[0].keyword;
        iframePage.getOpenIframe().click();
        cy.wait(3000);
        iframePage.getIframeSearch().type(searchKeyword);
        iframePage.getIframeSearchButton().click();
        cy.wait(5000);
        iframePage.getFirstResultHeader().click();
        cy.wait(1000);
        cy.getIframeBody().should('contain.text', searchKeyword);
    })

    it('Should contain the keyword in article', ()=>{
        const searchKeyword = testData[1].keyword;
        iframePage.getOpenIframe().click();
        cy.wait(3000);
        iframePage.getIframeSearch().type(searchKeyword);
        iframePage.getIframeSearchButton().click();
        cy.wait(5000);
        iframePage.getFirstResultHeader().click();
        cy.wait(1000);
        cy.getIframeBody().should('contain.text', searchKeyword);
    })
})