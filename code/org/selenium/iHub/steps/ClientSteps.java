package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ClientPage;

/**
 * Created by amuraqa on 18/7/17.
 */
public class ClientSteps {

    ClientPage cp;

    public ClientSteps() {
        cp = new ClientPage();
    }

    @Then("^Click on clients$")
    public void clickOnClients() {
        cp.clickOnClients();

    }

    @And("^Filter with client name \"([^\"]*)\"$")
    public void filterWithClientName(String arg0) {
        cp.filterWithClientName(arg0);
    }

    @And("^Click apply button$")
    public void clickApplyButton() {
        cp.clickApplyButton();
    }

    @Then("^Select the action details$")
    public void selectTheActionDetails() {
        cp.selectTheActionDetails();
    }

    @Then("^Click on design brief from side panel$")
    public void clickOnDesignBriefFromSidePanel() {
        cp.clickOnDesignBriefFromSidePanel();
    }


    }
