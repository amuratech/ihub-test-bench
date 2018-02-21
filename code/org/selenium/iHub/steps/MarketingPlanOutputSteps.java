package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.MarketingPlanInputPage;
import org.selenium.iHub.pages.MarketingPlanOutputPage;

/**
 * Created by amuraqa on 13/2/18.
 */
public class MarketingPlanOutputSteps {
    MarketingPlanOutputPage dp;

    public MarketingPlanOutputSteps(){dp = new MarketingPlanOutputPage(); }

    @Then("^Enter 'Growth and innovation strategy' \"([^\"]*)\"$")
    public void enterGrowthAndInnovationStrategy(String arg0){
        dp.enterGrowthAndInnovationStrategy(arg0);
    }

    @And("^Enter 'Social innovation strategy' \"([^\"]*)\"$")
    public void enterSocialInnovationStrategy(String arg0){
        dp.enterSocialInnovationStrategy(arg0);
    }

    @And("^Enter 'SEO strategy' \"([^\"]*)\"$")
    public void enterSEOStrategy(String arg0) {
        dp.enterSEOStrategy(arg0);
    }

    @And("^Click 'Save' button- Marketing Plan output$")
    public void clickSaveButtonMarketingPlanOutput() {
        dp.clickSaveButtonMarketingPlanOutput();
    }

    @When("^Upload reference doc$")
    public void uploadReferenceDoc() {
        dp.uploadReferenceDoc();
    }

    @Then("^Rate the output- Marketing Plan output$")
    public void rateTheOutputMarketingPlanOutput() {
        dp.rateTheOutputMarketingPlanOutput();
    }
}



