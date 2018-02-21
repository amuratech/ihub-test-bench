package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.EditAndReviewLinkPage;

public class EditAndReviewLinkSteps {

    EditAndReviewLinkPage dp;

    public EditAndReviewLinkSteps(){dp = new EditAndReviewLinkPage();}

    @Then("^Click on task sidebar$")
    public void clickOnTaskSidebar() {
        dp.clickOnTaskSidebar();
    }


    @And("^Click on assigned to me$")
    public void clickOnAssignedToMe() {
        dp.clickOnAssignedToMe();
    }


    @Then("^Select newest$")
    public void selectNewest() {
        dp.selectNewest();
    }

    @And("^Click on apply$")
    public void clickOnApply() {
        dp.clickOnApply();
    }


    @Then("^Click review link$")
    public void clickReviewLink() {
        dp.clickReviewLink();
    }


    @Then("^Click on Edit$")
    public void clickOnEdit() {
        dp.clickOnEdit();
    }

    @And("^Click on campaign$")
    public void clickOnCampaign() {
        dp.clickOnCampaign();
    }

    @Then("^Click 'Add/Edit input brief'$")
    public void clickAddEditInputBrief() {
        dp.clickAddEditInputBrief();
    }

    @Then("^Click on 'Task' from side panel$")
    public void clickOnTaskFromSidePanel() {
        dp.clickOnTaskFromSidePanel();
    }

    @Then("^Click on task sidebar- Admin$")
    public void clickOnTaskSidebarAdmin() {
        dp.clickOnTaskSidebarAdmin();
    }

    @Then("^Click View details$")
    public void clickViewDetails() {
        dp.clickViewDetails();
    }

    @Then("^Click 'All' pagination$")
    public void clickAllPagination() {
        dp.clickAllPagination();
    }

    @When("^Click on task sidebar- Superadmin$")
    public void clickOnTaskSidebarSuperadmin() {
        dp.clickOnTaskSidebarSuperadmin();
    }

    @When("^Click 'Save and add input brief' button$")
    public void clickSaveAndAddInputBriefButton() {
        dp.clickSaveAndAddInputBriefButton();
    }
}
