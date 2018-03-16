package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.DesignInfoBriefPage;

public class DesignInfoBriefSteps {
    DesignInfoBriefPage dp;

    public DesignInfoBriefSteps(){dp = new DesignInfoBriefPage();}

    @Then("^Enter project$")
    public void enterProject(){
        dp.enterProject();
    }

    @And("^Select infographics$")
    public void selectInfographics() {
        dp.selectInfographics();
    }

    @And("^Select trying$")
    public void selectTrying() {
        dp.selectTrying();
    }

    @And("^Select tg$")
    public void selectTg() {
        dp.selectTg();
    }

    @Then("^Click publish$")
    public void clickPublish() {
        dp.clickPublish();
    }

    @Then("^Select radio content$")
    public void selectRadioContent() {
        dp.selectRadioContent();
    }

    @And("^Select radio infographics$")
    public void selectRadioInfographics() {
        dp.selectRadioInfographics();
    }

    @And("^Select ref$")
    public void selectRef() {
        dp.selectRef();
    }

    @And("^Select target$")
    public void selectTarget() {
        dp.selectTarget();
    }

    @And("^Select radio product$")
    public void selectRadioProduct() {
        dp.selectRadioProduct();
    }

    @And("^Select ref images$")
    public void selectRefImages() {
        dp.selectRefImages();
    }

    @And("^Click on accept$")
    public void clickOnAccept() {
        dp.clickOnAccept();
    }

    @And("^Enter thought process$")
    public void enterThoughtProcess() {
        dp.enterThoughtProcess();
    }

    @And("^Click on save button$")
    public void clickOnSaveButton() {
        dp.clickOnSaveButton();
    }

    @And("^Click upload files$")
    public void clickUploadFiles() {
        dp.clickUploadFiles();
    }

    @Then("^Click back to task$")
    public void clickBackToTask() {
        dp.clickBackToTask();
    }

    @Then("^Select the status$")
    public void selectTheStatus() {
        dp.selectTheStatus();
    }

    @And("^Click save for Review$")
    public void clickSaveForReview() {
        dp.clickSaveForReview();

    }

    @Then("^Upload 'Client Content' reference task$")
    public void enterClientContentReferenceTask() {
        dp.enterClientContentReferenceTask();
    }

    @And("^Select Reference Links suff info$")
    public void selectReferenceLinksSuffInfo() {
        dp.selectReferenceLinksSuffInfo();
    }

    @And("^Select Client Content Task Doc suff info$")
    public void selectClientContentTaskDocSuffInfo() {
        dp.selectClientContentTaskDocSuffInfo();
    }

    @And("^Select Reference Images suff info$")
    public void selectReferenceImagesSuffInfo() {
        dp.selectReferenceImagesSuffInfo();
    }

    @And("^Select Product sufficient info$")
    public void selectProductSufficientInfo() {
        dp.selectProductSufficientInfo();
    }

    @And("^Select Client Content Task suff info$")
    public void selectClientContentTaskSuffInfo(){
        dp.selectClientContentTaskSuffInfo();
    }

    @Then("^Rate the input brief- Design Infographics$")
    public void rateTheInputBriefDesignInfographics(){
        dp.rateTheInputBriefDesignInfographics();
    }

    @When("^Select Website content task ref$")
    public void selectWebsiteContentTaskRef() {
        dp.selectWebsiteContentTaskRef();
    }
}
