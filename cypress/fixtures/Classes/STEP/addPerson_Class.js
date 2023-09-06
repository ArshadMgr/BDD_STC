///<reference types='cypress'/>

import addNewPersonPO from '../../PageObjects/STEP/addNewPersonPO'

const POs = new addNewPersonPO()

class addPersonClass{

   AddPerson(){

    POs.getEmployeesMenu().click()
    POs.getAddPersonBtn().click()
    POs.getNametxtField().type("JohnCypress")
    POs.getNationalIDField().type("6110187611253")
    POs.getFatherName().type("StephenCypress")
    POs.getPhoneNo().type('03235815164')
    POs.getProvince().click()
    POs.selectProvince().click()
    POs.getPan().click()
    POs.selectCity().first().click()
    POs.getPerAddress().type("House#07, Street#2, I9/3 Isb")
    POs.getTempAddress().type("House#07, Street#2, I9/3 Isb")
    POs.getCountry().click()
    POs.selectCountry().click()
    POs.getEmailField().type("qa@securetech-consultancy.com")
    POs.getEmergContactName().type("Barack")
    POs.getEmergNoField().type('03235815164')
    POs.getSaveBtn().contains("save").click()
    
    POs.getGender().contains('Male').click()
    POs.getMaritalStatus().contains('Widowed').click() 
    POs.getDOB().click()





    

}

}
export default addPersonClass