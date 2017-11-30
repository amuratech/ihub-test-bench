package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentSEOPlanOutputPage;

public class ContentSEOPlanOutputSteps {

    ContentSEOPlanOutputPage dp;

    public ContentSEOPlanOutputSteps(){dp = new ContentSEOPlanOutputPage();}

    @Then("^Enter Topic \"([^\"]*)\"- Content SEO Plan$")
    public void enterTopicContentSEOPlan(String arg0){
        dp.enterTopicContentSEOPlan(arg0);
    }

    @And("^Select Keywords$")
    public void selectKeywords() {
        dp.selectKeywords();
    }

    @And("^Select Expected approval date$")
    public void selectExpectedApprovalDate() {
        dp.selectExpectedApprovalDate();
    }

    @Then("^Click 'Save' button- Content SEO Plan Output$")
    public void clickSaveButtonContentSEOPlanOutput() {
        dp.clickSaveButtonContentSEOPlanOutput();
    }

    @And("^Enter 'Has the copywriter researched well' \"([^\"]*)\"$")
    public void enterHasTheCopywriterResearchedWell(String arg0) {
        dp.enterHasTheCopywriterResearchedWell(arg0);
    }

    @And("^Enter 'Has the copywriter included enough references from competition' \"([^\"]*)\"$")
    public void enterHasTheCopywriterIncludedEnoughReferencesFromCompetition(String arg0){
        dp.enterHasTheCopywriterIncludedEnoughReferencesFromCompetition(arg0);
    }

    @And("^Enter 'Are the topics repeat of what you find in the market' \"([^\"]*)\"$")
    public void enterAreTheTopicsRepeatOfWhatYouFindInTheMarket(String arg0){
        dp.enterAreTheTopicsRepeatOfWhatYouFindInTheMarket(arg0);
    }

    @And("^Enter 'Do you think the topics are more consumable or are like SEO specific' \"([^\"]*)\"$")
    public void enterDoYouThinkTheTopicsAreMoreConsumableOrAreLikeSEOSpecific(String arg0) {
        dp.enterDoYouThinkTheTopicsAreMoreConsumableOrAreLikeSEOSpecific(arg0);
    }

    @And("^Rate the output- Content SEO Plan$")
    public void rateTheOutputContentSEOPlan() {
    dp.rateTheOutputContentSEOPlan();
    }

    @And("^Upload Reference document- Content Output  Review$")
    public void uploadReferenceDocumentContentOutputReview() {
        dp.uploadReferenceDocumentContentOutputReview();
    }



}
