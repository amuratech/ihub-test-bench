package org.selenium.iHub.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.AdminUserSignOutPage;

public class AdminUserSignOutSteps {

    AdminUserSignOutPage dp;

    public AdminUserSignOutSteps(){dp = new AdminUserSignOutPage();}

    @Then("^Click on admin user tab$")
    public void clickOnAdminUserTab() {
        dp.clickOnAdminUserTab();
    }

    @And("^Click admin sign out tab$")
    public void clickAdminSignOutTab() {
        dp.clickAdminSignOutTab();
    }
}
