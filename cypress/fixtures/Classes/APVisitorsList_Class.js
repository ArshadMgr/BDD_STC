///<reference types='cypress'/>
import APVisitorsPO from "../PageObjects/APVisitorsListPO";
import VisitorsList from "../DataFiles/VisitorList.json"
const APVisitors = new APVisitorsPO

class APVisitorsList{

  
    VisitorsListfunction(){
      cy.fixture("DataFiles/VisitorList.json").then((data) => {

      APVisitors.VisitorsList().click()
      
      APVisitors.getFilterID().select(1)
      APVisitors.getkeyword().type(data.keyword)
      APVisitors.getSearchBtn().click()


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