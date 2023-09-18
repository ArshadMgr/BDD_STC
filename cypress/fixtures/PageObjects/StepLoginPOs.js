class STEPLoginPO{
  
   getUserName(){
    return cy.get('#mat-input-0')
   }
   getPW(){
    return cy.get('#mat-input-1')
   }

   getLoginBtn(){
    return cy.get('.mat-raised-button')
   }

}
export default STEPLoginPO