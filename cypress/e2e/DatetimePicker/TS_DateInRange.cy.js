import DatetimePickerPage from "../../support/PageObject/DatetimePickerPage/DatetimePickerPage";

describe('Verify that user able to select a random date in range', ()=>{
    var datetimeData;
    var datetimeDataPath = 'DatetimePicker/datetimeData';
    var datetimePickerPage = new DatetimePickerPage;

    before(()=>{
        // cy.visit('http://www.demo.guru99.com/');
        cy.fixture(datetimeDataPath).then(function(datetimeJsonFile){
            datetimeData = datetimeJsonFile;
        })
    })

    it('Random date should be in range', ()=>{
        let startDay = datetimePickerPage.reverseDate(datetimeData.startDate);
        let endDay = datetimePickerPage.reverseDate(datetimeData.endDate);

        cy.randomDate(startDay, endDay).then(($a)=>{
            console.log($a);
        })
    })
})