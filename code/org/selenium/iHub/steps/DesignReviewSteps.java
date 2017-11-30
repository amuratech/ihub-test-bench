package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.DesignReviewPage;

/**
 * Created by amuraqa on 21/7/17.
 */
public class DesignReviewSteps {

    DesignReviewPage dp;

    public DesignReviewSteps(){dp = new DesignReviewPage();}

    @Then("^Select action review$")
    public void selectActionReview(){
        dp.selectActionReview();
    }

    @Then("^Select name with sufficient info$")
    public void selectNameWithSufficientInfo() {
        dp.selectNameWithSufficientInfo();
    }

    @And("^Description with insufficient info$")
    public void descriptionWithInsufficientInfo(){
        dp.descriptionWithInsufficientInfo();
    }

    @Then("^Due date with sufficient$")
    public void dueDateWithSufficient() {
        dp.dueDateWithSufficient();
    }

    @And("^Purposes with sufficient info$")
    public void purposesWithSufficientInfo() {
        dp.purposesWithSufficientInfo();
    }

    @And("^Time slot$")
    public void timeSlot() {
        dp.timeSlot();
    }

    @And("^Product$")
    public void product() {
        dp.product();
    }

    @And("^Type with sufficient info$")
    public void typeWithSufficientInfo() {
        dp.typeWithSufficientInfo();
    }

    @And("^Devices with info$")
    public void devicesWithInfo() {
        dp.devicesWithInfo();
    }

    @And("^Reference info$")
    public void referenceInfo() {
        dp.referenceInfo();
    }

    @And("^CTA info$")
    public void ctaInfo() {
        dp.ctaInfo();
    }

    @And("^Usps info$")
    public void uspsInfo() {
        dp.uspsInfo();
    }

    @And("^Tags info$")
    public void tagsInfo() {
        dp.tagsInfo();
    }

    @And("^Sitemap info$")
    public void sitemapInfo() {
        dp.sitemapInfo();
    }

    @And("^Func info$")
    public void funcInfo() {
        dp.funcInfo();
    }

    @And("^Target info$")
    public void targetInfo() {
        dp.targetInfo();
    }

    @And("^Reference images$")
    public void referenceImages(){
        dp.referenceImages();
    }

    @And("^Rate$")
    public void rate() {
        dp.rate();
    }

    @And("^Accept$")
    public void accept() {
        dp.accept();
    }

    @And("^Change request$")
    public void changeRequest() {
        dp.changeRequest();
    }

}
