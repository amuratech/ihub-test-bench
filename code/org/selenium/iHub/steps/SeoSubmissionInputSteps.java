package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SeoSubmissionInputPage;

public class SeoSubmissionInputSteps {

    SeoSubmissionInputPage dp;

    public SeoSubmissionInputSteps(){dp = new SeoSubmissionInputPage();}

    @Then("^Select type$")
    public void selectType() {
        dp.selectType();
    }

    @And("^Select an input task$")
    public void selectAnInputTask() {
        dp.selectAnInputTask();
    }

    @And("^Click on save and publish- seosubmission$")
    public void clickOnSaveAndPublishSeosubmission() {
        dp.clickOnSaveAndPublishSeosubmission();
    }

    @And("^Click Save- seosubmission$")
    public void clickSaveSeosubmission() {
        dp.clickSaveSeosubmission();
    }

    @Then("^Upload Content reference doc$")
    public void uploadContentReferenceDoc() {
        dp.uploadContentReferenceDoc();
    }

    @Then("^Upload Reference doc$")
    public void uploadReferenceDoc() {
        dp.uploadReferenceDoc();
    }

    @And("^Rate the input- SEO Submission Input$")
    public void rateTheInputSEOSubmissionInput() {
        dp.rateTheInputSEOSubmissionInput();
    }


}
