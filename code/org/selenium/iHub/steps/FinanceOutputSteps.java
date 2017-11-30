package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.FinanceOutputPage;

public class FinanceOutputSteps {

    FinanceOutputPage dp;

    public FinanceOutputSteps(){dp = new FinanceOutputPage();}

    @When("^Click 'Add payment details'$")
    public void clickAddPaymentDetails() {
        dp.clickAddPaymentDetails();
    }

    @And("^Enter Payment method \"([^\"]*)\"$")
    public void enterPaymentMethod(String arg0) {
        dp.enterPaymentMethod(arg0);
    }

    @And("^Enter Usable budget \"([^\"]*)\"$")
    public void enterUsableBudget(String arg0){
        dp.enterUsableBudget(arg0);
    }

    @And("^Enter Instrument number \"([^\"]*)\"$")
    public void enterInstrumentNumber(String arg0) {
        dp.enterInstrumentNumber(arg0);
    }

    @And("^Enter Received on$")
    public void enterReceivedOn() {
        dp.enterReceivedOn();
    }

    @Then("^Click 'Save' button- Finance$")
    public void clickSaveButtonFinance() {
        dp.clickSaveButtonFinance();
    }

}
