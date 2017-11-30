package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentSEOPlanInputPage;

public class ContentSEOPlanInputSteps {

    ContentSEOPlanInputPage dp;

    public ContentSEOPlanInputSteps(){dp = new ContentSEOPlanInputPage();}


    @Then("^Enter type$")
    public void enterType() {
        dp.enterType();
    }

    @And("^Enter count$")
    public void enterCount() {
        dp.enterCount();
    }

    @And("^Enter month$")
    public void enterMonth() {
        dp.enterMonth();
    }

    @And("^Enter year$")
    public void enterYear() {
        dp.enterYear();
    }

    @And("^Enter reference link \"([^\"]*)\"- content seo cms$")
    public void enterReferenceLinkContentSeoCms(String arg0) {
        dp.enterReferenceLinkContentSeoCms(arg0);
    }

    @And("^Click 'keywords' accordion- content seo cms$")
    public void clickKeywordsAccordionContentSeoCms(){
        dp.clickKeywordsAccordionContentSeoCms();
    }

    @And("^Enter keyword$")
    public void enterKeyword() {
        dp.enterKeyword();
    }

    @And("^Enter impression")
    public void enterImpression() {
        dp.enterImpression();
    }

    @And("^Enter current rank$")
    public void enterCurrentRank() {
        dp.enterCurrentRank();
    }

    @And("^Enter reason of choice$")
    public void enterReasonOfChoice() {
        dp.enterReasonOfChoice();
    }

    @Then("^Click save button- content seo cms$")
    public void clickSaveButtonContentSeoCms(){
        dp.clickSaveButtonContentSeoCms();
    }

    @And("^Click save and publish button- content seo cms$")
    public void clickSaveAndPublishButtonContentSeoCms(){
        dp.clickSaveAndPublishButtonContentSeoCms();
    }

    @And("^Click 'reference link' accordion$")
    public void clickReferenceLinkAccordion() {
        dp.clickReferenceLinkAccordion();
    }


    @And("^Enter IInd keyword$")
    public void enterIIndKeyword(){
        dp.enterIIndKeyword();
    }

    @And("^Enter IInd impression$")
    public void enterIIndImpression() {
        dp.enterIIndImpression();
    }

    @And("^Enter IInd current rank$")
    public void enterIIndCurrentRank() {
        dp.enterIIndCurrentRank();
    }

    @And("^Enter IInd reason of choice$")
    public void enterIIndReasonOfChoice() {
        dp.enterIIndReasonOfChoice();
    }

    @And("^Enter IIInd keyword$")
    public void enterIIIndKeyword() {
        dp.enterIIIndKeyword();
    }

    @And("^Enter IIInd impression$")
    public void enterIIIndImpression(){
        dp.enterIIIndImpression();
    }

    @And("^Enter IIInd current rank$")
    public void enterIIIndCurrentRank() {
        dp.enterIIIndCurrentRank();
    }

    @And("^Enter IIInd reason of choice$")
    public void enterIIIndReasonOfChoice() {
        dp.enterIIIndReasonOfChoice();
    }

    @Then("^Select Planned post-count$")
    public void selectPlannedPostCount() {
        dp.selectPlannedPostCount();
    }

    @And("^Enter Reference links$")
    public void enterReferenceLinks() {
        dp.enterReferenceLinks();
    }

    @And("^Enter Keywords to focus on- Content SEO Plan$")
    public void enterKeywordsToFocusOnContentSEOPlan() {
        dp.enterKeywordsToFocusOnContentSEOPlan();
    }

    @And("^Click 'Save' button- Content SEO Plan Input$")
    public void clickSaveButtonContentSEOPlanInput() {
        dp.clickSaveButtonContentSEOPlanInput();
    }

    @And("^Rate the brief- Content SEO Plan$")
    public void rateTheBriefContentSEOPlan(){
        dp.rateTheBriefContentSEOPlan();
    }


    @And("^Select Month/Year$")
    public void selectMonthYear() {
        dp.selectMonthYear();
    }

    @And("^Enter Plan$")
    public void enterPlan(){
        dp.enterPlan();
    }

    @Then("^Enter URL \"([^\"]*)\"- Content SEO Plan input$")
    public void enterURLContentSEOPlanInput(String arg0) {
        dp.enterURLContentSEOPlanInput(arg0);
    }

    @And("^Enter Keywords- Content SEO Plan input$")
    public void enterKeywordsContentSEOPlanInput() {
        dp.enterKeywordsContentSEOPlanInput();
    }
}
