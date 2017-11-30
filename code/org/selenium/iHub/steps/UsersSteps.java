package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.UsersPage;

/**
 * Created by amuraqa on 18/7/17.
 */
public class UsersSteps {

    UsersPage up;

    public UsersSteps(){up = new UsersPage();}

    @Then("^Click on users$")
    public void clickOnUsers(){
        up.clickOnUsers();
    }

    @Then("^Select the action show$")
    public void selectTheActionShow(){
        up.selectTheActionShow();
    }

    @Then("^Click on Edit tab$")
    public void clickOnEditTab() {
        up.clickOnEditTab();
    }

    @And("^Edit email field$")
    public void editEmailField() {
        up.editEmailField();
    }

    @And("^Click on save$")
    public void clickOnSave() {
        up.clickOnSave();
    }

}
