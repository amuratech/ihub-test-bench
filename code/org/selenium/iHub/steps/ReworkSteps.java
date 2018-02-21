package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ReworkPage;

/**
 * Created by amuraqa on 1/12/17.
 */
public class ReworkSteps {
    ReworkPage dp;

    public ReworkSteps(){dp = new ReworkPage();}

    @Then("^Rework button should be enabled$")
    public void reworkButtonShouldBeEnabled() {
        dp.reworkButtonShouldBeEnabled();
    }

    @Then("^Rework button should be disabled$")
    public void reworkButtonShouldBeDisabled(){
        dp.reworkButtonShouldBeDisabled();
    }


}
