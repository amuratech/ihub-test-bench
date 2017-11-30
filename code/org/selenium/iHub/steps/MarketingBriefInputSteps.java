package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.MarketingBriefInputPage;

public class MarketingBriefInputSteps {

    MarketingBriefInputPage dp;

    public MarketingBriefInputSteps(){dp = new MarketingBriefInputPage();}

    @Then("^Enter Objective \"([^\"]*)\"- Marketing$")
    public void enterObjectiveMarketing(String arg0) {
        dp.enterObjectiveMarketing(arg0);
    }

    @And("^Enter Brief provided by client \"([^\"]*)\"$")
    public void enterBriefProvidedByClient( String arg0){
        dp.enterBriefProvidedByClient(arg0);
    }

    @And("^Click 'Save' button- Marketing Input$")
    public void clickSaveButtonMarketingInput() {
        dp.clickSaveButtonMarketingInput();
    }

    @And("^Click Marketing$")
    public void clickMarketing() {
        dp.clickMarketing();
    }

    @Then("^Rate the input brief- Marketing Brief$")
    public void rateTheInputBriefMarketingBrief() {
        dp.rateTheInputBriefMarketingBrief();
    }


}
