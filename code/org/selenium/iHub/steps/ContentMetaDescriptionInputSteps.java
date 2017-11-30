package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentMetaDescriptionInputPage;

public class ContentMetaDescriptionInputSteps {

    ContentMetaDescriptionInputPage dp;

    public ContentMetaDescriptionInputSteps(){dp = new ContentMetaDescriptionInputPage();
    }

    @And("^Rate the brief- Content Meta Description$")
    public void rateTheBriefContentMetaDescription() {
        dp.rateTheBriefContentMetaDescription();
    }


    @And("^Enter meta title \"([^\"]*)\"- Content Meta Description$")
    public void enterMetaTitleContentMetaDescription(String arg0) {
        dp.enterMetaTitleContentMetaDescription(arg0);
    }

    @And("^Enter URL \"([^\"]*)\"- Content Meta Description$")
    public void enterURLContentMetaDescription(String arg0){
        dp.enterURLContentMetaDescription(arg0);
    }

    @And("^Enter Keywords$")
    public void enterKeywords() {
        dp.enterKeywords();
    }

    @Then("^Click 'Save' button- Content Meta Description$")
    public void clickSaveButtonContentMetaDescription() {
        dp.clickSaveButtonContentMetaDescription();
    }
}
