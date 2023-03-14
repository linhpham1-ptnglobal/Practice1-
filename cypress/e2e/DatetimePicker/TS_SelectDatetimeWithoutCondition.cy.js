import DatetimePickerPage from "../../support/PageObject/DatetimePickerPage/DatetimePickerPage";

describe("Testing select datetime without condition ", ()=>{
    var datetimeData;
    var datetimeDataPath = 'DatetimePicker/datetimeData';
    var datetimePickerPage = new DatetimePickerPage;
    var convertedDate;

    before(()=>{
        cy.visit('http://www.demo.guru99.com/');
        cy.fixture(datetimeDataPath).then(function(datetimeJsonFile){
            datetimeData = datetimeJsonFile;
        })
    })
    it("Verify that user able to select date", ()=>{
        convertedDate = datetimePickerPage.convertDate(datetimeData.actualDate);

        datetimePickerPage.getDropdown().click();
        datetimePickerPage.getDropdownItem('Selenium DatePicker Demo').click();

        datetimePickerPage.getBdayInput().click().type(convertedDate);
        datetimePickerPage.getBdayInput().then($inputBday=>{
            expect($inputBday[0].value).to.eq(convertedDate);
        })

    })
    it('Display entered Birth Date, Birth Time correctly', ()=>{
        datetimePickerPage.getBdaySubmit().click();
        datetimePickerPage.getBdayDisplay().then($displayBday=>{
            const displayBdayText = $displayBday[0].textContent;
            
            const typedDate = convertedDate.split('T')[0];
            const typedTime = convertedDate.split('T')[1];

            //19->29 "Your Birth Date is 2021-07-21Your Birth Time is 10:30"
            const displayDate = displayBdayText.substring(19, 29);
            //48->53
            const displayTime = displayBdayText.substring(48, 53);

            expect(displayDate).to.eq(typedDate);
            expect(displayTime).to.eq(typedTime);
        });
    })
})