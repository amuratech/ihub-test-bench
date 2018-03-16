package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentAdInputPage;

public class ContentAdInputSteps {

    ContentAdInputPage dp;

    public ContentAdInputSteps(){dp = new ContentAdInputPage();}

    @And("^Select related task$")
    public void selectRelatedTask(){
        dp.selectRelatedTask();
    }

    @Then("^Save and add content brief$")
    public void saveAndAddContentBrief() {
        dp.saveAndAddContentBrief();
    }

    @Then("^Enter usps$")
    public void enterUsps() {
        dp.enterUsps();
    }

    @And("^Enter offer$")
    public void enterOffer() {
        dp.enterOffer();
    }

    @And("^Enter client project$")
    public void enterClientProject() {
        dp.enterClientProject();
    }

    @And("^Add tags$")
    public void addTags() {
        dp.addTags();
    }

    @And("^Enter who are you trying to reach$")
    public void enterWhoAreYouTryingToReach() {
        dp.enterWhoAreYouTryingToReach();
    }

    @And("^Select tg to do- content ad$")
    public void selectTgToDoContentAd() {
        dp.selectTgToDoContentAd();
    }

    @Then("^Click save button- content ad input$")
    public void clickSaveButtonContentAdInput() {
        dp.clickSaveButtonContentAdInput();
    }

    @Then("^Change the status to 'Publish'$")
    public void changeTheStatusToPublish() {
        dp.changeTheStatusToPublish();
    }

    @And("^Click update task to 'Publish'$")
    public void clickUpdateTaskToPublish() {
        dp.clickUpdateTaskToPublish();
    }

    @Then("^Click save and publish button- content ad input$")
    public void clickSaveAndPublishButtonContentAdInput() {
        dp.clickSaveAndPublishButtonContentAdInput();
    }


    @And("^Select usps suff$")
    public void selectUspsSuff() {
        dp.selectUspsSuff();
    }

    @And("^Select offers suff$")
    public void selectOffersSuff() {
        dp.selectOffersSuff();
    }

    @And("^Select tags suff$")
    public void selectTagsSuff() {
        dp.selectTagsSuff();
    }

    @And("^Select product suff info$")
    public void selectProductSuffInfo(){
        dp.selectProductSuffInfo();
    }

    @And("^Select target group info$")
    public void selectTargetGroupInfo() {
        dp.selectTargetGroupInfo();
    }

    @And("^Rate the input brief- content ad$")
    public void rateTheInputBriefContentAd(){
        dp.rateTheInputBriefContentAd();
    }

    @Then("^Click accept- content ad$")
    public void clickAcceptContentAd() {
        dp.clickAcceptContentAd();
    }

    @Then("^Select request changes$")
    public void selectRequestChanges() {
        dp.selectRequestChanges();
    }

    @Then("^Click 'Save' button- Content Ad Communication$")
    public void clickSaveButtonContentAdCommunication() {
        dp.clickSaveButtonContentAdCommunication();
    }

    @And("^Enter website URL- \"([^\"]*)\"- Content Ad$")
    public void enterWebsiteURLContentAd(String arg0) {
        dp.enterWebsiteURLContentAd(arg0);
    }

    @And("^Select Media plan task reference$")
    public void selectMediaPlanTaskReference() {
        dp.selectMediaPlanTaskReference();
    }
}
