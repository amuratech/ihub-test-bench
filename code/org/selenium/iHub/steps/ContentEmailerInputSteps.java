package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentEmailerInputPage;

public class ContentEmailerInputSteps {

    ContentEmailerInputPage dp;

    public ContentEmailerInputSteps(){dp = new ContentEmailerInputPage();}

    @Then("^Click 'Save' button- Content Emailer$")
    public void clickSaveButtonContentEmailer() {
        dp.clickSaveButtonContentEmailer();
    }

    @And("^Rate the brief- Content Emailer$")
    public void rateTheBriefContentEmailer() {
        dp.rateTheBriefContentEmailer();
    }

    @And("^Select Tonality- Content Emailer$")
    public void selectTonalityContentEmailer(){
        dp.selectTonalityContentEmailer();
    }
}
