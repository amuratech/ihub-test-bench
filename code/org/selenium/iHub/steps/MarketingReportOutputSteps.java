package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.MarketingReportInputPage;
import org.selenium.iHub.pages.MarketingReportOutputPage;

/**
 * Created by amuraqa on 13/2/18.
 */
public class MarketingReportOutputSteps {

    MarketingReportOutputPage dp;

    public MarketingReportOutputSteps(){dp = new MarketingReportOutputPage();}

    @When("^Enter Campaign inferences \"([^\"]*)\"$")
    public void enterCampaignInferences(String arg0){
        dp.enterCampaignInferences(arg0);
    }

    @And("^Enter Strategic inferences \"([^\"]*)\"$")
    public void enterStrategicInferences(String arg0) {
        dp.enterStrategicInferences(arg0);

    }

    @Then("^Click 'Save' button- Marketing Report output$")
    public void clickSaveButtonMarketingReportOutput() {
        dp.clickSaveButtonMarketingReportOutput();
    }

    @And("^Upload Report document- Marketing Report output$")
    public void uploadReportDocumentMarketingReportOutput() {
        dp.uploadReportDocumentMarketingReportOutput();
    }


    @When("^Rate the output- Marketing Report output$")
    public void rateTheOutputMarketingReportOutput() {
        dp.rateTheOutputMarketingReportOutput();
    }
}


