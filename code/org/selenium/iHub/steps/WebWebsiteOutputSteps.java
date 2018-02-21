package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.WebWebsiteOutputPage;

public class WebWebsiteOutputSteps {

    WebWebsiteOutputPage dp;

    public WebWebsiteOutputSteps(){dp = new WebWebsiteOutputPage();};

    @Then("^Click start working button- webdev$")
    public void clickStartWorkingButtonWebdev() {
        dp.clickStartWorkingButtonWebdev();
    }

    @Then("^Click add output$")
    public void clickAddOutput() {
        dp.clickAddOutput();
    }

    @And("^Enter web thought process$")
    public void enterWebThoughtProcess() {
        dp.enterWebThoughtProcess();
    }

    @And("^Enter thought process \"([^\"]*)\"$")
    public void enterThoughtProcess(String arg0) {

        dp.enterThoughtProcess(arg0);
    }

    @And("^Enter QA software link$")
    public void enterQASoftwareLink() {
        dp.enterQASoftwareLink();
    }

    @And("^Enter staging link$")
    public void enterStagingLink() {
        dp.enterStagingLink();
    }

    @And("^Upload approval doc$")
    public void uploadApprovalDoc() {
        dp.uploadApprovalDoc();
    }

    @Then("^Click Save button$")
    public void clickSaveButton() {
        dp.clickSaveButton();
    }

    @Then("^Change the status$")
    public void changeTheStatus(){
        dp.changeTheStatus();
    }

    @And("^Click update task button$")
    public void clickUpdateTaskButton() {
        dp.clickUpdateTaskButton();
    }

    @Then("^Select webdev thought process$")
    public void selectWebdevThoughtProcess() {
        dp.selectWebdevThoughtProcess();
    }

    @And("^Select staging link$")
    public void selectStagingLink() {
        dp.selectStagingLink();
    }

    @And("^Select QA link$")
    public void selectQALink() {
        dp.selectQALink();
    }

    @And("^Select approval doc$")
    public void selectApprovalDoc() {
        dp.selectApprovalDoc();
    }

    @Then("^Rate the adherence to design$")
    public void rateTheAdherenceToDesign() {
        dp.rateTheAdherenceToDesign();
    }

    @And("^Rate the usage of libraries$")
    public void rateTheUsageOfLibraries() {
        dp.rateTheUsageOfLibraries();
    }

    @And("^Rate the adherence to coding$")
    public void rateTheAdherenceToCoding(){
        dp.rateTheAdherenceToCoding();
    }

    @Then("^Enter copy review \"([^\"]*)\"$")
    public void enterCopyReview(String arg0) {
        dp.enterCopyReview(arg0);
    }

    @And("^Enter design review \"([^\"]*)\"$")
    public void enterDesignReview(String arg0) {
        dp.enterDesignReview(arg0);
    }

    @And("^Enter desktop page speed score \"([^\"]*)\"$")
    public void enterDesktopPageSpeedScore(String arg0){
        dp.enterDesktopPageSpeedScore(arg0);
    }

    @And("^Enter mobile page speed score \"([^\"]*)\"$")
    public void enterMobilePageSpeedScore(String arg0) {
        dp.enterMobilePageSpeedScore(arg0);
    }

    @Then("^Rate the website output$")
    public void rateTheWebsiteOutput() {
        dp.rateTheWebsiteOutput();
    }

    @Then("^Click rework$")
    public void clickRework() {
        dp.clickRework();
    }

    @And("^Click deliver button$")
    public void clickDeliverButton() {
        dp.clickDeliverButton();
    }

    @Then("^Select status$")
    public void selectStatus() {
        dp.selectStatus();
    }

    @And("^Click update$")
    public void clickUpdate(){
        dp.clickUpdate();
    }

    @And("^Enter QA software link \"([^\"]*)\"$")
    public void enterQASoftwareLink(String arg0) {
        dp.enterQASoftwareLink(arg0);
    }

    @And("^Enter staging link \"([^\"]*)\"$")
    public void enterStagingLink(String arg0) {
        dp.enterStagingLink(arg0);
    }


    @Then("^Click 'Update task status' button$")
    public void clickUpdateTaskStatusButton() {
        dp.clickUpdateTaskStatusButton();
    }

    @And("^Click 'Start'$")
    public void clickStart() {
        dp.clickStart();
    }

    @Then("^Click 'Update task status'$")
    public void clickUpdateTaskStatus() {
        dp.clickUpdateTaskStatus();
    }

    @And("^Click 'Review'$")
    public void clickReview() {
        dp.clickReview();
    }

    @Then("^Enter link to QA project \"([^\"]*)\"$")
    public void enterLinkToQAProject(String arg0){
        dp.enterLinkToQAProject(arg0);
    }

    @And("^Enter reason for insuff info$")
    public void enterReasonForInsuffInfo() {
        dp.enterReasonForInsuffInfo();
    }
}
