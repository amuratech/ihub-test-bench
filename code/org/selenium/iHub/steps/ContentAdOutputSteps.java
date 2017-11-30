package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentAdOutputPage;

public class ContentAdOutputSteps {

    ContentAdOutputPage dp;

    public ContentAdOutputSteps(){dp = new ContentAdOutputPage();}

    @Then("^Click start working button- content ad$")
    public void clickStartWorkingButtonContentAd() {
        dp.clickStartWorkingButtonContentAd();
    }

    @And("^Enter thought process \"([^\"]*)\"- content ad$")
    public void enterThoughtProcessContentAd(String arg0) {
        dp.enterThoughtProcessContentAd(arg0);
    }

    @And("^Upload ad content doc$")
    public void uploadAdContentDoc() {
        dp.uploadAdContentDoc();
    }

    @Then("^Click save button- content$")
    public void clickSaveButtonContent() {
        dp.clickSaveButtonContent();
    }

    @And("^Click update task button- content$")
    public void clickUpdateTaskButtonContent() {
        dp.clickUpdateTaskButtonContent();
    }

    @Then("^Select ad content doc suff$")
    public void selectAdContentDocSuff() {
        dp.selectAdContentDocSuff();
    }

    @And("^Select thought process suff- content ad$")
    public void selectThoughtProcessSuffContentAd() {
        dp.selectThoughtProcessSuffContentAd();
    }

    @Then("^Rate the output- content ad$")
    public void rateTheOutputContentAd(){
        dp.rateTheOutputContentAd();
    }

    @And("^Click deliver- content ad$")
    public void clickDeliverContentAd() {
        dp.clickDeliverContentAd();
    }

    @And("^Click rework- content ad$")
    public void clickReworkContentAd() {
        dp.clickReworkContentAd();
    }


    @And("^Review the output- Content Ad Communication$")
    public void reviewTheOutputContentAdCommunication() {
        dp.reviewTheOutputContentAdCommunication();
    }
}
