import AddDesignation from '../../../DataFiles/STEP/AddDesignation.json';

class UpdateDesignationClass{
   UpdateDesignationAPI(){
    cy.fixture("DataFiles/STEP/AddDesignation.json").then((data) => {
        cy.request({
            method: 'POST',
            url: 'https://stcbase.securetech-consultancy.com/reference-data-service/Designations/create',
            body : {
                //applicationId : null,
                code : data.Code,
                //createdBy : null,
                createdDate : "2023-05-29T07:46:16.000+0000",
                //createdDateStr : null,
                //dataAfterUpdatedDateStr: null,
                description : data.Description,
                //employCategoryId : null,
                id : 781,
                //masterCategoryId : null,
                name : data.Name,
                status : "1",
                //statusStr : null,
                //updatedBy : null,
                //updatedDate : null,
                //updatedDateStr : null
            }

     })
    })
   }
}
export default UpdateDesignationClass