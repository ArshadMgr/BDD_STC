
import APVisitorsPO from "../../PageObjects/VMS/APVisitorsListPO";
//import APApprovalsActionPO from "../../PageObjects/VMS/APApprovalsActionPO"

const APVisitors = new APVisitorsPO
//const APApprovals  = new APApprovalsActionPO

class APApprovalsAction{

   ApprovalsActionfunction(){
     APVisitors.VisitorsList().click() 
  
       //taking system time and date
       const now = new Date() 
      // cy.clock(now)
       const systemTime = now.toLocaleTimeString(['en-US'], { hour: 'numeric', minute: 'numeric', hour12: true })
       cy.log(systemTime);
       const currentDate = (new Date().toLocaleDateString());     
       cy.log("current Date:" , currentDate)
 
 //pagination
    
   
//checking appointment status
       // cy.get('td:nth-child(2) .badge').each(($e, index, $list) => {
         // cy.wrap($e).invoke('text').then((text) => {
          //  if (text.includes('Pending') || text.includes ('In Progress')) {

              cy.get('td:nth-child(2) .badge').then($elements => {
                for (let index = 0; index < $elements.length; index++) {
                  const $element = $elements[index];
                  cy.log("index:" , index)
                  if (index == 20) {
                    return false; // Return false to break the loop
                  }
                  cy.wrap($element).invoke('text').then(text => {
                    if (text.includes('Pending') || text.includes('In Progress')) {              
//storing end time of appointment
         cy.get('table[class="table table-bordered"] > tbody > tr > td:nth-child(12)').eq(index)
         .invoke('text')
         .then(function(appointmentTimein24hr)  {
         cy.log("Time:" , appointmentTimein24hr);
         var data = JSON.stringify(appointmentTimein24hr)
         cy.log("data:" , data)
         var trimmedData = data.trim();
         var [appointmentDate, array2]= trimmedData.split(" ")
         cy.log("date:" , appointmentDate)
         cy.log("time:" , array2)
         if (appointmentTimein24hr === 'undefined')
        {  cy.log("time is undefined")         
           cy.end()  
        }  
        else {
          cy.log("time is not undefined")
          const [hours,minutes,second] = array2.split(':');
          const hoursNumbers = parseInt(hours, 10);
          const AMPM = hoursNumbers >= 12 ? 'PM' : 'AM' ;
          const hoursApp = hoursNumbers % 12 || 12;
          const appointmentTime = `${hoursApp}:${minutes} ${AMPM}`;
          cy.log("appointmentTime:" , appointmentTime);
        
    //check number of visitors  

//checking if the appointment status is pending, check if the vehicle approval is pending, give approval                 
             cy.get('table[class="table table-bordered"] > tbody > tr > td:nth-child(9)').eq(index).then(function (VApproval) {
                cy.log("VApproval function is :" , VApproval)
                cy.log("VApproval type : " ,typeof VApproval)
                cy.log("VApproval text is : " , VApproval.text())
              //function repeatActionUntil (VApproval) {
                var VehicleApproval = VApproval.text()
               
                 if (VehicleApproval.includes('Approval Pending')) {
                  
                  // cy.log("appointmentDate:" , appointmentDate)
                  // cy.log("currentDate:" , currentDate)
                  // cy.log("appointmentTime:" , appointmentTime)
                  // cy.log("systemTime:" , systemTime)
                   //if(appointmentDate < currentDate || appointmentTime < systemTime )   //{    
                    // if(appointmentDate < currentDate)
                   //  {
                    //  cy.log("time is expired")
                    //  cy.end()
                   //  }
                   // }
                //  else 
                    {
                    cy.get('table[class="table table-bordered"]> tbody > tr> td:nth-child(18) > .dropdown > .btn').eq(index).click({force:true});
                    cy.get('table[class="table table-bordered"] > tbody > tr > td:nth-child(18) > .dropdown > .dropdown-menu > li > #log').eq(index).click({force:true});
                    cy.wait(1000)        
                    //approve the Vehicle request
                    cy.log("approving vehicle request")
                    //cy.get('body.skin-blue.pace-done.modal-open:nth-child(2) div.wrapper.row-offcanvas.row-offcanvas-left:nth-child(4) aside.right-side section.content div.box.box-info.tbl-box:nth-child(3) div.nav-tabs-custom div.modal.fade.in:nth-child(1) div.modal-dialog-scrollable div.modal-content div.modal-body table.table.table-hover:nth-child(3) tbody:nth-child(2) tr.child td:nth-child(10) > a:nth-child(1)').click({force:true});
                    
                    cy.get('.modal-dialog-scrollable>.modal-content>.modal-body>#myTable>tbody>.child')  //cy.get('.modal-dialog-scrollable>.modal-content>.modal-body>#myTable>tbody>.child>#app1')
                    .contains('Approve').click({force:true})
                   // .eq(index,1,1,index).click()

                    cy.wait(1000);
                    //deny vehicle approval
                    //cy.get('body.skin-blue.pace-done.modal-open:nth-child(2) div.wrapper.row-offcanvas.row-offcanvas-left:nth-child(4) aside.right-side section.content div.box.box-info.tbl-box:nth-child(3) div.nav-tabs-custom div.modal.fade.in:nth-child(1) div.modal-dialog-scrollable div.modal-content div.modal-body table.table.table-hover:nth-child(3) tbody:nth-child(2) tr.child td:nth-child(10) > a:nth-child(2)').click({force:true});
                    cy.get('.modal-footer > .btn').click({force:true});
                    }
                    //repeatActionUntil(VApproval);
                 }
                // else{
                //      cy.end()
                 //    }
            //}  end of repeatActionUntil function
                  //repeatActionUntil(VApproval);
              });  
             //return false; // Stop iterating through the remaining elements   
                 
//checking for HSA approval           
             cy.get('table[class="table table-bordered"]> tbody > tr> td:nth-child(10)').eq(index).then(function(HApproval){
               const HSAApproval = HApproval.text();

               if(HSAApproval.includes("Pending")){
                 cy.log("appointmentDate:" , appointmentDate)
                 cy.log("currentDate:" , currentDate)
                 cy.log("appointmentTime:" , appointmentTime)
                 cy.log("systemTime:" , systemTime)
                 if(appointmentTime < systemTime) //appointmentDate < currentDate || 
                    {
                      cy.log("time is expired")
                      cy.end()
                    }
                 else 
                   {
                    cy.log("checking NDA")
                    cy.get('table[class="table table-bordered"]> tbody > tr> td:nth-child(16)').eq(index).should('not.be.empty');  //NDA
                    cy.wait(1000)
                    cy.log("checking CNIC")
                    cy.get('table[class="table table-bordered"]> tbody > tr> td:nth-child(17)').eq(index).should('not.be.empty');   //CNIC
                    cy.wait(1000)
                    cy.log("checking Enterance time")
                    cy.get('table[class="table table-bordered"]> tbody > tr> td:nth-child(14)').eq(index)   //Enterance time
                       .invoke("text")
                       .then((text) => {
                        cy.log("checking entrance time")
                       expect(text.trim()).not.to.equal("0000-00-00");
                       });
                    cy.log("clicking on Action")
                   cy.get('table[class="table table-bordered"]> tbody > tr> td:nth-child(18) > .dropdown > .btn').eq(index).click({force:true})
                   cy.wait(1000)
                   cy.log("clicking on Approvals")
                   cy.get('table[class="table table-bordered"]> tbody > tr> td:nth-child(18) > .dropdown > .dropdown-menu > li > #log').eq(index).click({force:true})
                   cy.wait(1000)
                
                 //approve HSA request
                 cy.log("Approving HSA request")
                 cy.get('.modal-dialog-scrollable>.modal-content>.modal-body>#myTable>tbody>.child>#hsa_app1')  //
                 .contains('Approve').click()
                 //cy.get('body.skin-blue.pace-done.modal-open:nth-child(2) div.wrapper.row-offcanvas.row-offcanvas-left:nth-child(4) aside.right-side section.content div.box.box-info.tbl-box:nth-child(3) div.nav-tabs-custom div.modal.fade.in:nth-child(1) div.modal-dialog-scrollable div.modal-content div.modal-body table.table.table-hover:nth-child(3) tbody:nth-child(2) tr.child td:nth-child(11) > a:nth-child(1)').click();
                 cy.get('.modal-footer > .btn').click();
                 cy.wait(1000)
          } 
        }
        //  else{
         //   cy.wait(1000)
         //   cy.end()
        //  }   
         })  //HSA function  
          
        } //else statement for checking end time
      }) // function for checking time of appointment     
  } //checking penidng appointment status
  //else{
   // cy.end()+
  }) //invoking appointment status text

  //  function goToNextPage (){
  //    cy.get('.nav-tabs-custom > :nth-child(2) > .pagination > :nth-child(3) > a').click();
  //  }
 
} //for loop for indexing
                })   // storing elements to check index 
} //end of function        
}//end of class


export default APApprovalsAction





