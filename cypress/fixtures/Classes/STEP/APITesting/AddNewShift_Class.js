import AddNewShift from '../../../DataFiles/STEP/AddNewShift.json'
class AddNewShiftClass{
    AddNewShiftAPI(){
        cy.fixture("DataFiles/STEP/AddNewShift.json").then((data) => {
          cy.request({
            method: 'POST',
            url : 'https://stcbase.securetech-consultancy.com/reference-data-service/Shift/create',
            body : {
                shiftName: data.ShiftName, 
                shiftDesc: data.ShiftDesc, 
                companyId: 1, 
                startTime: data.StartTime, 
                endTime: data.EndTime 
            }
          })

        })
    }
}
export default AddNewShiftClass