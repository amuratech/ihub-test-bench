package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.AssignmentTasksPage;

public class AssignmentTasksSteps {

    AssignmentTasksPage dp;

    public AssignmentTasksSteps(){dp = new AssignmentTasksPage();}

    @Then("^Goto 'edit' link$")
    public void gotoEditLink() {
        dp.gotoEditLink();
    }

    @And("^Change the stage to 'Initiate'$")
    public void changeTheStageToInitiate() {
        dp.changeTheStageToInitiate();
    }

    @Then("^Click 'save' button- new campaign$")
    public void clickSaveButtonNewCampaign() {
        dp.clickSaveButtonNewCampaign();
    }

    @Then("^Click on 'View all tasks of this campaign' link$")
    public void clickOnViewAllTasksOfThisCampaignLink() {
        dp.clickOnViewAllTasksOfThisCampaignLink();
    }

    @And("^Select 'Edit'- initial campaign$")
    public void selectEditInitialCampaign() {
        dp.selectEditInitialCampaign();
    }

    @And("^Click on Projects tab$")
    public void clickOnProjectsTab(){
        dp.clickOnProjectsTab();
    }

    @Then("^Change the stage to 'Brief Approved'$")
    public void changeTheStageToBriefApproved() {dp.changeTheStageToBriefApproved();
    }

    @And("^Click 'save' button- brief approved$")
    public void clickSaveButtonBriefApproved() {
        dp.clickSaveButtonBriefApproved();
    }

    @Then("^Click on 'View all tasks of this campaign' link- brief approved$")
    public void clickOnViewAllTasksOfThisCampaignLinkBriefApproved() {
        dp.clickOnViewAllTasksOfThisCampaignLinkBriefApproved();
    }

    @And("^Select 'Edit' link- media plan$")
    public void selectEditLinkMediaPlan() {
        dp.selectEditLinkMediaPlan();
    }

    @And("^Check the Content Bandwidth$")
    public void checkTheContentBandwidth() {
        dp.checkTheContentBandwidth();
    }


}

