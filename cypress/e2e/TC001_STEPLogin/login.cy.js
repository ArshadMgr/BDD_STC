



import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit STEP", () => {
  cy.visit("stcbase.securetech-consultancy.com/step-portal")
});

When("I Enter User Name and Password and click on login", ()=>{
  cy.get('.example-container > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("hr@securetech-consultancy.com")
  cy.get('.mat-form-field.ng-tns-c172-1 > .mat-form-field-wrapper > .mat-form-field-flex').type('1234')
  cy.get('.mat-raised-button').click()

})


Then("Dashboard Page is opened", () => {

cy.title().then((title) => {

  expect(title).to.equal('STC Attendance Portal');
});
});