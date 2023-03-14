class DatetimePickerPage{
    convertDate(date){
        let datetimeArray = date.split(' ');
        let dateArray = datetimeArray[0].split('-');
        dateArray.reverse();
        return dateArray.join('-')+"T"+datetimeArray[1];
    }
    reverseDate(dateString){
        let dateArray = dateString.split('-');
        dateArray.reverse();
        let result = dateArray.join('-');
        // console.log(result);
        return result;
    }
    getDropdown(){
        return cy.get('ul.nav.navbar-nav li.dropdown:first-child a.dropdown-toggle');
    }
    getDropdownItem(value){
        return cy.get('ul.dropdown-menu li a:contains("'+value+'")');
    }
    getBdayInput(){
        return cy.get('input[name="bdaytime"]');
    }
    getBdaySubmit(){
        return cy.get('form[name="bdate"] input[type=submit]');
    }
    getBdayDisplay(){
        return cy.get('div[style="font-size:15px;margin-left:50px;"]');
    }
}
export default DatetimePickerPage;