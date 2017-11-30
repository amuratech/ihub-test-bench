package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SEOSubmissionOutputPage;

public class SEOSubmissionOutputSteps {

    SEOSubmissionOutputPage dp;

    public SEOSubmissionOutputSteps(){dp = new SEOSubmissionOutputPage();}

    @And("^Enter Keywords of focus$")
    public void enterKeywordsOfFocus(){
        dp.enterKeywordsOfFocus();
    }

    @Then("^Enter Submission URL \"([^\"]*)\"$")
    public void enterSubmissionURL(String arg0) {
        dp.enterSubmissionURL(arg0);
    }

    @Then("^Click 'Save' button- SEO Submission Output$")
    public void clickSaveButtonSEOSubmissionOutput(){
        dp.clickSaveButtonSEOSubmissionOutput();
    }

    @Then("^Enter 'Have the correct keywords and tags posted along with the main submission' \"([^\"]*)\"$")
    public void enterHaveTheCorrectKeywordsAndTagsPostedAlongWithTheMainSubmission(String arg0) {
        dp.enterHaveTheCorrectKeywordsAndTagsPostedAlongWithTheMainSubmission(arg0);
    }

    @And("^Rate the output- SEO Submission$")
    public void rateTheOutputSEOSubmission(){
        dp.rateTheOutputSEOSubmission();
    }
}
