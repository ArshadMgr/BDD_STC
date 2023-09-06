

class AddPersonAPIClass{

    AddPersonAPI(){

        cy.request({
            method: 'POST',
            url: 'https://stcbase.securetech-consultancy.com/personservice/person/CreatePersonThenUser',
            
            body: {
            
                
                    "id": "",
                     "name": "QACypress1",
                    "nationalId": "6110187611250",
                    "dob": "2023-05-03T00:00:00.000",
                    "countryCode":"",
                    "createdBy":71810,
                    "createdByName": "hr@securetech-consultancy.com",
                    "dobDisplay": "1987-01-21T10:00:00.000Z",
                    "gender": "1",
                    "maritalStatus":"2",
                    "tehsilId": "",
                    "updatedBy": "71810",
                    "updatedByName": "hr@securetech-consultancy.com"
        
                
    
                
            }
        }).then((response) => { 
               expect(response.body)
        })



    } //end of function 

} // end of class

    export default AddPersonAPIClass

 