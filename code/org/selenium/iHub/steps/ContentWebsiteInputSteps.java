package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentWebsiteInputPage;

/**
 * Created by amuraqa on 30/10/17.
 */
public class ContentWebsiteInputSteps {

    ContentWebsiteInputPage dp;

    public ContentWebsiteInputSteps(){dp = new ContentWebsiteInputPage();}

    @Then("^Select Tags- Content$")
    public void selectTagsContent() {
        dp.selectTagsContent();
    }

    @And("^Select Tonality- Content Website$")
    public void selectTonalityContentWebsite() {
        dp.selectTonalityContentWebsite();
    }

    @And("^Enter USPs- Content Website$")
    public void enterUSPsContentWebsite() {
        dp.enterUSPsContentWebsite();
    }

    @And("^Click 'Save' button- Content Website$")
    public void clickSaveButtonContentWebsite() {
        dp.clickSaveButtonContentWebsite();
    }

    @Then("^Rate the input brief- Content Website$")
    public void rateTheInputBriefContentWebsite() {
        dp.rateTheInputBriefContentWebsite();
    }


}
