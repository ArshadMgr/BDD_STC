///<reference types='cypress'/>
import APDashboardPO from '../PageObjects/APDashboardPO'
import DashboardData from '../DataFiles/DashboardData.json'
const Dashboard = new APDashboardPO

class APDashboard {

     Dashboardfunction(){
 

        cy.fixture("DataFiles/DashboardData.json").then((datafile) => {
     Dashboard.Dashboard().click()
     Dashboard.StartDate().type(datafile.StartDate)
     Dashboard.EndDate().type(datafile.EndDate)
     Dashboard.HostName().type(datafile.HostName)
     Dashboard.DownloadReport().click()

        })

     }


}
export default APDashboard