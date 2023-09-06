



describe('Demo', function() {
    it.only('Demo',()=>{


        cy.STEPVisit("https://stcbase.securetech-consultancy.com/step-portal/#/login")
        cy.get('.example-container > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("hr@securetech-consultancy.com")
        cy.get('.mat-form-field.ng-tns-c172-1 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('1234')
        cy.STEPSignInButton_Click()
    })
    
    
    })// end of describe block
 