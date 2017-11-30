package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.MarketingBriefOutputPage;

public class MarketingBriefOutputSteps {

    MarketingBriefOutputPage dp;

    public MarketingBriefOutputSteps(){dp = new MarketingBriefOutputPage();}

    @And("^Enter Offers$")
    public void enterOffers() {
        dp.enterOffers();
    }

    @And("^Enter Communication guidelines$")
    public void enterCommunicationGuidelines() {
        dp.enterCommunicationGuidelines();
    }

    @And("^Enter Budget \"([^\"]*)\"- Marketing Brief$")
    public void enterBudgetMarketingBrief(String arg0) {
        dp.enterBudgetMarketingBrief(arg0);
    }

    @Then("^Select a competitor$")
    public void selectACompetitor() {
        dp.selectACompetitor();
    }

    @And("^Select a project$")
    public void selectAProject() {
        dp.selectAProject();
    }

    @Then("^Click 'Save' button- Marketing Output$")
    public void clickSaveButtonMarketingOutput() {
        dp.clickSaveButtonMarketingOutput();
    }

    @Then("^Rate the output brief- Marketing Brief$")
    public void rateTheOutputBriefMarketingBrief() {
        dp.rateTheOutputBriefMarketingBrief();
    }


}
