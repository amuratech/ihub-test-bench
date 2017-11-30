package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.AddNewProjectPage;

public class AddNewProjectSteps {

    AddNewProjectPage dp;

    public AddNewProjectSteps(){dp = new AddNewProjectPage();}


    @And("^Filter for client \"([^\"]*)\"$")
    public void filterForClient(String arg0) {
        dp.filterForClient(arg0);
    }

    @Then("^Click on projects$")
    public void clickOnProjects() {
        dp.clickOnProjects();
    }

    @And("^Click on campaigns$")
    public void clickOnCampaigns() {
        dp.clickOnCampaigns();
    }

    @Then("^Click new campaign$")
    public void clickNewCampaign() {
        dp.clickNewCampaign();
    }

    @And("^Enter campaign title$")
    public void enterCampaignTitle(){
        dp.enterCampaignTitle();
    }

    @And("^Enter budget- assignment$")
    public void enterBudgetAssignment() {
        dp.enterBudgetAssignment();
    }

    @And("^Select due date- assignment$")
    public void selectDueDateAssignment() {
        dp.selectDueDateAssignment();
    }

    @And("^Select campaign start date- assignment$")
    public void selectCampaignStartDateAssignment(){
        dp.selectCampaignStartDateAssignment();
    }

    @And("^Select campaign end date- assignment$")
    public void selectCampaignEndDateAssignment(){
        dp.selectCampaignEndDateAssignment();
    }

    @And("^Select purpose- assignment$")
    public void selectPurposeAssignment(){
        dp.selectPurposeAssignment();
    }

    @And("^Select website design$")
    public void selectWebsiteDesign(){
        dp.selectWebsiteDesign();
    }

    @And("^Check 'brief session required' box$")
    public void checkBriefSessionRequiredBox() {
        dp.checkBriefSessionRequiredBox();
    }

    @Then("^Click 'save' button- assignment$")
    public void clickSaveButtonAssignment() {
        dp.clickSaveButtonAssignment();
    }

    @And("^Select 'Project'$")
    public void selectProject(){
        dp.selectProject();
    }

    @Then("^Select 'Client'$")
    public void selectClient() {
        dp.selectClient();
    }

    @And("^Click 'Add Project'$")
    public void clickAddProject() {
        dp.clickAddProject();
    }

    @And("^Enter Project title \"([^\"]*)\"$")
    public void enterProjectTitle(String arg0) {
        dp.enterProjectTitle(arg0);
    }

    @And("^Select Project type$")
    public void selectProjectType() {
        dp.selectProjectType();
    }

    @And("^Select Due date of project$")
    public void selectDueDateOfProject() {
        dp.selectDueDateOfProject();
    }

    @And("^Enter Estimated budget \"([^\"]*)\"$")
    public void enterEstimatedBudget(String arg0) {
        dp.enterEstimatedBudget(arg0);
    }

    @And("^Enter Purpose \"([^\"]*)\"$")
    public void enterPurpose(String arg0) {
        dp.enterPurpose(arg0);
    }

    @And("^Click 'Initiate campaign'$")
    public void clickInitiateCampaign() {
        dp.clickInitiateCampaign();
    }

    @And("^Select Billing method$")
    public void selectBillingMethod() {
        dp.selectBillingMethod();
    }

}
