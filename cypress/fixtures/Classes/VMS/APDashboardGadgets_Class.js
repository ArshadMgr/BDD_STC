///<reference types='cypress'/>

import APDashboardPO from '../../PageObjects/VMS/APDashboardPO'  //Dashboard objects file
const Dashboard = new APDashboardPO

//comparing vehicle pending approvals gadget number to actual column length of tbale
class APDashboardGadgets{
    DashboardGadgets(){

        Dashboard.NumberofPendingVehicleApprovals()    //Storing number of requests for Vehicle entry
        .invoke('text')
        .then((NumofVehiclePendingApprovals) => {

        Dashboard.VehiclePendingApprovals().click()   //opening list of Vehicle pending approvals
        .then($table => {
        const numColumns = $table.find('tr:first-child th').length  //storing length of table columns
        expect(parseInt(NumofVehiclePendingApprovals)).to.equal(numColumns);  //comparing number of columns to the number written on gadget
         })
        })
    }     
}

export default APDashboardGadgets