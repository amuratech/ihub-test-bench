package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.DeliveryFeedbackOutputPage;

/**
 * Created by amura on 22/3/18.
 */
public class DeliveryFeedbackOutputSteps {

    DeliveryFeedbackOutputPage dp;

    public DeliveryFeedbackOutputSteps(){dp = new DeliveryFeedbackOutputPage();}
    
    @Then("^Enter Total clients covered in the survey \"([^\"]*)\"$")
    public void enterTotalClientsCoveredInTheSurvey(String arg0) {
        dp.enterTotalClientsCoveredInTheSurvey(arg0);
    }

    @And("^Enter Total clients who respond to this survey \"([^\"]*)\"$")
    public void enterTotalClientsWhoRespondToThisSurvey(String arg0) {
        dp.enterTotalClientsWhoRespondToThisSurvey(arg0);
    }

    @And("^Average rating across all clients$")
    public void averageRatingAcrossAllClients(){
        dp.averageRatingAcrossAllClients();
    }

    @And("^Click 'Save' button- Delivery Feedback output$")
    public void clickSaveButtonDeliveryFeedbackOutput(){
        dp.clickSaveButtonDeliveryFeedbackOutput();
    }

    @And("^Mention specific concerns or comments \"([^\"]*)\"$")
    public void mentionSpecificConcernsOrComments(String arg0){
        dp.mentionSpecificConcernsOrComments(arg0);
    }

    @And("^Rate the output- Delivery Feedback output$")
    public void rateTheOutputDeliveryFeedbackOutput() {
        dp.rateTheOutputDeliveryFeedbackOutput();
    }

    @When("^Upload reference document- Delivery Feedback$")
    public void uploadReferenceDocumentDeliveryFeedback() {
        dp.uploadReferenceDocumentDeliveryFeedback();

    }
}
