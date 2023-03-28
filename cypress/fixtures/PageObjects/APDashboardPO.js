import DashboardData from "../DataFiles/DashboardData.json"
class APDashboardPO{

   

Dashboard(){
     return cy.get('#dashboard > a > span')
}
StartDate(){
    return cy.get('#start-date')
}
    
EndDate(){
    return cy.get('#end-date')
}
   
HostName(){
    return cy.get('#person')
}
DownloadReport(){
    return cy.get('.box-footer > .btn')
}

NumberofPendingVehicleApprovals(){
    return cy.get('[href="https://cr.securetech-consultancy.com/admin/pendingvmsdetail"] > .col-lg-6 > .small-box > .inner > h6')
}

VehiclePendingApprovals(){
    return cy.get('[href="https://cr.securetech-consultancy.com/admin/pendingvmsdetail"] > .col-lg-6 > .small-box > .inner')   
}

    
}
export default APDashboardPO