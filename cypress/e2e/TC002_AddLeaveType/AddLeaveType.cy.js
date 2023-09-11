

import LoginClass from '../../fixtures/Classes/STEP/StepLogin_Class'

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const login1 = new LoginClass()


Given("I visit the Leave Type after login1", () => {
    login1.login()
    cy.wait(3000)
  cy.visit("https://stcbase.securetech-consultancy.com/step-portal/#/tables/leave-types")
});

When("I Add the Leave Type", ()=>{

})


Then("Adding Leave Type was Success", () => {



});