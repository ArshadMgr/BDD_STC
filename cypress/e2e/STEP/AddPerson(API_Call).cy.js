

import LoginClass from '../../fixtures/Classes/STEP/StepLogin_Class'

import AddPersonAPIClass from '../../fixtures/classes/STEP/APITesting/AddPersonAPI_Class'

const login1 = new LoginClass()

const AddPersonAPIClass1= new AddPersonAPIClass()


describe('Adding Person Through API', function() {
it.only('Adding Person Through API',()=>{
 login1.login() 
 AddPersonAPIClass1.AddPersonAPI()

})



})// end of describe block

