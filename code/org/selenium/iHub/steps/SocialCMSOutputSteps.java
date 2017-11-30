package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SocialCMSInputPage;
import org.selenium.iHub.pages.SocialCMSOutputPage;

public class SocialCMSOutputSteps {

    SocialCMSOutputPage dp;

    public SocialCMSOutputSteps(){
        dp = new SocialCMSOutputPage();
    }

    @Then("^Click start working button- social$")
    public void clickStartWorkingButtonSocial(){
    dp.clickStartWorkingButtonSocial();
    }

    @Then("^Select 'to be posted on' date$")
    public void selectToBePostedOnDate() {
        dp.selectToBePostedOnDate();
    }

    @And("^Enter hashtags- social output$")
    public void enterHashtagsSocialOutput() {
        dp.enterHashtagsSocialOutput();
    }

    @And("^Enter topic- social output$")
    public void enterTopicSocialOutput(){
        dp.enterTopicSocialOutput();
    }

    @And("^Enter theme- social output$")
    public void enterThemeSocialOutput(){
        dp.enterThemeSocialOutput();
    }

    @And("^Enter structure$")
    public void enterStructure(){
        dp.enterStructure();
    }

    @And("^Enter tone$")
    public void enterTone() {
        dp.enterTone();
    }

    @And("^Enter goal$")
    public void enterGoal() {
        dp.enterGoal();
    }

    @And("^Enter link \"([^\"]*)\"- social output$")
    public void enterLinkSocialOutput(String arg0) {
        dp.enterLinkSocialOutput(arg0);
    }

    @And("^Upload reference image- social output$")
    public void uploadReferenceImageSocialOutput() {
        dp.uploadReferenceImageSocialOutput();
    }

    @Then("^Click save button- social output$")
    public void clickSaveButtonSocialOutput() {
        dp.clickSaveButtonSocialOutput();
    }

    @Then("^Click add output- social$")
    public void clickAddOutputSocial() {
        dp.clickAddOutputSocial();
    }

    @Then("^Select cms output I$")
    public void selectCmsOutputI() {
        dp.selectCmsOutputI();
    }

    @And("^Select cms output II$")
    public void selectCmsOutputII() {
        dp.selectCmsOutputII();
    }

    @Then("^Enter 'is this in line with client's business objective$")
    public void enterIsThisInLineWithClientSBusinessObjective() {
        dp.enterIsThisInLineWithClientSBusinessObjective();
    }

    @And("^Enter does it cater to all kind of audiences/tg'$")
    public void enterDoesItCaterToAllKindOfAudiencesTg() {
        dp.enterDoesItCaterToAllKindOfAudiencesTg();
    }

    @And("^Enter 'is there repitition from the earlier cms'$")
    public void enterIsThereRepititionFromTheEarlierCms(){
        dp.enterIsThereRepititionFromTheEarlierCms();
    }

    @And("^Enter 'are the hashtags used in line with the suggestions'$")
    public void enterAreTheHashtagsUsedInLineWithTheSuggestions() {
        dp.enterAreTheHashtagsUsedInLineWithTheSuggestions();
    }

//    @And("^Enter 'are the hashtags used trending'$")
//    public void enterAreTheHashtagsUsedTrending() {
//        dp.enterAreTheHashtagsUsedTrending();
//    }

    @Then("^Rate the output- social post$")
    public void rateTheOutputSocialPost(){
        dp.rateTheOutputSocialPost();
    }

    @And("^Click deliver- social cms$")
    public void clickDeliverSocialCms() {
        dp.clickDeliverSocialCms();
    }

    @And("^Click rework- social cms$")
    public void clickReworkSocialCms() {
        dp.clickReworkSocialCms();

    }

    @And("^Click link accordion$")
    public void clickLinkAccordion() {
        dp.clickLinkAccordion();
    }

    @And("^Enter ORM issues$")
    public void enterORMIssues() {
        dp.enterORMIssues();
    }

    @Then("^Enter 'Is this in line with the client’s business objective' \"([^\"]*)\"$")
    public void enterIsThisInLineWithTheClientSBusinessObjective(String arg0) {
        dp.enterIsThisInLineWithTheClientSBusinessObjective(arg0);
    }

    @And("^Enter 'Does it cater to all kinds of audiences / TGs for the client' \"([^\"]*)\"$")
    public void enterDoesItCaterToAllKindsOfAudiencesTGsForTheClient(String arg0){
        dp.enterDoesItCaterToAllKindsOfAudiencesTGsForTheClient(arg0);
    }

    @And("^Enter 'Is there repetition from the earlier plan' \"([^\"]*)\"$")
    public void enterIsThereRepetitionFromTheEarlierPlan(String arg0) {
        dp.enterIsThereRepetitionFromTheEarlierPlan(arg0);
    }

    @And("^Enter 'Are the hashtags used in line with suggestions' \"([^\"]*)\"$")
    public void enterAreTheHashtagsUsedInLineWithSuggestions(String arg0) {
        dp.enterAreTheHashtagsUsedInLineWithSuggestions(arg0);
    }

    @And("^Enter 'Are the hashtags used trending' \"([^\"]*)\"$")
    public void enterAreTheHashtagsUsedTrending(String arg0) {
        dp.enterAreTheHashtagsUsedTrending(arg0);
    }

    @Then("^Rate the output- Social Plan$")
    public void rateTheOutputSocialPlan() {
        dp.rateTheOutputSocialPlan();
    }
}
