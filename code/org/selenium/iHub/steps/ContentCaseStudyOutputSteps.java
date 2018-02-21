package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ContentCaseStudyOutputPage;

/**
 * Created by amuraqa on 24/1/18.
 */
public class ContentCaseStudyOutputSteps {

    ContentCaseStudyOutputPage dp;

    public ContentCaseStudyOutputSteps(){dp = new ContentCaseStudyOutputPage();}

    @Then("^Upload Case study document$")
    public void uploadCaseStudyDocument() {
        dp.uploadCaseStudyDocument();
    }

    @And("^Click 'Save' button- Content Case Study Output$")
    public void clickSaveButtonContentCaseStudyOutput() {
        dp.clickSaveButtonContentCaseStudyOutput();
    }

    @When("^Rate the output- Content Case Study$")
    public void rateTheOutputContentCaseStudy() {
        dp.rateTheOutputContentCaseStudy();
    }
}
