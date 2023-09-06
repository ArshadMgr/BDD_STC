import AddSites from '../../../DataFiles/STEP/AddSites.json'
class AddSitesClass{
    AddSitesAPI(){
        cy.fixture("DataFiles/STEP/AddSites.json").then((data) => {
          cy.request({
            method: 'POST',
            url: 'https://stcbase.securetech-consultancy.com/reference-data-service/Site/create',
            body: {
                status: data.status, 
                name: data.name, 
                districtId: data.districtId, 
                businessUnitId: data.businessUnitId, 
                workstationId: data.workstationId

            }
          })

        })
    }
}
export default AddSitesClass