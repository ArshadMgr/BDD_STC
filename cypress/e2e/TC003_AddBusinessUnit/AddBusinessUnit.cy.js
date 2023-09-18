import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
class AddBusinessUnitClass{
    AddBusinessUnitAPI(){
        cy.fixture("DataFiles/STEP/AddBusinessUnit.json").then((data) => {
         cy.request({
            method: 'POST',
            url: 'https://stcbase.securetech-consultancy.com/reference-data-service/BusinessUnit/create',
            body: {
                name: data.name, 
                provinceId: data.provinceId, 
                completeAddress: data.completeAddress
            }
         })
        })
    }
}
export default AddBusinessUnitClass