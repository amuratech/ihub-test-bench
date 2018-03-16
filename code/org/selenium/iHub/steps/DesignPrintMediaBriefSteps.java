package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.DesignPrintMediaBriefPage;

public class DesignPrintMediaBriefSteps {

    DesignPrintMediaBriefPage dp;

    public DesignPrintMediaBriefSteps(){dp = new DesignPrintMediaBriefPage();}


    @Then("^Enter product name$")
    public void enterProductName() {
        dp.enterProductName();
    }

    @And("^Select sub type$")
    public void selectSubType(){
        dp.selectSubType();
    }

    @And("^Enter content$")
    public void enterContent() {
        dp.enterContent();
    }

    @And("^Enter Width \"([^\"]*)\"$")
    public void enterWidth(String arg0) {
        dp.enterWidth(arg0);
    }

    @And("^Enter Height \"([^\"]*)\"$")
    public void enterHeight(String arg0) {
        dp.enterHeight(arg0);
    }

    @And("^Enter gender$")
    public void enterGender() {
        dp.enterGender();
    }

    @And("^Enter trying to reach$")
    public void enterTryingToReach() {
        dp.enterTryingToReach();
    }

    @And("^Select tg for print media$")
    public void selectTgForPrintMedia() {
        dp.selectTgForPrintMedia();
    }

    @Then("^Click 'Save and publish'$")
    public void clickSavePublish() {
        dp.clickSavePublish();
    }

    @And("^Print media type$")
    public void printMediaType() {
        dp.printMediaType();
    }

    @And("^Content radio button$")
    public void contentRadioButton() {
        dp.contentRadioButton();
    }

    @And("^Dimension$")
    public void dimension() {
        dp.dimension();
    }

    @And("^Usps$")
    public void usps() {
        dp.usps();
    }

    @And("^Budget$")
    public void budget() {
        dp.budget();
    }

    @And("^Paper type$")
    public void paperType() {
        dp.paperType();
    }

    @And("^Target$")
    public void target() {
        dp.target();
    }

    @And("^Product info$")
    public void productInfo() {
        dp.productInfo();
    }

    @And("^Click on accept button$")
    public void clickOnAcceptButton() {
        dp.clickOnAcceptButton();
    }

    @Then("^Rate the input brief$")
    public void rateTheInputBrief() {
        dp.rateTheInputBrief();
    }

    @And("^Click on the save button$")
    public void clickOnTheSaveButton() {
        dp.clickOnTheSaveButton();
    }


    @And("^Enter Budget \"([^\"]*)\"$")
    public void enterBudget(String arg0){
        dp.enterBudget(arg0);
    }

    @And("^Enter Paper Type \"([^\"]*)\"$")
    public void enterPaperType(String arg0){
        dp.enterPaperType(arg0);
    }

    @And("^Upload 'Content Print Media' reference doc$")
    public void uploadContentPrintMediaReferenceDoc() {
        dp.uploadContentPrintMediaReferenceDoc();
    }

    @And("^Select Content Print Media doc suff info$")
    public void selectContentPrintMediaDocSuffInfo(){
        dp.selectContentPrintMediaDocSuffInfo();
    }

    @And("^Select Product suff info$")
    public void selectProductSuffInfo() {
        dp.selectProductSuffInfo();
    }

    @And("^Select Content Print Media reference task suff info$")
    public void selectContentPrintMediaReferenceTaskSuffInfo() {
        dp.selectContentPrintMediaReferenceTaskSuffInfo();
    }

    @And("^Select Print media content task reference$")
    public void selectPrintMediaContentTaskReference() {
        dp.selectPrintMediaContentTaskReference();
    }


}
