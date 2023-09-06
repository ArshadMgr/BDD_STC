import AddDesignation from '../../../DataFiles/STEP/AddDesignation.json'

class AddDesignationClass{
   AddDesignationAPI(){
      cy.visit("https://stcbase.securetech-consultancy.com/step-portal/#/tables/designations")
     cy.fixture("DataFiles/STEP/AddDesignation.json").then((data) => {  
      cy.request({
        method: 'POST',
        url : 'https://stcbase.securetech-consultancy.com/reference-data-service/Designations/create',
        
        body: {
           
           status: 1, 
           code: data.Code, 
           name: data.Name, 
           description: data.Description,
        }

   }).then((response) => { 
      expect(response.body)
     })
   })

   }
}

export default AddDesignationClass