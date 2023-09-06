

import LoginClass from '../../fixtures/Classes/STEP/StepLogin_Class'
import UpdatePersonAPIClass from '../../fixtures/classes/STEP/APITesting/UpdatePersonAPI_Class'

const login1 = new LoginClass()
const UpdatePersonAPIClass1 = new UpdatePersonAPIClass()


describe('Update Person Through API', function() {
it.only('Update Person Through API',()=>{
 login1.login() 
 
 UpdatePersonAPIClass1.UpdatePersonAPI()

})



})// end of describe block

