

import LoginClass from '../../fixtures/Classes/STEP/StepLogin_Class'

import addPersonClass from '../../fixtures/classes/STEP/addPerson_Class'

const login1 = new LoginClass()

const AddPersonUI= new addPersonClass()


describe('Adding Person Through UI', function() {
it.only('Adding Person Through UI',()=>{
 login1.login() 
 AddPersonUI.AddPerson()

})



})// end of describe block

