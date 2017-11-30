package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.WebCustomizedAddPage;

public class WebCustomizedInputSteps {

    WebCustomizedAddPage dp;

    public WebCustomizedInputSteps(){dp = new WebCustomizedAddPage();}

    @Then("^Enter name- input webcustomized$")
    public void enterNameInputWebcustomized() {
        dp.enterNameInputWebcustomized();
    }

    @And("^Enter brief- input webcustomized$")
    public void enterBriefInputWebcustomized(){
        dp.enterBriefInputWebcustomized();
    }

    @And("^Enter requirement type webcustomized$")
    public void enterRequirementTypeWebcustomized() {
        dp.enterRequirementTypeWebcustomized();
    }

    @And("^Upload requirement doc webcustomized$")
    public void uploadRequirementDocWebcustomized() {
            dp.uploadRequirementDocWebcustomized();
    }

    @Then("^Click save and publish- webcustomized$")
    public void clickSaveAndPublishWebcustomized(){
            dp.clickSaveAndPublishWebcustomized();
    }

    @And("^Select requirement type- webcustomized")
    public void selectRequirementTypeWebmaintenance() {
        dp.selectRequirementTypeWebmaintenance();
    }

    @And("^Select requirement doc- webcustomized")
    public void selectRequirementDocWebmaintenance() {
        dp.selectRequirementDocWebmaintenance();
    }

    @Then("^Rate the brief- webcustomized$")
    public void rateTheBriefWebcustomized() {
        dp.rateTheBriefWebcustomized();
    }

    @And("^Click accept- webcustomized$")
    public void clickAcceptWebcustomized() {
        dp.clickAcceptWebcustomized();
    }

}
