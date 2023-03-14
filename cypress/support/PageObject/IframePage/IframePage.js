class IframePage{
    getOpenIframe(){
        return cy.get('#iFrame');
    }
    getIframeSearch(){
        return cy.getIframeBody().find('input[name="s"]');
    }
    getIframeSearchButton(){
        return cy.getIframeBody().find('button.button_search');
    }
    getFirstResultHeader(){
        return cy.getIframeBody().find('ol.search_res li:first-child h3 a');
    }
}
export default IframePage;