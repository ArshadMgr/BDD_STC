///<reference types='cypress'/>
import AdminPortalLogInClass from "../fixtures/Classes/AdminPortalLogIn_Class"
import APDashboard from "../fixtures/Classes/APDashboard_Class"
import APVisitorsList from "../fixtures/Classes/APVisitorsList_Class"
import APApprovalsAction from "../fixtures/Classes/APApprovalsAction_Class"
import APDashboardGadgets from "../fixtures/Classes/APDashboardGadgets_Class"

const logInAP = new AdminPortalLogInClass()
const VL = new APVisitorsList()
const Dash = new APDashboard()
const Approvals  = new APApprovalsAction()
const Gadgets = new APDashboardGadgets()

describe('AdminPortal' , function(){
it( 'login', function(){

    logInAP.logIn()
    //VL.VisitorsListfunction()
    Approvals.ApprovalsActionfunction()
    //Dash.Dashboardfunction()
    //Gadgets.DashboardGadgets()

})

// it('VisitorsList', function(){

//   VL.VisitorsListfunction()


// })


})//end of describe block