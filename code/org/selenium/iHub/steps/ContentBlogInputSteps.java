package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentBlogInputPage;

public class ContentBlogInputSteps {

    ContentBlogInputPage dp;

    public ContentBlogInputSteps(){dp= new ContentBlogInputPage();}

    @And("^Enter the time- contentblog$")
    public void enterTheTimeContentblog() {
        dp.enterTheTimeContentblog();
    }

    @Then("^Save and add brief- content$")
    public void saveAndAddBriefContent() {
        dp.saveAndAddBriefContent();
    }

    @And("^Click content$")
    public void clickContent() {
        dp.clickContent();
    }

    @And("^Enter topic$")
    public void enterTopic() {
        dp.enterTopic();
    }

    @And("^Select tones of voice$")
    public void selectTonesOfVoice() {
        dp.selectTonesOfVoice();
    }

    @And("^Enter content brief$")
    public void enterContentBrief() {
        dp.enterContentBrief();
    }

    @And("^Select client project$")
    public void selectClientProject() {
        dp.selectClientProject();
    }

    @And("^Enter unique selling point$")
    public void enterUniqueSellingPoint() {
        dp.enterUniqueSellingPoint();
    }

    @And("^Enter who are you$")
    public void enterWhoAreYou() {
        dp.enterWhoAreYou();
    }

    @And("^Select objective$")
    public void selectObjective() {
        dp.selectObjective();
    }

    @Then("^Click save- contentblogpost input$")
    public void clickSaveContentblogpostInput() {
        dp.clickSaveContentblogpostInput();
    }

    @And("^Select topic$")
    public void selectTopic() {
        dp.selectTopic();
    }

    @And("^Select brief$")
    public void selectBrief() {
        dp.selectBrief();
    }

    @And("^Select usps$")
    public void selectUsps() {
        dp.selectUsps();
    }

    @And("^Select tones$")
    public void selectTones(){
        dp.selectTones();
    }

    @And("^Select product suff$")
    public void selectProductSuff() {
        dp.selectProductSuff();
    }

    @And("^Select campaign suff$")
    public void selectCampaignSuff(){
        dp.selectCampaignSuff();
    }

    @And("^Select target suff$")
    public void selectTargetSuff() {
        dp.selectTargetSuff();
    }

    @And("^Select keywords suff$")
    public void selectKeywordsSuff() {
        dp.selectKeywordsSuff();
    }

    @Then("^Rate the brief- contentblogpost$")
    public void rateTheBriefContentblogpost() {
        dp.rateTheBriefContentblogpost();
    }

    @And("^Click accept- contentblogpost$")
    public void clickAcceptContentblogpost() {
        dp.clickAcceptContentblogpost();
    }

    @Then("^Enter 'campaign plan' reference task- content blogpost$")
    public void enterCampaignPlanReferenceTaskContentBlogpost() {
        dp.enterCampaignPlanReferenceTaskContentBlogpost();
    }

    @And("^Enter topic \"([^\"]*)\"$")
    public void enterTopic(String arg0){
        dp.enterTopic(arg0);
    }

    @And("^Select tones of voice- content blog post$")
    public void selectTonesOfVoiceContentBlogPost(){
        dp.selectTonesOfVoiceContentBlogPost();
    }

    @And("^Enter content brief \"([^\"]*)\"- content blog post$")
    public void enterContentBriefContentBlogPost(String arg0){
        dp.enterContentBriefContentBlogPost(arg0);
    }

    @And("^Enter client project- content blog post$")
    public void enterClientProjectContentBlogPost() {
        dp.enterClientProjectContentBlogPost();
    }

    @And("^Enter USPs \"([^\"]*)\"- content blog post$")
    public void enterUSPsContentBlogPost(String arg0) {
        dp.enterUSPsContentBlogPost(arg0);
    }

    @And("^Enter accordion- content blog post$")
    public void enterAccordionContentBlogPost() {
        dp.enterAccordionContentBlogPost();
    }

    @Then("^Click 'Save' button- content blog post$")
    public void clickSaveButtonContentBlogPost() {
        dp.clickSaveButtonContentBlogPost();
    }

    @And("^Enter Tonality$")
    public void enterTonality() {
        dp.enterTonality();
    }

    @And("^Enter Keywords to focus on$")
    public void enterKeywordsToFocusOn() {
        dp.enterKeywordsToFocusOn();
    }

    @And("^Select start date$")
    public void selectStartDate() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

}
