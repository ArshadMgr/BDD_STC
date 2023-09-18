

import LoginData from "../../DataFiles/STEP/LoginData.json"
import STEPLoginPO from "../../PageObjects/STEP/StepLoginPOs"
const LoginObjects= new STEPLoginPO()

class LoginClass{

    login(){

        

        cy.fixture("DataFiles/STEP/LoginData.json").then((data) => {           
            LoginObjects.getUserName().type(data.STEPUserName)
            LoginObjects.getPW().type(data.STEPPW)
            LoginObjects.getLoginBtn().click()
            })
    }//end of function
}//end of class

export default LoginClass



