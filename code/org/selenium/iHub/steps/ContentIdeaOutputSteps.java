package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentIdeaOutputPage;

public class ContentIdeaOutputSteps {

    //*[@id="edit_client_content_task_599432175461f40de73ce1a5"]/div[8]/input
    ContentIdeaOutputPage dp;

    public ContentIdeaOutputSteps(){dp = new ContentIdeaOutputPage();}

    @Then("^Click start working button- content idea$")
    public void clickStartWorkingButtonContentIdea() {
        dp.clickStartWorkingButtonContentIdea();
    }

    @And("^Enter understanding from the campaign brief \"([^\"]*)\"$")
    public void enterUnderstandingFromTheCampaignBrief(String arg0) {
        dp.enterUnderstandingFromTheCampaignBrief(arg0);
    }

    @And("^Enter social engagement suggestions \"([^\"]*)\"$")
    public void enterSocialEngagementSuggestions(String arg0) {
        dp.enterSocialEngagementSuggestions(arg0);
    }

    @And("^Enter blog topic suggestions$")
    public void enterBlogTopicSuggestions() {
        dp.enterBlogTopicSuggestions();
    }

    @Then("^Click save button- content idea$")
    public void clickSaveButtonContentIdea() {
        dp.clickSaveButtonContentIdea();
    }

    @And("^Click add concepts$")
    public void clickAddConcepts(){
        dp.clickAddConcepts();
    }

    @Then("^Enter key concepts$")
    public void enterKeyConcepts(){
        dp.enterKeyConcepts();
    }

    @And("^Enter how does it map$")
    public void enterHowDoesItMap() {
        dp.enterHowDoesItMap();
    }

    @And("^Enter concept details$")
    public void enterConceptDetails() {
        dp.enterConceptDetails();
    }

    @And("^Enter how does it appeal$")
    public void enterHowDoesItAppeal() {
        dp.enterHowDoesItAppeal();
    }

    @Then("^Click save- content idea add concepts$")
    public void clickSaveContentIdeaAddConcepts() {
        dp.clickSaveContentIdeaAddConcepts();
    }

    @Then("^Click view concepts$")
    public void clickViewConcepts() {
        dp.clickViewConcepts();
    }

    @And("^Select view details$")
    public void selectViewDetails() {
        dp.selectViewDetails();
    }

    @Then("^Click moodboards$")
    public void clickMoodboards() {
        dp.clickMoodboards();
    }

    @And("^Upload file$")
    public void uploadFile() {
        dp.uploadFile();
    }

    @Then("^Select understanding$")
    public void selectUnderstanding() {
        dp.selectUnderstanding();
    }

    @And("^Select blog topic suggestion$")
    public void selectBlogTopicSuggestion() {
        dp.selectBlogTopicSuggestion();
    }

    @And("^Select select social engagement suggestions$")
    public void selectSelectSocialEngagementSuggestions() {
        dp.selectSelectSocialEngagementSuggestions();
    }

    @And("^Select concept$")
    public void selectConcept() {
        dp.selectConcept();
    }

    @And("^Enter has the brief followed$")
    public void enterHasTheBriefFollowed() {
        dp.enterHasTheBriefFollowed();
    }

    @And("^Enter does the concept resonate well$")
    public void enterDoesTheConceptResonateWell() {
        dp.enterDoesTheConceptResonateWell();
    }

    @And("^Enter are the desing cues in line$")
    public void enterAreTheDesingCuesInLine() {
        dp.enterAreTheDesingCuesInLine();
    }

    @Then("^Rate the concept testing$")
    public void rateTheConceptTesting() {
        dp.rateTheConceptTesting();
    }

    @And("^Rate the output- content idea$")
    public void rateTheOutputContentIdea(){
        dp.rateTheOutputContentIdea();
    }

    @Then("^Click deliver- content idea$")
    public void clickDeliverContentIdea() {
        dp.clickDeliverContentIdea();
    }

    @Then("^Click rework- content idea$")
    public void clickReworkContentIdea() {
        dp.clickReworkContentIdea();
    }

    @And("^Upload a detailed doc$")
    public void uploadADetailedDoc() {
        dp.uploadADetailedDoc();
    }

    @And("^Enter 'Has the brief been followed' \"([^\"]*)\"$")
    public void enterHasTheBriefBeenFollowed(String arg0){
        dp.enterHasTheBriefBeenFollowed(arg0);
    }

    @And("^Enter 'Does the concept resonate well with all TGs mentioned in the brief' \"([^\"]*)\"$")
    public void enterDoesTheConceptResonateWellWithAllTGsMentionedInTheBrief(String arg0){
        dp.enterDoesTheConceptResonateWellWithAllTGsMentionedInTheBrief(arg0);
    }

    @And("^Enter 'Are the design cues in line with the submitted output' \"([^\"]*)\"$")
    public void enterAreTheDesignCuesInLineWithTheSubmittedOutput(String arg0){
        dp.enterAreTheDesignCuesInLineWithTheSubmittedOutput(arg0);
    }
}
