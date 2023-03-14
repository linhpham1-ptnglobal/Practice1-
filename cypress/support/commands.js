// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginSauceDemoPage from "./PageObject/LoginPage/LoginSauceDemoPage"

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

Cypress.Commands.add('getIframeDocument', () => {
  return cy
    .get('iframe[name="globalSqa"]')
    .its('0.contentDocument')
  // .should('exist')
})

Cypress.Commands.add('getIframeBody', () => {
  return cy.getIframeDocument()
    .its('body')
    // .should('not.be.undefined')
    .then(cy.wrap)
})

Cypress.Commands.add('login', (username, password) => {
  const loginPage = new LoginSauceDemoPage();
    if(username!=="" && password!==""){
        loginPage.getUsernameTextBox()
            .clear()
            .type(username);
        loginPage.getPasswordTextBox()
            .clear()
            .type(password);
    }
    loginPage.getLoginButton()
        .click();
})

Cypress.Commands.add('randomDate',(startDayString, endDayString)=>{
  let startDay = new Date(startDayString); 
  let endDay = new Date(endDayString);
  let result = new Date(startDay.getTime() + Math.random() * (endDay.getTime() - startDay.getTime()));
  // console.log(result);
  return result;
})