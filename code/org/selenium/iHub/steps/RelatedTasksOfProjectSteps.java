package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.RelatedTasksOfProjectPage;

/**
 * Created by amuraqa on 23/11/17.
 */
public class RelatedTasksOfProjectSteps {

    RelatedTasksOfProjectPage dp;

    public RelatedTasksOfProjectSteps(){dp = new RelatedTasksOfProjectPage();}

    @Then("^Click Submit initial campaign brief task$")
    public void clickSubmitInitialCampaignBriefTask(){
        dp.clickSubmitInitialCampaignBriefTask();
    }

    @Given("^Testing- Submit Media Plan$")
    public void testingSubmitMediaPlan() {
        dp.testingSubmitMediaPlan();
    }

    @When("^Click on Testing- Generate Advertising Invoice$")
    public void clickOnTestingGenerateAdvertisingInvoice() {
        dp.clickOnTestingGenerateAdvertisingInvoice();
    }

    @When("^Click on Testing- Generate Sitemap$")
    public void clickOnTestingGenerateSitemap() {
        dp.clickOnTestingGenerateSitemap();
    }

    @When("^Click on Testing- Content for LP$")
    public void clickOnTestingContentForLP() {
        dp.clickOnTestingContentForLP();
    }

    @When("^Click on Testing- Request for Ad Communication$")
    public void clickOnTestingRequestForAdCommunication() {
        dp.clickOnTestingRequestForAdCommunication();
    }


    @Then("^Click Testing- Request website design$")
    public void clickTestingRequestWebsiteDesign() {
        dp.clickTestingRequestWebsiteDesign();
    }

    @When("^Click Testing- Request for Ad Design$")
    public void clickTestingRequestForAdDesign() {
        dp.clickTestingRequestForAdDesign();
    }

    @Given("^Testing- Request for website development$")
    public void testingRequestForWebsiteDevelopment(){
        dp.testingRequestForWebsiteDevelopment();
    }

    @When("^Click Testing- Request for Campaign Execution$")
    public void clickTestingRequestForCampaignExecution(){
        dp.clickTestingRequestForCampaignExecution();
    }


}
