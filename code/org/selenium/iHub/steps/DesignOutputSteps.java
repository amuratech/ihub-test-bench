package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.DesignOutputPage;

public class DesignOutputSteps {

    DesignOutputPage p;

    public DesignOutputSteps(){p = new DesignOutputPage();}

    @Then("^Click 'Start working on this task'$")
    public void clickStartWorkingOnThisTask() {
        p.clickStartWorkingOnThisTask();
    }

    @And("^Click design output$")
    public void clickDesignOutput() {
        p.clickDesignOutput();
    }

    @Then("^Click deliver$")
    public void clickDeliver() {
        p.clickDeliver();
    }

    @Then("^Click upload$")
    public void clickUpload(){
        p.clickUpload();
    }

    @Then("^Enter thought process \"([^\"]*)\"- Design$")
    public void enterThoughtProcessDesign(String arg0) {
        p.enterThoughtProcessDesign(arg0);
    }

    @And("^Click 'Save' button$")
    public void clickSaveButton() {
        p.clickSaveButton();
    }

    @Then("^Select thought process suff info$")
    public void selectThoughtProcessSuffInfo() {
        p.selectThoughtProcessSuffInfo();
    }

    @And("^Select design suff info$")
    public void selectDesignSuffInfo() {
        p.selectDesignSuffInfo();
    }

    @Then("^Enter 'Have the brand guidelines been followed' \"([^\"]*)\"$")
    public void enterHaveTheBrandGuidelinesBeenFollowed(String arg0) {
        p.enterHaveTheBrandGuidelinesBeenFollowed(arg0);
    }

    @And("^Enter 'Has the designer used correct colours & fonts' \"([^\"]*)\"$")
    public void enterHasTheDesignerUsedCorrectColoursFonts(String arg0) {
        p.enterHasTheDesignerUsedCorrectColoursFonts(arg0);
    }

    @And("^Enter 'Is the creative as per the brief' \"([^\"]*)\"$")
    public void enterIsTheCreativeAsPerTheBrief(String arg0) {
        p.enterIsTheCreativeAsPerTheBrief(arg0);
    }

    @And("^Enter 'Has the designer explained his thought process' \"([^\"]*)\"$")
    public void enterHasTheDesignerExplainedHisThoughtProcess(String arg0) {
        p.enterHasTheDesignerExplainedHisThoughtProcess(arg0);
    }

    @And("^Enter 'If delayed, please comment on the reason for the delay' \"([^\"]*)\"$")
    public void enterIfDelayedPleaseCommentOnTheReasonForTheDelay(String arg0){
        p.enterIfDelayedPleaseCommentOnTheReasonForTheDelay(arg0);
    }

    @Then("^Click 'Deliver' button$")
    public void clickDeliverButton() {
        p.clickDeliverButton();
    }

    @Then("^Upload designs$")
    public void uploadDesigns() {
        p.uploadDesigns();
    }

    @And("^Rate- Output$")
    public void rateOutput() {
        p.rateOutput();
    }
}
