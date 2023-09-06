class AdminPortalLogInPO{

getUserName(){
   return cy.get(':nth-child(2) > .controls > .input-icon > .m-wrap')

}

getPassword(){
   return cy.get(':nth-child(3) > .controls > .input-icon > .m-wrap')

}
getLogInBtn(){
    return cy.get('.btn')

}

}
export default AdminPortalLogInPO