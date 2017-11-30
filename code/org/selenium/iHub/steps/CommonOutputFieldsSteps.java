package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.CommonOutputFieldsPage;

public class CommonOutputFieldsSteps {

    CommonOutputFieldsPage dp;

    public CommonOutputFieldsSteps(){dp = new CommonOutputFieldsPage();}

    @And("^Click 'Add your output' link$")
    public void clickAddYourOutputLink() {
        dp.clickAddYourOutputLink();
    }

    @Then("^Click 'Edit your output' link$")
    public void clickEditYourOutputLink(){
        dp.clickEditYourOutputLink();
    }
}
