///<reference types='cypress'/>
import DemoClass from '../../fixtures/Classes/StepLogin_Class';
import LoginClass from '../../fixtures/Classes/StepLogin_Class'


//const {expect} = require("chai").use(require('chai-json-schema'));

const login1 = new LoginClass()


describe('Test Describe block', function() {


it.only('1st it block',()=>{
  cy.log("Start Time: "+new Date().toLocaleString());
  login1.login()



})


it('Testing Json Schema',()=>{

  //expect(validatorData.Apples).to.be.jsonSchema(validatorData.Schema);
  




})//end of it block




})// end of describe block

// Test Comment
