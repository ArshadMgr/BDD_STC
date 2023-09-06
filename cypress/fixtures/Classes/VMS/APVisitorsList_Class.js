///<reference types='cypress'/>
import APVisitorsPO from "../../PageObjects/VMS/APVisitorsListPO";
import VisitorsList from "../../DataFiles/VMS/VisitorList.json"
const APVisitors = new APVisitorsPO

class APVisitorsList{

  
    VisitorsListfunction(){
      cy.fixture("DataFiles/VMS/VisitorList.json").then((data) => {

      APVisitors.VisitorsList().click()
      
      APVisitors.getFilterID().select(1)
      APVisitors.getkeyword().type(data.keyword)
      APVisitors.getSearchBtn().click()
      //checking that every element in 5th column i.e. Host column equals the host name entered i.e. Fatima
      cy.get("td:nth-child(5)").each(($e1, index, $list) => {
         const text = $e1.text();
         if (text.includes(data.Host)) {
          cy.get("td:nth-child(5)")
            .eq(index)
            .then(function(Field) {
            const Fieldtext = Field.text();
            expect(Fieldtext).to.equal(data.Host);
          })
      }
        })
      
      })
    }
  
  
}
export default APVisitorsList