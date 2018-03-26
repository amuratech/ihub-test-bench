package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ClientApprovalPage;

/**
 * Created by amuraqa on 9/1/18.
 */
public class ClientApprovalSteps {

    ClientApprovalPage dp;

    public ClientApprovalSteps() {
        dp = new ClientApprovalPage();
    }

    @Then("^Click on task sidebar- Client$")
    public void clickOnTaskSidebarClient() {
        dp.clickOnTaskSidebarClient();
    }

    @When("^Click on All$")
    public void clickOnAll() {
        dp.clickOnAll();
    }

    @When("^Click on Details$")
    public void clickOnDetails() {
        dp.clickOnDetails();
    }

    @And("^Click on design- Client$")
    public void clickOnDesignClient() {
        dp.clickOnDesignClient();
    }


}