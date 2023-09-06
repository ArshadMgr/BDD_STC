///<reference types='cypress'/>

import LoginClass from '../../fixtures/Classes/STEP/StepLogin_Class'

import AddDesignationClass from '../../fixtures/classes/STEP/APITesting/AddDesignation_Class'

const login1 = new LoginClass()

const AddDesignation1= new AddDesignationClass()


describe('Adding Designation Through API', function() {
it.only('Adding Designation Through API',()=>{
 login1.login() 
 
 cy.wait(5000)
 AddDesignation1.AddDesignationAPI()

})



})// end of describe block

