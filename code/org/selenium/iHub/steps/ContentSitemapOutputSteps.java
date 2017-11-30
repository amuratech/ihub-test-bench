package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentSitemapOutputPage;

/**
 * Created by amuraqa on 23/10/17.
 */
public class ContentSitemapOutputSteps {

    ContentSitemapOutputPage dp;

    public ContentSitemapOutputSteps(){dp = new ContentSitemapOutputPage();}

    @And("^Upload detailed sitemap doc$")
    public void uploadDetailedSitemapDoc(){
        dp.uploadDetailedSitemapDoc();
    }

    @And("^Click 'Save' button- Content Sitemap Output$")
    public void clickSaveButtonContentSitemapOutput(){
        dp.clickSaveButtonContentSitemapOutput();
    }

    @Then("^Enter 'Does the content cater to given TG' \"([^\"]*)\"- Content Sitemap$")
    public void enterDoesTheContentCaterToGivenTGContentSitemap(String arg0) {
        dp.enterDoesTheContentCaterToGivenTGContentSitemap(arg0);
    }

    @And("^Enter 'Has the brief been followed' \"([^\"]*)\"- Content Sitemap$")
    public void enterHasTheBriefBeenFollowedContentSitemap(String arg0) {
        dp.enterHasTheBriefBeenFollowedContentSitemap(arg0);
    }

    @Then("^Rate the output- Content Sitemap$")
    public void rateTheOutputContentSitemap() {
        dp.rateTheOutputContentSitemap();
    }
}
