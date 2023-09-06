import AddCompany from '../../../DataFiles/STEP/AddCompany.json'

class AddCompanyClass{
    AddCompanyAPI(){
      cy.fixture("DataFiles/STEP/AddCompany.json").then((data) => {
         cy.request({
          method: 'POST',
          url: 'https://stcbase.securetech-consultancy.com/reference-data-service/Company/create',  
          body: {
            name: data.name, 
            serverUrl: data.serverUrl,

          }  
            })
        })
    }
}
export default AddCompanyClass