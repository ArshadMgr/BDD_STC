///<reference types='cypress'/>
import APDashboardPO from '../../PageObjects/VMS/APDashboardPO'
import DashboardData from '../../DataFiles/VMS/DashboardData.json'
const Dashboard = new APDashboardPO()

//downloading report of dashboard
class APDashboard {
     Dashboardfunction(){
        cy.fixture("DataFiles/VMS/DashboardData.json").then((datafile) => {
     Dashboard.Dashboard().click()
     Dashboard.StartDate().type(datafile.StartDate)
     Dashboard.EndDate().type(datafile.EndDate)
     Dashboard.HostName().type(datafile.HostName)
     Dashboard.DownloadReport().click()
        })
     }
}
export default APDashboard