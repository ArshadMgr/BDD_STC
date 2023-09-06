class GETRequestClass{

    GETRequestAPI(){
       
        cy.request('GET', 
        'https://stcbase.securetech-consultancy.com/personservice/PersonVerificationData/profilePhoto/1931?random=0.9648089142348217')
        .its('status')
        .should('equal', 200);

    

    }

}

export default GETRequestClass