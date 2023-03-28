
///<reference types="cypress" />
import LoginData from '../DataFiles/LoginData.json'
import STEPLoginPO from '../PageObjects/StepLoginPOs'
const LoginObjects= new STEPLoginPO()

class LoginClass{

    login(){


        cy.fixture("DataFiles/LoginData.json").then((data) => {
            
            //cy.visit('www.google.com')
            cy.visit('/login')
            LoginObjects.getUserName().type(data.UserName)
            LoginObjects.getPW().type(data.PW)
            LoginObjects.getLoginBtn().click()

            })




    }//end of function

}//end of class

export default LoginClass

// Test Comment -9899

