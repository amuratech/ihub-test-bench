package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ApprovedAndReadyPage;

/**
 * Created by amuraqa on 23/11/17.
 */
public class ApprovedAndReadySteps {

    ApprovedAndReadyPage dp;

   public  ApprovedAndReadySteps(){
        dp = new ApprovedAndReadyPage();
    }

    @And("^Click 'Mark as brief approved'$")
    public void clickMarkAsBriefApproved(){
        dp.clickMarkAsBriefApproved();
    }

    @And("^Click 'Mark as plan approved'$")
    public void clickMarkAsPlanApproved() {
        dp.clickMarkAsPlanApproved();
    }

    @And("^Click 'Mark invoice raised'$")
    public void clickMarkInvoiceRaised() {
        dp.clickMarkInvoiceRaised();
    }

    @And("^Click 'Money received' link$")
    public void clickMoneyReceivedLink(){
        dp.clickMoneyReceivedLink();
    }

    @And("^Click 'Mark as communication approved'$")
    public void clickMarkAsCommunicationApproved(){
        dp.clickMarkAsCommunicationApproved();
    }

    @And("^Click 'Mark as design approved'$")
    public void clickMarkAsDesignApproved() {
        dp.clickMarkAsDesignApproved();
    }

    @And("^Click 'Mark as client approved'$")
    public void clickMarkAsClientApproved() {
        dp.clickMarkAsClientApproved();
    }

    @And("^Click 'Mark as ready to go live'$")
    public void clickMarkAsReadyToGoLive() {
        dp.clickMarkAsReadyToGoLive();
    }
}
