package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.DeliveryFeedbackInputPage;

/**
 * Created by amura on 22/3/18.
 */
public class DeliveryFeedbackInputSteps {
    
    DeliveryFeedbackInputPage dp;
    
    public DeliveryFeedbackInputSteps(){dp = new DeliveryFeedbackInputPage();}

    @When("^Click 'Submit Client Feedback' task$")
    public void clickSubmitClientFeedbackTask() {
        dp.clickSubmitClientFeedbackTask();
    }

    @And("^Enter Link to the survey form on Google forms \"([^\"]*)\"$")
    public void enterLinkToTheSurveyFormOnGoogleForms(String arg0) {
        dp.enterLinkToTheSurveyFormOnGoogleForms(arg0);
    }

    @And("^Enter Link to the survey results on Google drive \"([^\"]*)\"$")
    public void enterLinkToTheSurveyResultsOnGoogleDrive(String arg0) {
        dp.enterLinkToTheSurveyResultsOnGoogleDrive(arg0);
    }

    @And("^Select When is the survey scheduled$")
    public void selectWhenIsTheSurveyScheduled(){
        dp.selectWhenIsTheSurveyScheduled();
    }

    @And("^Click 'Save' button- Feedback input$")
    public void clickSaveButtonFeedbackInput() {
        dp.clickSaveButtonFeedbackInput();
    }

    @Then("^Rate the input brief- Delivery Feedback$")
    public void rateTheInputBriefDeliveryFeedback() {
        dp.rateTheInputBriefDeliveryFeedback();
    }

}
