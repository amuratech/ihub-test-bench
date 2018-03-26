package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.MarketingReportInputPage;

/**
 * Created by amuraqa on 12/2/18.
 */
public class MarketingReportIPSteps {

    MarketingReportInputPage dp;

    public MarketingReportIPSteps(){dp = new MarketingReportInputPage();}

    @Then("^Select 'SEO Report' task reference$")
    public void selectSEOReportTaskReference() {
        dp.selectSEOReportTaskReference();
    }

    @And("^Select 'Social Report' task reference$")
    public void selectSocialReportTaskReference() {
        dp.selectSocialReportTaskReference();
    }

    @And("^Select 'Campaign Report' task reference$")
    public void selectCampaignReportTaskReference() {
        dp.selectCampaignReportTaskReference();
    }

    @And("^Click 'Save' button- Marketing Report input$")
    public void clickSaveButtonMarketingReportInput() {
        dp.clickSaveButtonMarketingReportInput();
    }

    @Then("^Rate the input brief- Marketing Report$")
    public void rateTheInputBriefMarketingReport() {
        dp.rateTheInputBriefMarketingReport();
    }



}
