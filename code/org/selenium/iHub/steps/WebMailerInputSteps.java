package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.WebMailerAddPage;

public class WebMailerInputSteps {

    WebMailerAddPage dp;

    public WebMailerInputSteps(){dp = new WebMailerAddPage();}

    @And("^Enter destination URL \"([^\"]*)\"$")
    public void enterDestinationURL(String arg0) {
        dp.enterDestinationURL(arg0);
    }

    @And("^Upload content doc$")
    public void uploadContentDoc() {
        dp.uploadContentDoc();
    }

    @And("^Upload design doc$")
    public void uploadDesignDoc(){
        dp.uploadDesignDoc();
    }

    @And("^Click save- web$")
    public void clickSaveWeb() {
        dp.clickSaveWeb();
    }

    @And("^Click save publish- web$")
    public void clickSavePublishWeb() {
        dp.clickSavePublishWeb();
    }

    @Then("^Select status- webmailer$")
    public void selectStatusWebmailer() {
        dp.selectStatusWebmailer();
    }

    @And("^Click update webmailer$")
    public void clickUpdateWebmailer() {
        dp.clickUpdateWebmailer();
    }

    @And("^Select radio content doc$")
    public void selectRadioContentDoc() {
        dp.selectRadioContentDoc();
    }

    @And("^Select radio design doc$")
    public void selectRadioDesignDoc() {
        dp.selectRadioDesignDoc();
    }

    @And("^Select radio image slices$")
    public void selectRadioImageSlices() {
        dp.selectRadioImageSlices();
    }


    @Then("^Enter 'content emailer' reference task$")
    public void enterContentEmailerReferenceTask() {
        dp.enterContentEmailerReferenceTask();
    }

    @And("^Enter 'design emailer' reference task$")
    public void enterDesignEmailerReferenceTask(){
        dp.enterDesignEmailerReferenceTask();
    }


    @And("^Click accordion- URL$")
    public void clickAccordionURL() {
        dp.clickAccordionURL();
    }

    @And("^Select content emailer suff info$")
    public void selectContentEmailerSuffInfo() {
        dp.selectContentEmailerSuffInfo();
    }

    @And("^Select design emailer suff info$")
    public void selectDesignEmailerSuffInfo() {
        dp.selectDesignEmailerSuffInfo();
    }

    @And("^Select Emailer content task reference$")
    public void selectEmailerContentTaskReference() {
        dp.selectEmailerContentTaskReference();
    }

    @And("^Select Emailer design task reference$")
    public void selectEmailerDesignTaskReference(){
        dp.selectEmailerDesignTaskReference();
    }

    @Then("^Rate the input brief- Web Mailer$")
    public void rateTheInputBriefWebMailer() {
        dp.rateTheInputBriefWebMailer();
    }
}
