package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.CampaignExecutionOutputPage;

public class CampaignExecutionOutputSteps {

    CampaignExecutionOutputPage dp;

    public CampaignExecutionOutputSteps(){dp = new CampaignExecutionOutputPage();}


    @Then("^Click 'start working on this task'$")
    public void clickStartWorkingOnThisTask() {
        dp.clickStartWorkingOnThisTask();
    }

    @And("^Click 'Submit output' link$")
    public void clickSubmitOutputLink() {
        dp.clickSubmitOutputLink();
    }

    @Then("^Upload 'Ad screenshot' file'$")
    public void uploadAdScreenshotFile() {
        dp.uploadAdScreenshotFile();
    }

    @Then("^Click 'Submit' button$")
    public void clickSubmitButton(){
        dp.clickSubmitButton();
    }

    @And("^Enter 'Advertising automation dashboard URL' \"([^\"]*)\"$")
    public void enterAdvertisingAutomationDashboardURL(String arg0) {
        dp.enterAdvertisingAutomationDashboardURL(arg0);
    }

    @Then("^Select the status 'Review'$")
    public void selectTheStatusReview(){
        dp.selectTheStatusReview();
    }

    @And("^Click 'Update Task' button- Output$")
    public void clickUpdateTaskButtonOutput(){
        dp.clickUpdateTaskButtonOutput();
    }

    @Then("^Click 'Advertising Automation Dashboard Url' suff info button$")
    public void clickAdvertisingAutomationDashboardUrlSuffInfoButton() {
        dp.clickAdvertisingAutomationDashboardUrlSuffInfoButton();
    }

    @And("^Click 'Reason For Not Using Advertising Automation' suff info button$")
    public void clickReasonForNotUsingAdvertisingAutomationSuffInfoButton(){
        dp.clickReasonForNotUsingAdvertisingAutomationSuffInfoButton();
    }

    @And("^Click 'Media Plan Publisher' suff info button$")
    public void clickMediaPlanPublisherSuffInfoButton() {
        dp.clickMediaPlanPublisherSuffInfoButton();
    }

    @And("^Click 'Ad Screenshots' suff info button$")
    public void clickAdScreenshotsSuffInfoButton() {
        dp.clickAdScreenshotsSuffInfoButton();
    }

    @And("^Rate the output- Campaign Execution$")
    public void rateTheOutputCampaignExecution() {
        dp.rateTheOutputCampaignExecution();
    }

    @Then("^Click 'Deliver' button- Campaign Execution$")
    public void clickDeliverButtonCampaignExecution() {
        dp.clickDeliverButtonCampaignExecution();
    }
}
