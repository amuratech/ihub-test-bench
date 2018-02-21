package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.MarketingPlanInputPage;

/**
 * Created by amuraqa on 13/2/18.
 */
public class MarketingPlanInputSteps {
    MarketingPlanInputPage dp;

    public MarketingPlanInputSteps(){ dp = new MarketingPlanInputPage();}

    @When("^Select Plan start date$")
    public void selectPlanStartDate() {
        dp.selectPlanStartDate();
    }

    @And("^Select Plan end date$")
    public void selectPlanEndDate() {
        dp.selectPlanEndDate();
    }

    @And("^Select SEO plan task reference$")
    public void selectSEOPlanTaskReference() {
        dp.selectSEOPlanTaskReference();
    }

    @And("^Select Social plan task reference$")
    public void selectSocialPlanTaskReference() {
        dp.selectSocialPlanTaskReference();
    }

    @And("^Select Client meeting task reference$")
    public void selectClientMeetingTaskReference() {
        dp.selectClientMeetingTaskReference();
    }

    @Then("^Click 'Save' button- Marketing Plan input$")
    public void clickSaveButtonMarketingPlanInput(){
        dp.clickSaveButtonMarketingPlanInput();
    }

    @Then("^Rate the input- Marketing Plan input$")
    public void rateTheInputMarketingPlanInput() {
        dp.rateTheInputMarketingPlanInput();
    }


}
