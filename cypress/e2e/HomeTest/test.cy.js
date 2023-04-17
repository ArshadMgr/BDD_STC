
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit duckduckgo.com", () => {
  cy.visit("https://google.com")
});

When("I do something", ()=>{


})

Then("I should see a search bar", () => {

});