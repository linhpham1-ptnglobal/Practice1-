import WebTable from "../../support/PageObject/WebTablePage/WebTablePage";

describe("Testing Table", ()=>{
    const webTable = new WebTable();
    var testData;
    var dataPath = 'WebTable/firstNameList';

    before(()=>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/WebTable/');
        cy.fixture(dataPath).then(function(firstNameJsonFile){
            testData = firstNameJsonFile.firstName;
            cy.log(testData);
        })
    })

    afterEach(()=>{
        webTable.getFirstNameTextBox().clear();
    })

    it("Should number of record before filtering is equal number of record after filtering with search first name is Pol", ()=>{
        const firstName = testData[0].value;
        webTable.getSearchRecord(firstName).then(($data)=>{
            const numberOfRecordBeforeFilter = $data.length;

            webTable.getFirstNameTextBox().type(firstName);
            cy.wait(500);

            webTable.getSearchRecord(firstName).should('have.length', numberOfRecordBeforeFilter);
        })
    })
    it("Should number of record before filtering is equal number of record after filtering with search first name is Robert", ()=>{
        const firstName = testData[1].value;
        webTable.getSearchRecord(firstName).then(($data)=>{
            const numberOfRecordBeforeFilter = $data.length;

            webTable.getFirstNameTextBox().type(firstName);
            cy.wait(500);

            webTable.getSearchRecord(firstName).should('have.length', numberOfRecordBeforeFilter);
        })
    })
})