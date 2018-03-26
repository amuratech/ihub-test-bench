package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ClientAddOnboardingProjectPage;

/**
 * Created by amura on 21/3/18.
 */
public class ClientAddOnboardingProjectSteps {

    ClientAddOnboardingProjectPage dp;

    public ClientAddOnboardingProjectSteps(){dp = new ClientAddOnboardingProjectPage();}

    @When("^Click 'Add onboarding' link$")
    public void clickAddOnboardingLink() {
        dp.clickAddOnboardingLink();
    }

    @Then("^Enter Name of the project \"([^\"]*)\"$")
    public void enterNameOfTheProject(String arg0){
        dp.enterNameOfTheProject(arg0);
    }

    @And("^Select Go Live date of onboarding project$")
    public void selectGoLiveDateOfOnboardingProject() {
        dp.selectGoLiveDateOfOnboardingProject();
    }

    @And("^Select Due date of onboarding project$")
    public void selectDueDateOfOnboardingProject() {
        dp.selectDueDateOfOnboardingProject();
    }

    @And("^Select Kick of meeting date for onboarding project$")
    public void selectKickOfMeetingDateForOnboardingProject() {
        dp.selectKickOfMeetingDateForOnboardingProject();
    }

    @And("^Enter 'Any specific delivery requriements' \"([^\"]*)\"$")
    public void enterAnySpecificDeliveryRequriements(String arg0) {
        dp.enterAnySpecificDeliveryRequriements(arg0);
    }

    @And("^Enter 'Immediate invoice request' \"([^\"]*)\"$")
    public void enterImmediateInvoiceRequest(String arg0){
        dp.enterImmediateInvoiceRequest(arg0);
    }

    @And("^Click 'Save' button- onboarding project$")
    public void clickSaveButtonOnboardingProject() {
        dp.clickSaveButtonOnboardingProject();
    }

    @When("^Click 'Edit project' for uploading the document$")
    public void clickEditProjectForUploadingTheDocument() {
        dp.clickEditProjectForUploadingTheDocument();
    }

    @Then("^Click 'Upload' button for Contract and MoU document$")
    public void clickUploadButtonForContractAndMoUDocument() {
        dp.clickUploadButtonForContractAndMoUDocument();
    }

    @When("^Select the onboarded project from the projects dropdown$")
    public void selectTheOnboardedProjectFromTheProjectsDropdown() {
        dp.selectTheOnboardedProjectFromTheProjectsDropdown();
    }

    @And("^Click 'View details' from the actions$")
    public void clickViewDetailsFromTheActions() {
        dp.clickViewDetailsFromTheActions();
    }


    @And("^Click 'Save' button to upload the document- onboarding project$")
    public void clickSaveButtonToUploadTheDocumentOnboardingProject() {
        dp.clickSaveButtonToUploadTheDocumentOnboardingProject();
    }
}
