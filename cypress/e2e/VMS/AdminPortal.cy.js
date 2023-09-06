
import AdminPortalLogInClass from "../../fixtures/Classes/VMS/AdminPortalLogIn_Class"
import APDashboard from "../../fixtures/Classes/VMS/APDashboard_Class"
import APVisitorsList from "../../fixtures/Classes/VMS/APVisitorsList_Class"
import APApprovalsAction from "../../fixtures/classes/VMS/APApprovalsAction_Class"
import APDashboardGadgets from "../../fixtures/Classes/VMS/APDashboardGadgets_Class"

const logInAP = new AdminPortalLogInClass()
const VL = new APVisitorsList()
const Dashboard = new APDashboard()
const Approvals  = new APApprovalsAction()
const Gadgets = new APDashboardGadgets()

describe('AdminPortal' , function(){
it( 'login', function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    cy.on("fail", (err, runnable) => {
        // Log the error message
        cy.log(err.message);
        // Prevent Cypress from stopping the test
        // by overriding the error
        err.retries = 0;
        throw err;
      }); 
    logInAP.logIn()
    //VL.VisitorsListfunction()
    Approvals.ApprovalsActionfunction()
    //Dashboard.Dashboardfunction()
    //Gadgets.DashboardGadgets()
})
// it('VisitorsList', function(){
//   VL.VisitorsListfunction()
// })
})//end of describe block