package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SeoPlanInputPage;

public class SeoPlanInputSteps {

    SeoPlanInputPage sp;

    public SeoPlanInputSteps(){sp = new SeoPlanInputPage();}


    @Then("^Click 'input brief' link$")
    public void clickInputBrief() {
        sp.clickInputBrief();
    }

    @Then("^Enter requirements \"([^\"]*)\"$")
    public void enterRequirements(String arg0) {
        sp.enterRequirements(arg0);
    }

    @And("^Select product$")
    public void selectProduct() {
        sp.selectProduct();
    }

    @And("^Click check box$")
    public void clickCheckBox(){
        sp.clickCheckBox();
    }

    @And("^Click on save and publish$")
    public void clickOnSaveAndPublish() {
        sp.clickOnSaveAndPublish();
    }

    @And("^Click Save$")
    public void clickSave(){
        sp.clickSave();
    }

    @And("^Click SEO$")
    public void clickSEO() {
        sp.clickSEO();
    }

    @And("^Click 'update the task' button$")
    public void clickUpdateTheTaskButton() {
        sp.clickUpdateTheTaskButton();
    }

    @And("^Select Req$")
    public void selectReq() {
        sp.selectReq();
    }

    @And("^Select brand focus$")
    public void selectBrandFocus() {
        sp.selectBrandFocus();
    }

    @And("^Select products$")
    public void selectProducts() {
        sp.selectProducts();
    }

    @Then("^Rate input brief$")
    public void rateInputBrief() {
        sp.rateInputBrief();
    }

    @And("^Click accept$")
    public void clickAccept(){
        sp.clickAccept();
    }

    @Then("^Change the start date$")
    public void changeTheStartDate(){
        sp.changeTheStartDate();
    }

    @And("^Click update the task$")
    public void clickUpdateTheTask() {
        sp.clickUpdateTheTask();
    }

    @Then("^Change the assignee$")
    public void changeTheAssignee(){
        sp.changeTheAssignee();
    }

    @And("^Select products II$")
    public void selectProductsII() {
        sp.selectProductsII();
    }

    @And("^Select products III$")
    public void selectProductsIII() {
        sp.selectProductsIII();
    }

    @Then("^Click request changes- seo$")
    public void clickRequestChangesSeo() {
        sp.clickRequestChangesSeo();
    }

    @Then("^Click accordion to add the topic$")
    public void clickAccordionToAddTheTopic() {
        sp.clickAccordionToAddTheTopic();
    }

    @And("^Enter URL \"([^\"]*)\" for Objective$")
    public void enterURLForObjective(String arg0) {
        sp.enterURLForObjective(arg0);
    }

    @And("^Enter Strategy \"([^\"]*)\"$")
    public void enterStrategy(String arg0) {
        sp.enterStrategy(arg0);
    }

    @And("^Enter Activities done \"([^\"]*)\"$")
    public void enterActivitiesDone(String arg0) {
        sp.enterActivitiesDone(arg0);
    }

    @And("^Enter Desired outcome \"([^\"]*)\"$")
    public void enterDesiredOutcome(String arg0) {
        sp.enterDesiredOutcome(arg0);
    }

    @And("^Enter URL to Quora post \"([^\"]*)\"$")
    public void enterURLToQuoraPost(String arg0){
        sp.enterURLToQuoraPost(arg0);
    }

    @And("^Enter Weeks to publish \"([^\"]*)\"$")
    public void enterWeeksToPublish(String arg0) {
        sp.enterWeeksToPublish(arg0);
    }

    @And("^Enter Keywords of focus for Quora post$")
    public void enterKeywordsOfFocusForQuoraPost() {
        sp.enterKeywordsOfFocusForQuoraPost();
    }

    @And("^Enter Existing URL \"([^\"]*)\"$")
    public void enterExistingURL(String arg0) {
        sp.enterExistingURL(arg0);
    }

    @And("^Select Category for business listing$")
    public void selectCategoryForBusinessListing() {
        sp.selectCategoryForBusinessListing();
    }

    @Then("^Click 'Click to add' link for Quora$")
    public void clickClickToAddLinkForQuora() {
        sp.clickClickToAddLinkForQuora();
    }

    @Then("^Click 'Click to add' link for Google$")
    public void clickClickToAddLinkForGoogle() {
        sp.clickClickToAddLinkForGoogle();
    }
}
