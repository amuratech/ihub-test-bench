package org.selenium.iHub.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ClientBillingDetailsPage;

/**
 * Created by amura on 16/3/18.
 */
public class ClientBillingDetailsSteps {

    ClientBillingDetailsPage dp;

    public ClientBillingDetailsSteps(){dp = new ClientBillingDetailsPage();}

    @When("^Select 'Add Billing details'$")
    public void selectTheBillingDetails() {
        dp.selectTheBillingDetails();
    }

    @Then("^Enter Name for billing details \"([^\"]*)\"$")
    public void enterNameForBillingDetails(String arg0) {
        dp.enterNameForBillingDetaails(arg0);
    }

    @And("^Enter Phone for billing details \"([^\"]*)\"$")
    public void enterPhoneForBillingDetails(String arg0){
        dp.enterPhoneForBillingDetails(arg0);
    }

    @And("^Click 'Save' button- Billing details$")
    public void clickSaveButtonBillingDetails() {
        dp.clickSaveButtonBillingDetails();
    }

    @And("^Enter Email for billing details \"([^\"]*)\"$")
    public void enterEmailForBillingDetails(String arg0){
        dp.enterEmailForBillingDetails(arg0);
    }
}
