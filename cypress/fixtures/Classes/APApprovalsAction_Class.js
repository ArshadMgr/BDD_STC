///<reference types='cypress'/>
import APVisitorsPO from "../PageObjects/APVisitorsListPO";
const APVisitors = new APVisitorsPO

class APApprovalsAction{

   ApprovalsActionfunction(){
     APVisitors.VisitorsList().click() 
    
//     const now = new Date() 
//     cy.clock(now)

//     cy.get('#line848 > :nth-child(13)').invoke('text').then((appointmentTime) => {

//     //const time1 = appointmentTime.toLocaleTimeString(['en-US'], { hour: 'numeric', minute: 'numeric', hour12: true })
//     const systemTime = now.toLocaleTimeString(['en-US'], { hour: 'numeric', minute: 'numeric', hour12: true })

//    if (appointmentTime < systemTime) {
     

//    }

// })

cy.get('table[class="table table-bordered"]> tbody > tr> td:nth-child(2) .badge').each(($e , index, $list)  => {
  const text = $e.text()
  //expect(text).to.contain("Pending");  
if(text.includes("Pending")){
  //  cy.get('table[class="table table-bordered"]> tbody > tr> td:nth-child(9)').eq(index).then(function(VApproval){
  //   const VehicleApproval = VApproval.text();
  //       if(VehicleApproval.includes("Pending")){
  //          cy.get('table[class="table table-bordered"]> tbody > tr> td:nth-child(19) > .dropdown > .btn').eq(index).click()
  //          cy.get('table[class="table table-bordered"]> tbody > tr> td:nth-child(19) > .dropdown > .dropdown-menu > li > #log').eq(index).click()
  //          cy.get('myTable[class = "child"] > tbody > tr > td:nth-child(8)').click()

  //          cy.get('modal1[class = "modal-header"] > button > span').click()

  //         }
  //       })

   cy.get('table[class="table table-bordered"]> tbody > tr> td:nth-child(10)').eq(index).then(function(HApproval){
    const HSAApproval = HApproval.text();
   
        if(HSAApproval.includes("Pending")){

          //cy.get('table[class="table table-bordered"]> tbody > tr> td:nth-child(17)').eq(index).should('not.be.empty');  //NDA
          //cy.get('table[class="table table-bordered"]> tbody > tr> td:nth-child(18) > a').eq(index).should('not.be.empty');   //CNIC

          cy.get('table[class="table table-bordered"]> tbody > tr> td:nth-child(19) > .dropdown > .btn').eq(index).click()
          cy.get('table[class="table table-bordered"]> tbody > tr> td:nth-child(19) > .dropdown > .dropdown-menu > li > #log').eq(index).click()
          cy.get('myTable[class = "child"] > tbody > tr > td:nth-child(9)').click()
          }
          else{
            cy.end()
          }
       


   })
    
  }

  else{
    cy.end()
  }
})
   


 




  
}

}
export default APApprovalsAction