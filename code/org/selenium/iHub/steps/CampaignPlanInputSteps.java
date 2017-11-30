package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.CampaignBriefPage;
import org.selenium.iHub.pages.CampaignPlanInputPage;

public class CampaignPlanInputSteps {

    CampaignPlanInputPage cp;

    public  CampaignPlanInputSteps(){cp = new CampaignPlanInputPage();}

    @Then("^Enter objective \"([^\"]*)\"$")
    public void enterObjective(String  arg0) {
        cp.enterObjective(arg0);
    }

    @And("^Enter client brief$")
    public void enterClientBrief(){
        cp.enterClientBrief();
    }

    @Then("^Click save button$")
    public void clickSaveButton() {
        cp.clickSaveButton();
    }

    @And("^Click save and publish button$")
    public void clickSaveAndPublishButton() {
        cp.clickSaveAndPublishButton();
    }

    @And("^Rate the brief$")
    public void rateTheBrief() {
        cp.rateTheBrief();
    }

    @And("^Select task start date$")
    public void selectTaskStartDate() {
        cp.selectTaskStartDate();
    }

    @And("^Click client brief$")
    public void clickClientBrief(){
        cp.clickClientBrief();
    }

    @And("^Click reference doc$")
    public void clickReferenceDoc() {
        cp.clickReferenceDoc();
    }

    @Then("^Click on user$")
    public void clickOnUser() {
        cp.clickOnUser();
    }

    @Then("^Click on sign out$")
    public void clickOnSignOut() {
        cp.clickOnSignOut();
    }


    @And("^Click objective suff info$")
    public void clickObjectiveSuffInfo(){
        cp.clickObjectiveSuffInfo();
    }

    @And("^Click client brief suff info$")
    public void clickClientBriefSuffInfo() {
        cp.clickClientBriefSuffInfo();
    }

    @And("^Click reference doc suff info$")
    public void clickReferenceDocSuffInfo() {
        cp.clickReferenceDocSuffInfo();
    }

    @And("^Rate the input brief- campaign plan$")
    public void rateTheInputBriefCampaignPlan() {
        cp.rateTheInputBriefCampaignPlan();
    }

    @And("^Click 'accept' button- campaign plan input$")
    public void clickAcceptButtonCampaignPlanInput() {
        cp.clickAcceptButtonCampaignPlanInput();
    }

    @And("^Click 'Start working on this task' button$")
    public void clickStartWorkingOnThisTaskButton() {
        cp.clickStartWorkingOnThisTaskButton();
    }


}
