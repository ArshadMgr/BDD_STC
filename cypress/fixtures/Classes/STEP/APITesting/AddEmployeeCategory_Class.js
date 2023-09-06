import AddEmployeeCategory from '../../../DataFiles/STEP/AddEmployeeCategory.json'

class AddEmployeeCategoryClass{
    AddEmployeeCategoryAPI(){ 
       cy.fixture("DataFiles/STEP/AddEmployeeCategory.json").then((data) => {
        cy.request({
         url : 'https://stcbase.securetech-consultancy.com/reference-data-service/EmployeeCategory/create',
         method: 'POST',
         body : {
            description : data.description,
            masterCategoryId : data.masterCategoryId,
            name : data.name,
            status : 1
        }
    })
})
    }
}
export default AddEmployeeCategoryClass