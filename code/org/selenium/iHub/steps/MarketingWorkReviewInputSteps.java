package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.MarketingWorkReviewInputPage;

/**
 * Created by amuraqa on 2/2/18.
 */
public class MarketingWorkReviewInputSteps {

    MarketingWorkReviewInputPage dp;

    public MarketingWorkReviewInputSteps(){dp = new MarketingWorkReviewInputPage();}

    @When("^Select Review start date$")
    public void selectReviewStartDate() {
        dp.selectReviewStartDate();
    }

    @And("^Select Review end date$")
    public void selectReviewEndDate() {
        dp.selectReviewEndDate();
    }

    @Then("^Click 'Save' button- Marketing Work Review input$")
    public void clickSaveButtonMarketingWorkReviewInput() {
        dp.clickSaveButtonMarketingWorkReviewInput();
    }

    @And("^Select Attendees- Marketing Work Review$")
    public void selectAttendeesMarketingWorkReview() {
        dp.selectAttendeesMarketingWorkReview();
    }

    @And("^Enter Concern from last review \"([^\"]*)\"$")
    public void enterConcernFromLastReview(String arg0) {
        dp.enterConcernFromLastReview(arg0);
    }

    @Then("^Rate the input- Marketing Work Review$")
    public void rateTheInputMarketingWorkReview(){
        dp.rateTheInputMarketingWorkReview();
    }


}
