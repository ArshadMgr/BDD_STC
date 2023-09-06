import UpdateLeaveData from '../../../DataFiles/STEP/UpdateLeaveData.json'


class UpdateLeaveClass{

    UpdateLeaveAPI(){
        cy.fixture("DataFiles/STEP/UpdateLeaveData.json").then((data) => {
         cy.request({
           
             method: 'POST',
             url: 'https://stcbase.securetech-consultancy.com/reference-data-service/LeaveType/create',
            

             body: {
                applicationId: null, 
                createdBy: null, 
                createdDate: "2023-05-25T13:04:00.000+0000",
                applicationId : null,
                companyId : 1,
                companyName : "Secure Tech Consultancy",
                createdBy: null,
                createdDate : "2023-05-25T13:04:00.000+0000",
                createdDateStr : null,
                dataAfterUpdatedDateStr : null,
                description : data.Description ,
                id : 26,
                name : data.Name,
                status : null,
                statusStr : null,
                totalLeaves : data.TotalLeaves,
                updatedBy : null,
                updatedDate : null,
                updatedDateStr : null
                 

             }
           })

         })

    }
}

export default UpdateLeaveClass