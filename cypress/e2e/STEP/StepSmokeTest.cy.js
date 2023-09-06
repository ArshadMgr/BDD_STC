
//import DemoClass from '../../fixtures/Classes/StepLogin_Class';
import LoginClass from '../../fixtures/Classes/STEP/StepLogin_Class'
//import addNewPersonPO from '../../fixtures/PageObjects/STEP/addNewPersonPO';
//import addPersonClass from '../../fixtures/Classes/STEP/addPerson_Class';
import UpdatePersonAPIClass from '../../fixtures/Classes/STEP/APITesting/UpdatePersonAPI_Class';
import AddPersonAPIClass from '../../fixtures/Classes/STEP/APITesting/AddPersonAPI_Class';
import AddLeaveClass from '../../fixtures/Classes/STEP/APITesting/AddLeave_Class';
import GETRequestClass from '../../fixtures/Classes/STEP/APITesting/GETRequest';
import UpdateLeaveClass from '../../fixtures/Classes/STEP/APITesting/UpdateLeave_Class';
import AddDesignationClass from '../../fixtures/Classes/STEP/APITesting/AddDesignation_Class';
import AddEmployeeCategoryClass from '../../fixtures/Classes/STEP/APITesting/AddEmployeeCategory_Class';
import TestcasesClass from '../../fixtures/Classes/STEP/TestcasesClass';
import UpdateDesignationClass from '../../fixtures/Classes/STEP/APITesting/UpdateDesignation_Class';
import AddMasterCategoryClass from '../../fixtures/Classes/STEP/APITesting/AddMasterCategory_Class';
import AddNewShiftClass from '../../fixtures/Classes/STEP/APITesting/AddNewShift_Class';
import AddCompanyClass from '../../fixtures/Classes/STEP/APITesting/AddCompany_Class';
import AddSitesClass from '../../fixtures/Classes/STEP/APITesting/AddSites_Class';
import AddBusinessUnitClass from '../../fixtures/Classes/STEP/APITesting/AddBusinessUnit';


//const POs = new addNewPersonPO()
const login1 = new LoginClass()
//const AddPersonClass = new addPersonClass()
const UpdatePersonCls= new UpdatePersonAPIClass()
//const AddPersonAPIClass= new AddPersonAPIClass()
const LeaveUpdate = new AddLeaveClass()
const GETRequest = new GETRequestClass()
const UpdateLeave = new UpdateLeaveClass()
const AddDesignation = new AddDesignationClass()
const AddEmployeeCategory = new AddEmployeeCategoryClass()
const Testcases = new TestcasesClass()
const UpdateDesignation = new UpdateDesignationClass()
const AddMasterCategory = new AddMasterCategoryClass()
const AddNewShift = new AddNewShiftClass()
const AddCompany = new AddCompanyClass()
const AddSites = new AddSitesClass()
const AddBusinessUnit = new AddBusinessUnitClass()

describe('Test Describe block', function() {
it.only('1st it block',()=>{
  //cy.log("Start Time: "+new Date().toLocaleString());
 login1.login() 
 //AddPersonAPIClass.AddPersonAPI()
 UpdatePersonCls.UpdatePersonAPI()
 LeaveUpdate.AddLeaveAPI()   
 GETRequest.GETRequestAPI()
 UpdateLeave.UpdateLeaveAPI()
 AddDesignation.AddDesignationAPI()
 AddEmployeeCategory.AddEmployeeCategoryAPI()
 UpdateDesignation.UpdateDesignationAPI()
 AddMasterCategory.AddMasterCategoryAPI()    
 AddNewShift.AddNewShiftAPI()
 AddCompany.AddCompanyAPI()
 AddSites.AddSitesAPI()  
 AddBusinessUnit.AddBusinessUnitAPI()  
 
 //AddPersonClass.AddPerson()
 //Testcases.TestcaseOne()
})



})// end of describe block

// Test commen added from Arshad99