import AddMasterCategory from '../../../DataFiles/STEP/AddMasterCategory.json'

class AddMasterCategoryClass{
    AddMasterCategoryAPI(){
      cy.fixture('DataFiles/STEP/AddMasterCategory.json').then((data) => {
        // Send POST request with data from fixture file
          cy.request({
            method: 'POST',
            url: 'https://stcbase.securetech-consultancy.com/reference-data-service/MasterCategory/create',
            body: {
              description: data.Description,
              name: data.Name,
              status: 1
            }
          }).as('postRequest');
           
          
          // Assert response status code
          cy.get('@postRequest').its('status').should('eq', 200);
          debugger
          cy.log()
    
          // Assert response body properties
          cy.get('@postRequest').its('body.data[0].name').should('eq', data.Name);
          cy.get('@postRequest').its('body.data[0].description').should('eq', data.Description);
  
  
        });

        
    }
}
export default AddMasterCategoryClass