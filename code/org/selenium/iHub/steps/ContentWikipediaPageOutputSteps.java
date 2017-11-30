package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentWikipediaPageOutputPage;

/**
 * Created by amuraqa on 23/10/17.
 */
public class ContentWikipediaPageOutputSteps {

    ContentWikipediaPageOutputPage dp;

    public ContentWikipediaPageOutputSteps(){dp = new ContentWikipediaPageOutputPage();}

    @Then("^Enter Title \"([^\"]*)\"- Content$")
    public void enterTitleContent(String arg0) {
        dp.enterTitleContent(arg0);
    }

    @And("^Upload the content document$")
    public void uploadTheContentDocument() {
        dp.uploadTheContentDocument();
    }

    @Then("^Click 'Save' button- Content Wikipedia Output$")
    public void clickSaveButtonContentWikipediaOutput() {
        dp.clickSaveButtonContentWikipediaOutput();
    }

    @And("^Enter 'Has the copywriter researched well' \"([^\"]*)\"- Content Wikipedia$")
    public void enterHasTheCopywriterResearchedWellContentWikipedia(String arg0){
        dp.enterHasTheCopywriterResearchedWellContentWikipedia(arg0);
    }

    @And("^Enter 'Has the copywriter included enough references and citations' \"([^\"]*)\"$")
    public void enterHasTheCopywriterIncludedEnoughReferencesAndCitations(String arg0){
        dp.enterHasTheCopywriterIncludedEnoughReferencesAndCitations(arg0);
    }

    @Then("^Rate the output- Content Wikipedia Page$")
    public void rateTheOutputContentWikipediaPage() {
        dp.rateTheOutputContentWikipediaPage();
    }
}
