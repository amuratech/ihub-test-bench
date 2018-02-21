package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SecondaryReviewPage;

/**
 * Created by amuraqa on 5/1/18.
 */
public class SecondaryReviewSteps {

    SecondaryReviewPage dp;

    public SecondaryReviewSteps(){dp = new SecondaryReviewPage();}

    @And("^Click 'Send for secondary review' button$")
    public void clickSendForSecondaryReviewButton() {
        dp.clickSendForSecondaryReviewButton();
    }

    @Then("^Click 'Approve or Reject the output'$")
    public void clickApproveOrRejectTheOutput(){
        dp.clickApproveOrRejectTheOutput();
    }

    @And("^Enter Comments \"([^\"]*)\"$")
    public void enterComments(String arg0){
        dp.enterComments(arg0);
    }

    @Then("^Click 'Accept and Mark Delivered' button$")
    public void clickAcceptAndMarkDeliveredButton(){
        dp.clickAcceptAndMarkDeliveredButton();
    }

    @Then("^Click 'Send to 2nd secondary reviewer'$")
    public void clickSendTo2NdSecondaryReviewer() {
        dp.clickSendTo2NdSecondaryReviewer();
    }

    @Then("^Click 'Send for client approval'$")
    public void clickSendForClientApproval(){
        dp.clickSendForClientApproval();
    }

    @Then("^Select the user to add as SOR$")
    public void selectTheUserToAddAsSOR() {
        dp.selectTheUserToAddAsSOR();
    }

    @And("^Select the order to be assigned$")
    public void selectTheOrderToBeAssigned() {
        dp.selectTheOrderToBeAssigned();
    }

    @Then("^SOR and the order should be assigned$")
    public void sorAndTheOrderShouldBeAssigned() {
        dp.sorAndTheOrderShouldBeAssigned();
    }
}
