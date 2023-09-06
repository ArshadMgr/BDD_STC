
class addNewPersonPO{

    getEmployeesMenu(){
       
        return cy.get('[href="#/tables/persons"] > .mat-list-item-content')
    }
    
   getAddPersonBtn(){

    return cy.get('.mat-button-wrapper').contains('Add Person')

   }

   getNametxtField(){

    return cy.get('.ng-untouched>.no-shadow>.mat-form-field>.mat-form-field-wrapper>.mat-form-field-flex').eq(0)

   }

   getNationalIDField(){

    return cy.get('.ng-untouched>.no-shadow>.mat-form-field>.mat-form-field-wrapper>.mat-form-field-flex').eq(1)

   }

   getDOB(){

    return cy.get('.mat-tab-body-wrapper>.mat-tab-body>.mat-tab-body-content>.example-large-box>.mat-datepicker-toggle-default-icon')
   

}

   getGender(){
    //return cy.get('.ng-untouched>.no-shadow>.mat-radio-group>.mat-radio-button').first()
    return cy.get('.mat-tab-body-wrapper')

   }

   getMaritalStatus(){

    //return cy.get('.ng-untouched>.no-shadow>.mat-radio-group').last()
    return cy.get('.mat-tab-body-wrapper')

   }

   getFatherName(){

    return cy.get('.no-shadow>.mat-form-field>.mat-form-field-wrapper>.mat-form-field-flex').eq(3)

   }

    getPhoneNo(){

        return cy.get('.no-shadow>.mat-form-field>.mat-form-field-wrapper>.mat-form-field-flex').eq(4)
    }

    getProvince(){

        return cy.get('.no-shadow>.mat-form-field>.mat-form-field-wrapper>.mat-form-field-flex').eq(5)

    }

    selectProvince(){
        return cy.get('#mat-option-112 > .mat-option-text')
        
    }

    selectCity(){
        return cy.get('.mat-option-text')
    }

    getPan(){
        return cy.get('.bg-white')
    }

    getPerAddress(){
        return cy.get('.no-shadow>.mat-form-field>.mat-form-field-wrapper>.mat-form-field-flex').eq(7)
    }

    getTempAddress(){
        return cy.get('.no-shadow>.mat-form-field>.mat-form-field-wrapper>.mat-form-field-flex').eq(8)
    }
    getCountry(){
        return cy.get('.no-shadow>.mat-form-field>.mat-form-field-wrapper>.mat-form-field-flex').eq(9)
    }
    selectCountry(){
        return  cy.get('.mat-option-text')
    }
    getEmailField(){
        return cy.get('.no-shadow>.mat-form-field>.mat-form-field-wrapper>.mat-form-field-flex').eq(10)
    }
    getEmergContactName(){
        return cy.get('.no-shadow>.mat-form-field>.mat-form-field-wrapper>.mat-form-field-flex').eq(11)
    }
    getEmergNoField(){
        return cy.get('.no-shadow>.mat-form-field>.mat-form-field-wrapper>.mat-form-field-flex').eq(12)
    }
    getSaveBtn(){
        return cy.get('.no-shadow>.mat-card>.example-button-row>.mat-focus-indicator>.mat-button-wrapper')
    }


    
    }
    export default addNewPersonPO