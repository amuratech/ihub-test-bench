package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentWikipediaPageInputPage;

/**
 * Created by amuraqa on 23/10/17.
 */
public class ContentWikipediaPageInputSteps {

    ContentWikipediaPageInputPage dp;

    public ContentWikipediaPageInputSteps(){dp = new ContentWikipediaPageInputPage();}

    @Then("^Enter Website link \"([^\"]*)\"$")
    public void enterWebsiteLink(String arg0){
        dp.enterWebsiteLink(arg0);
    }

    @And("^Enter Reference links- Content Wikipedia Page$")
    public void enterReferenceLinksContentWikipediaPage() {
        dp.enterReferenceLinksContentWikipediaPage();
    }

    @And("^Click 'Save' button- Content Wikipedia Page$")
    public void clickSaveButtonContentWikipediaPage() {
        dp.clickSaveButtonContentWikipediaPage();
    }

    @And("^Rate the brief- Content Wikipedia Page$")
    public void rateTheBriefContentWikipediaPage() {
        dp.rateTheBriefContentWikipediaPage();
    }


}
