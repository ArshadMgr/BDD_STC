class AddLeaveClass{

    AddLeaveAPI(){

        cy.request({
            method: 'POST',
            url: 'https://stcbase.securetech-consultancy.com/reference-data-service/LeaveType/create',
            
            body: {

                "name": "test123", 
                "description": "test123", 
                "companyId": 1, 
                "totalLeaves": 1,
                 "companyId" : 1,
                 "description" : "test123",
                 "name" : "test123",
                 "totalLeaves" : 1
            }

        }).then((response) => { 
            expect(response.body)
     })



    }
}

export default AddLeaveClass