class APVisitorsPO{

  VisitorsList(){

    return cy.get('#vms > a > span')
  }

  getFilterID(){

     return cy.get('#searchdrop')

  }

               HostName(){
                    return cy.contains('Host Name')
                }
               ID(){
                     return cy.contains('ID')
                }
               Company(){
                    return cy.contains('Company')
                }
               CNIC(){
                      return cy.contains('CNIC')
                }
  getkeyword(){

    return cy.get('#insearch')

  }

  getSearchBtn(){
    return cy.get('#btnsearch')

  }
}
export default APVisitorsPO