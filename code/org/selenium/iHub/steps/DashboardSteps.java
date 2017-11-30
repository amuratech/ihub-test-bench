package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.DashboardPage;

/**
 * Created by amuraqa on 18/7/17.
 */
public class DashboardSteps {

    DashboardPage dp;

    public DashboardSteps(){dp = new DashboardPage();}


    @Then("^Click on dashboard$")
    public void clickOnDashboard(){
        dp.clickOnDashboard();
    }
}

