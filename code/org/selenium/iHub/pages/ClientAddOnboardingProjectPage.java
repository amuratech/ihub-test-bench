package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 21/3/18.
 */
public class ClientAddOnboardingProjectPage extends BasePage{

    UIElement addOnboarding = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Add onboarding')]");
    UIElement name = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_onboarding_assignment_name\"]");
    UIElement goLiveDate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_onboarding_assignment_golive_date\"]");
    UIElement dueDate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_onboarding_assignment_due_date\"]");
    UIElement kickOffDate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_onboarding_assignment_kick_off_meeting_date\"]");
    UIElement deliveryRequirements = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_onboarding_assignment\"]/div[7]/div/div/div/div[3]/div[2]");
    UIElement invoiceRequest = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_onboarding_assignment\"]/div[9]/div/div/div/div[3]/div[2]");
    UIElement saveProject = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_onboarding_assignment\"]/div[10]/input");//*[@id="new_client_onboarding_assignment"]/div[10]/input
    UIElement editProject = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Edit project')]");//*[@id="edit_client_onboarding_assignment_5ab1f6068ec6296985d78af9"]/div[10]/input
    UIElement contractAndMoUDoc = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[6]/div[2]/div/div[3]/div/input");//*[@id="edit_client_onboarding_assignment_5ab1f6068ec6296985d78af9"]/div[10]/input
    UIElement projects = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div/div[2]/div/div/ul/li[3]/a/i");//*[@id="edit_client_onboarding_assignment_5ab1f6068ec6296985d78af9"]/div[10]/input
    UIElement viewDetails = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/table/tbody/tr/td[5]/div/button/i");//*[@id="edit_client_onboarding_assignment_5ab1f6068ec6296985d78af9"]/div[10]/input
    UIElement saveProjectDocUpload = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_onboarding_assignment_')]/div[10]/input");//*[@id="edit_client_onboarding_assignment_5ab1f6068ec6296985d78af9"]/div[10]/input


    public void clickAddOnboardingLink() {
        tDriver.myclicking(addOnboarding);
    }

    public void enterNameOfTheProject(String arg0) {
        tDriver.myType(name,arg0);
    }

    public void selectGoLiveDateOfOnboardingProject() {
        tDriver.myClientOnboardingGoLiveDate(goLiveDate);
    }

    public void selectDueDateOfOnboardingProject() {
        tDriver.myClientOnboardingDueDate(dueDate);

    }

    public void selectKickOfMeetingDateForOnboardingProject() {
        tDriver.myClientOnboardingKickOffDate(kickOffDate);

    }

    public void enterAnySpecificDeliveryRequriements(String arg0) {
        tDriver.myType(deliveryRequirements,arg0);
    }

    public void enterImmediateInvoiceRequest(String arg0) {
        tDriver.myType(invoiceRequest,arg0);
    }

    public void clickSaveButtonOnboardingProject() {
        tDriver.myclicking(saveProject);
    }

    public void clickEditProjectForUploadingTheDocument() {
        tDriver.myclicking(editProject);
    }

    public void clickUploadButtonForContractAndMoUDocument() {
        tDriver.mytxtupload(contractAndMoUDoc);
    }

    public void selectTheOnboardedProjectFromTheProjectsDropdown() {
        tDriver.myClientOnboardingProjects(projects);
    }

    public void clickViewDetailsFromTheActions() {
        tDriver.myClientProjectViewDetails(viewDetails);
    }

    public void clickSaveButtonToUploadTheDocumentOnboardingProject() {
        tDriver.myClientOnboardingProjectSave(saveProjectDocUpload);
    }
}
