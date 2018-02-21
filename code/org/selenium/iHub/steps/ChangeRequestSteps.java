package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ChangeRequestPage;

/**
 * Created by amuraqa on 1/12/17.
 */
public class ChangeRequestSteps {
    ChangeRequestPage dp;

    public ChangeRequestSteps(){
        dp = new ChangeRequestPage();
    }

    @When("^Selecting insufficient info for Brief$")
    public void selectingInsufficientInfoForBrief() {
        dp.selectingInsufficientInfoForBrief();
    }

    @And("^Enter the reason \"([^\"]*)\"$")
    public void enterTheReason(String arg0) {
        dp.enterTheReason(arg0);
    }

    @Then("^Request change button should be disabled$")
    public void requestChangeButtonShouldBeDisabled() {
        dp.requestChangeButtonShouldBeDisabled();
    }

    @Then("^Request change button should be enabled$")
    public void requestChangeButtonShouldBeEnabled() {
        dp.requestChangeButtonShouldBeEnabled();
    }
}
