package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.NormalUserSignOutPage;

public class NormalUserSignOutSteps {

    NormalUserSignOutPage dp;

    public NormalUserSignOutSteps(){dp = new NormalUserSignOutPage();}

    @Then("^Click on user tab$")
    public void clickOnUserTab() {
        dp.clickOnUserTab();
    }

    @And("^Click sign out tab$")
    public void clickSignOutTab() {
        dp.clickSignOutTab();
    }

    @Then("^Click user name$")
    public void clickUserName(){
        dp.clickUserName();
    }

    @And("^Click 'Sign out'$")
    public void clickSignOut(){
        dp.clickSignOut();
    }
}
