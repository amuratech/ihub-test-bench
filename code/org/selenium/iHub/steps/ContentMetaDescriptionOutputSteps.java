package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentMetaDescriptionOutputPage;

public class ContentMetaDescriptionOutputSteps {

    ContentMetaDescriptionOutputPage dp;

    public ContentMetaDescriptionOutputSteps(){dp = new ContentMetaDescriptionOutputPage();}

    @Then("^Enter Meta description \"([^\"]*)\"$")
    public void enterMetaDescription(String arg0) {
        dp.enterMetaDescription(arg0);
    }

    @And("^Enter Thought process \"([^\"]*)\"- Content Meta Description$")
    public void enterThoughtProcessContentMetaDescription(String arg0) {
        dp.enterThoughtProcessContentMetaDescription(arg0);
    }

    @And("^Click 'Save' button- Content Meta Description Output$")
    public void clickSaveButtonContentMetaDescriptionOutput() {
        dp.clickSaveButtonContentMetaDescriptionOutput();
    }

    @And("^Rate the output- Content Meta Description$")
    public void rateTheOutputContentMetaDescription() {
        dp.rateTheOutputContentMetaDescription();
    }


}
