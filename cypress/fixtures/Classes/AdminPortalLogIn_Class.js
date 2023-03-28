///<reference types='cypress'/>
import AdminPortalLogInPO from '../PageObjects/AdminPortalLogInPO'
import LoginData from '../DataFiles/LoginData.json'

const AdminPortalLogin     = new AdminPortalLogInPO

class AdminPortalLogInClass{

   logIn(){

    cy.fixture("DataFiles/LoginData.json").then((datafile) => {
    cy.visit('/')
     AdminPortalLogin.getUserName().type(datafile.UserName)
     AdminPortalLogin.getPassword().type(datafile.PW)
     AdminPortalLogin.getLogInBtn().click()

   })
}

}
export default AdminPortalLogInClass