///<reference types='cypress'/>
import AdminPortalLogInPO from '../../PageObjects/VMS/AdminPortalLogInPO'
import LoginData from '../../DataFiles/VMS/VMSLogin.json'

const AdminPortalLogin     = new AdminPortalLogInPO

class AdminPortalLogInClass{

   logIn(){

    cy.fixture("DataFiles/VMS/VMSLogin.json").then((datafile) => {
    cy.visit('https://cr.securetech-consultancy.com')
     AdminPortalLogin.getUserName().type(datafile.UserName)
     AdminPortalLogin.getPassword().type(datafile.PW)
     AdminPortalLogin.getLogInBtn().click()

   })
}

}
export default AdminPortalLogInClass