package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import org.selenium.iHub.pages.ContentWebsiteOutputPage;

/**
 * Created by amuraqa on 30/10/17.
 */
public class ContentWebsiteOutputSteps {

    ContentWebsiteOutputPage dp;

    public ContentWebsiteOutputSteps(){dp = new ContentWebsiteOutputPage();}

    @And("^Upload Content website doc$")
    public void uploadContentWebsiteDoc() {
        dp.uploadContentWebsiteDoc();
    }

    @And("^Click 'Save' button- Content Website Output$")
    public void clickSaveButtonContentWebsiteOutput() {
        dp.clickSaveButtonContentWebsiteOutput();
    }

    @And("^Rate the output- Content Website$")
    public void rateTheOutputContentWebsite() {
        dp.rateTheOutputContentWebsite();
    }
}
