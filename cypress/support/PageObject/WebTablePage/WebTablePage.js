class WebTable{
    getFirstNameTextBox(){
        return cy.get('[st-search=firstName]');
    }
    getSearchRecord(searchValue){
        return cy.get('tr.ng-scope td:first-child:contains("'+searchValue+'")');
    }
}
export default WebTable;