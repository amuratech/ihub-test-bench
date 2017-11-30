package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SeoAuditInputPage;

public class SeoAuditInputSteps {

    SeoAuditInputPage dp;

    public SeoAuditInputSteps(){dp = new SeoAuditInputPage();}

    @And("^Enter URL \"([^\"]*)\"$")
    public void enterURL(String arg0) {
        dp.enterURL(arg0);
    }

    @And("^Click on save and publish- seoaudit$")
    public void clickOnSaveAndPublishSeoaudit(){
        dp.clickOnSaveAndPublishSeoaudit();
    }

    @And("^Click Save- seoaudit$")
    public void clickSaveSeoaudit() {
        dp.clickSaveSeoaudit();
    }

    @Then("^Select requirements$")
    public void selectRequirements(){
        dp.selectRequirements();
    }

    @And("^Select URL suff$")
    public void selectURLSuff(){
        dp.selectURLSuff();
    }

    @And("^Select req suff$")
    public void selectReqSuff() {
        dp.selectReqSuff();
    }

    @And("^Click accept- seoaudit$")
    public void clickAcceptSeoaudit() {
        dp.clickAcceptSeoaudit();
    }

    @Then("^Rate input brief- seoaudit$")
    public void rateInputBriefSeoaudit() {
        dp.rateInputBriefSeoaudit();
    }



}
