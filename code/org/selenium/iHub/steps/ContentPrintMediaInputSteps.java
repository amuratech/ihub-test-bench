package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentPrintMediaInputPage;

/**
 * Created by amuraqa on 23/10/17.
 */
public class ContentPrintMediaInputSteps {

    ContentPrintMediaInputPage dp;

    public ContentPrintMediaInputSteps(){dp = new ContentPrintMediaInputPage();}

    @Then("^Select Tonality- Content Print Media$")
    public void selectTonalityContentPrintMedia() {
        dp.selectTonalityContentPrintMedia();
    }

    @And("^Enter USPs$")
    public void enterUSPs(){
        dp.enterUSPs();
    }

    @And("^Click 'Save' button- Content Print Media Input$")
    public void clickSaveButtonContentPrintMediaInput(){
        dp.clickSaveButtonContentPrintMediaInput();
    }

    @And("^Rate the input brief- Content Print Media$")
    public void rateTheInputBriefContentPrintMedia() {
        dp.rateTheInputBriefContentPrintMedia();
    }


}
