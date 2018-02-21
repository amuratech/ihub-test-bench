package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.MarketingWorkReviewOutputPage;

/**
 * Created by amuraqa on 2/2/18.
 */
public class MarketingWorkReviewOutputSteps {
    
    MarketingWorkReviewOutputPage dp;
    
    public MarketingWorkReviewOutputSteps(){ dp = new MarketingWorkReviewOutputPage();}

    @Then("^Select Current client health$")
    public void selectCurrentClientHealth() {
        dp.selectCurrentClientHealth();
    }

    @And("^Review of the lead quality \"([^\"]*)\"$")
    public void reviewOfTheLeadQuality(String arg0) {
        dp.reviewOfTheLeadQuality(arg0);
    }

    @And("^Enter Outstanding amount for advertisement \"([^\"]*)\"$")
    public void enterOutstandingAmountForAdvertisement(String arg0) {
        dp.selectOutstandingAmountForAdvertisement(arg0);
    }

    @And("^Enter Outstanding amount for services \"([^\"]*)\"$")
    public void enterOutstandingAmountForServices(String arg0){
        dp.selectOutstandingAmountForServices(arg0);
        
    }

    @And("^Enter Notes from last client meeting \"([^\"]*)\"$")
    public void enterNotesFromLastClientMeeting(String arg0){
        dp.enterNotesFromLastClientMeeting(arg0);
    }

    @And("^Enter Recent escalations \"([^\"]*)\"$")
    public void enterRecentEscalations(String arg0) {
        dp.enterRecentEscalations(arg0);
    }

    @And("^Enter Review of SEO activities \"([^\"]*)\"$")
    public void enterReviewOfSEOActivities(String arg0) {
        dp.enterReviewOfSEOActivities(arg0);
    }

    @And("^Enter Review of social activities \"([^\"]*)\"$")
    public void enterReviewOfSocialActivities(String arg0){
        dp.enterReviewOfSocialActivities(arg0);
    }

    @And("^Enter Review of website maintainance activities \"([^\"]*)\"$")
    public void enterReviewOfWebsiteMaintainanceActivities(String arg0){
        dp.enterReviewOfWebsiteMaintainanceActivities(arg0);
    }

    @And("^Enter Review of market research activities \"([^\"]*)\"$")
    public void enterReviewOfMarketResearchActivities(String arg0) {
        dp.enterReviewOfMarketResearchActivities(arg0);
    }

    @And("^Enter Review of creative and ideation activities \"([^\"]*)\"$")
    public void enterReviewOfCreativeAndIdeationActivities(String arg0){
        dp.enterReviewOfCreativeAndIdeationActivities(arg0);
    }

    @And("^Enter Review of paid media activities \"([^\"]*)\"$")
    public void enterReviewOfPaidMediaActivities(String arg0) {
        dp.enterReviewOfPaidMediaActivities(arg0);
    }

    @And("^Enter Comments- \"([^\"]*)\"- Marketing Work Review output$")
    public void enterCommentsMarketingWorkReviewOutput(String arg0) {
        dp.enterCommentsMarketingWorkReviewOutput(arg0);
    }

    @And("^Enter Ideas and innovation suggested to client \"([^\"]*)\"$")
    public void enterIdeasAndInnovationSuggestedToClient(String arg0) {
        dp.enterIdeasAndInnovationSuggestedToClient(arg0);

    }

    @And("^Click 'Save' button- Marketing Work Review output$")
    public void clickSaveButtonMarketingWorkReviewOutput() {
        dp.clickSaveButtonMarketingWorkReviewOutput();
    }

    @And("^Select Last client meeting$")
    public void selectLastClientMeeting() {
        dp.selectLastClientMeeting();
    }

    @And("^Rate the output- Marketing Work Review output$")
    public void rateTheOutputMarketingWorkReviewOutput() {
        dp.rateTheOutputMarketingWorkReviewOutput();
    }

    @When("^Enter 'Has the Account Executive covered all the concerned activities under the contract' \"([^\"]*)\"$")
    public void enterHasTheAccountExecutiveCoveredAllTheConcernedActivitiesUnderTheContract(String arg0){
        dp.enterHasTheAccountExecutiveCoveredAllTheConcernedActivitiesUnderTheContract(arg0);
    }

    @And("^Enter 'Have you received any escalations other than the ones mentioned in the review' \"([^\"]*)\"$")
    public void enterHaveYouReceivedAnyEscalationsOtherThanTheOnesMentionedInTheReview(String arg0) {
        dp.enterHaveYouReceivedAnyEscalationsOtherThanTheOnesMentionedInTheReview(arg0);
    }

    @And("^Enter 'Are we on track with the monthly plan proposed to the client' \"([^\"]*)\"$")
    public void enterAreWeOnTrackWithTheMonthlyPlanProposedToTheClient(String arg0){
        dp.enterAreWeOnTrackWithTheMonthlyPlanProposedToTheClient(arg0);
    }

    @And("^Enter 'Are you happy with the suggestions and the innovation suggested by the Account Executive' \"([^\"]*)\"$")
    public void enterAreYouHappyWithTheSuggestionsAndTheInnovationSuggestedByTheAccountExecutive(String arg0) {
        dp.enterAreYouHappyWithTheSuggestionsAndTheInnovationSuggestedByTheAccountExecutive(arg0);
    }

    @And("^Enter 'Your feedback to the Account Executive, Does he/she need any improvements and which areas need to be worked on \"([^\"]*)\"$")
    public void enterYourFeedbackToTheAccountExecutiveDoesHeSheNeedAnyImprovementsAndWhichAreasNeedToBeWorkedOn(String arg0) {
        dp.enterYourFeedbackToTheAccountExecutiveDoesHeSheNeedAnyImprovementsAndWhichAreasNeedToBeWorkedOn(arg0);

    }
}
