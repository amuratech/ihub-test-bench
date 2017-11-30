package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SeoAuditOutputPage;
import org.selenium.iHub.utitlities.UIElement;

public class SeoAuditOutputSteps {

    SeoAuditOutputPage dp;

    public SeoAuditOutputSteps() {
        dp = new SeoAuditOutputPage();
    }


    @And("^Click start working button- seo$")
    public void clickStartWorkingButtonSeo() {
        dp.clickStartWorkingButtonSeo();
    }

    @And("^Upload audit doc$")
    public void uploadAuditDoc() {
        dp.uploadAuditDoc();
    }

    @And("^Click save- seoaudit$")
    public void clickSaveSeoaudit() {
        dp.clickSaveSeoaudit();
    }

    @Then("^Select audit doc suff$")
    public void selectAuditDocSuff() {
        dp.selectAuditDocSuff();
    }

    @And("^Rate the output- seoaudit$")
    public void rateTheOutputSeoaudit() {
        dp.rateTheOutputSeoaudit();
    }

    @Then("^Click deliver- seoaudit$")
    public void clickDeliverSeoaudit() {
        dp.clickDeliverSeoaudit();
    }

    @Then("^Select thought process suff- seo$")
    public void selectThoughtProcessSuffSeo() {
        dp.selectThoughtProcessSuffSeo();
    }

    @And("^Click rework button- seo$")
    public void clickReworkButtonSeo() {
        dp.clickReworkButtonSeo();
    }
}
