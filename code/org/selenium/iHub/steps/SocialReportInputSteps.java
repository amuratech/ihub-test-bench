package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SocialReportInputPage;

public class SocialReportInputSteps {

    SocialReportInputPage dp;

    public SocialReportInputSteps(){dp = new SocialReportInputPage();}

    @Then("^Enter Campaign name \"([^\"]*)\"$")
    public void enterCampaignName(String arg0) {
        dp.enterCampaignName(arg0);
    }

    @And("^Select Report start date$")
    public void selectReportStartDate(){
        dp.selectReportStartDate();
    }

    @And("^Select Report end date$")
    public void selectReportEndDate() {
        dp.selectReportEndDate();
    }

    @And("^Click 'Save' button- Social Report Input$")
    public void clickSaveButtonSocialReportInput() {
        dp.clickSaveButtonSocialReportInput();
    }

    @And("^Select Platforms- Social Report$")
    public void selectPlatforms() {
        dp.selectPlatforms();
    }


    @Then("^Rate the input- Social Report$")
    public void rateTheInputSocialReport(){
        dp.rateTheInputSocialReport();
    }
}
