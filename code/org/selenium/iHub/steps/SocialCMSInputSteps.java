package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SocialCMSInputPage;

public class SocialCMSInputSteps {

    SocialCMSInputPage dp;

    public SocialCMSInputSteps(){dp = new SocialCMSInputPage();}

    @And("^Click on social$")
    public void clickOnSocial() {
        dp.clickOnSocial();
    }

    @Then("^Enter current sentiment analysis \"([^\"]*)\"$")
    public void enterCurrentSentimentAnalysis(String arg0) {
        dp.enterCurrentSentimentAnalysis(arg0);
    }

    @And("^Enter strategy to drive better sentiment \"([^\"]*)\"$")
    public void enterStrategyToDriveBetterSentiment (String arg0) {
        dp.enterStrategyToDriveBetterSentiment(arg0);
    }

    @Then("^Click save button- social post$")
    public void clickSaveButtonSocialPost() {
        dp.clickSaveButtonSocialPost();
    }

    @Then("^Click objectives accordion$")
    public void clickObjectivesAccordion() {
        dp.clickObjectivesAccordion();
    }

    @Then("^Select category- social$")
    public void selectCategorySocial(){
        dp.selectCategorySocial();
    }

    @And("^Enter theme$")
    public void enterTheme() {
        dp.enterTheme();
    }

    @And("^Enter hashtags$")
    public void enterHashtags() {
        dp.enterHashtags();
    }

    @Then("^Select category ii- social$")
    public void selectCategoryIiSocial() {
        dp.selectCategoryIiSocial();
    }

    @And("^Enter theme ii- social$")
    public void enterThemeIiSocial() {
        dp.enterThemeIiSocial();
    }

    @And("^Enter hashtags ii- social$")
    public void enterHashtagsIiSocial() {
        dp.enterHashtagsIiSocial();
    }

    @Then("^Select category iii- social$")
    public void selectCategoryIiiSocial() {
        dp.selectCategoryIiiSocial();
    }

    @And("^Enter theme iii- social$")
    public void enterThemeIiiSocial(){
        dp.enterThemeIiiSocial();
    }

    @And("^Enter hashtags iii- social$")
    public void enterHashtagsIiiSocial() {
        dp.enterHashtagsIiiSocial();
    }

    @Then("^Click paid suggestions accordion$")
    public void clickPaidSuggestionsAccordion() {
        dp.clickPaidSuggestionsAccordion();
    }

    @Then("^Enter idea$")
    public void enterIdea(){
        dp.enterIdea();
    }

    @And("^Enter content idea brief$")
    public void enterContentIdeaBrief(){
        dp.enterContentIdeaBrief();
    }

    @And("^Enter hashtags- paid suggestions$")
    public void enterHashtagsPaidSuggestions() {
        dp.enterHashtagsPaidSuggestions();
    }

    @And("^Enter how will user participate$")
    public void enterHowWillUserParticipate(){
        dp.enterHowWillUserParticipate();
    }

    @And("^Enter estimate total reach$")
    public void enterEstimateTotalReach(){
        dp.enterEstimateTotalReach();
    }

    @And("^Enter suggested budget$")
    public void enterSuggestedBudget() {
        dp.enterSuggestedBudget();
    }

    @And("^Enter estimated total user action$")
    public void enterEstimatedTotalUserAction() {
        dp.enterEstimatedTotalUserAction();
    }

    @And("^Upload creative image$")
    public void uploadCreativeImage(){
        dp.uploadCreativeImage();
    }

    @Then("^Change the status- social$")
    public void changeTheStatusSocial() {
        dp.changeTheStatusSocial();
    }

    @And("^Click update task button- social$")
    public void clickUpdateTaskButtonSocial() {
        dp.clickUpdateTaskButtonSocial();
    }

    @And("^Select objective i suff$")
    public void selectObjectiveISuff(){
        dp.selectObjectiveISuff();
    }

    @And("^Select objecrive ii suff$")
    public void selectObjecriveIiSuff() {
        dp.selectObjecriveIiSuff();
    }

    @And("^Select objective iii suff$")
    public void selectObjectiveIiiSuff() {
        dp.selectObjectiveIiiSuff();
    }

    @And("^Select paid campaign suff$")
    public void selectPaidCampaignSuff() {
        dp.selectPaidCampaignSuff();
    }

    @And("^Select ORM suff$")
    public void selectORMSuff() {
        dp.selectORMSuff();
    }

    @And("^Rate the input- social post$")
    public void rateTheInputSocialPost() {
        dp.rateTheInputSocialPost();
    }

    @And("^Click accept button- social$")
    public void clickAcceptButtonSocial() {
        dp.clickAcceptButtonSocial();
    }


    @Then("^Enter Reference URL \"([^\"]*)\"$")
    public void enterReferenceURL(String arg0) {
        dp.enterReferenceURL(arg0);
    }
}
