
class UpdatePersonAPIClass{

    UpdatePersonAPI(){

        cy.request({
            method: 'POST',
            url: 'https://stcbase.securetech-consultancy.com/personservice/person/CreatePersonThenUser',
            
            
            body: {
            
                  id: 1010, 
                  name: "John DoeCypress_Updated3", 
                  fatherName: "Stephen SynderUpdated", 
                  nationalId: "6110187611253",
                countryCode: "",
                countryId: "1",
                createdBy: 71810,
                createdByName: "hr@securetech-consultancy.com",
                districtId: 38,
                dob: "1986-01-21T15:00:00.000",
                dobDisplay: "1986-01-21T10:00:00.000Z",
                email: "arshad.mehmood@securetech-consultancy.com",
                emergencyContactName: "Stephen",
                emergencyContactPhone: "03405664355",
                fatherName: "Barack Obama",
                gender: "1",
                id: 2125,
                maritalStatus:"2",
                nationalId: "6110187611253",
                permAddress: "House#5, Street#2, Islamabad",
                phoneNumber: "03235815164",
                provinceId: 1,
                tehsilId: "",
                tempAddress: "Dhoke Paracha, Satellite Town, Rawalpindi",
                updatedBy: 71810,
                updatedByName: "hr@securetech-consultancy.com"
        
                
            }
        }).then((response) => { 
               expect(response.body)
        })



    } //end of function 

} // end of class

    export default UpdatePersonAPIClass

 