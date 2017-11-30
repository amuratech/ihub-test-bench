package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.MediaPlanInputPage;

public class MediaPlanInputSteps {

    MediaPlanInputPage dp;

    public MediaPlanInputSteps(){dp = new MediaPlanInputPage();}

    @And("^Select the department- media plan$")
    public void selectTheDepartmentMediaPlan() {
        dp.selectTheDepartmentMediaPlan();

    }

    @And("^Enter task type- campaign$")
    public void enterTaskTypeCampaign() {
        dp.enterTaskTypeCampaign();
    }

    @Then("^Enter objective- media plan$")
    public void enterObjectiveMediaPlan() {
        dp.enterObjectiveMediaPlan();
    }

    @And("^Enter budget$")
    public void enterBudget() {
        dp.enterBudget();
    }

    @And("^Select start date of campaign$")
    public void selectStartDateOfCampaign() {
        dp.selectStartDateOfCampaign();
    }

    @And("^Select end date of campaign$")
    public void selectEndDateOfCampaign() {
        dp.selectEndDateOfCampaign();
    }

    @And("^Select offers$")
    public void selectOffers() {
        dp.selectOffers();
    }

    @And("^Click offers accordion$")
    public void clickOffersAccordion(){
        dp.clickOffersAccordion();
    }

    @And("^Select communication guidelines$")
    public void selectCommunicationGuidelines() {
        dp.selectCommunicationGuidelines();
    }

    @And("^Click guidelines accrdion$")
    public void clickGuidelinesAccrdion() {
        dp.clickGuidelinesAccrdion();
    }

    @Then("^Select project- media plan$")
    public void selectProjectMediaPlan(){
        dp.selectProjectMediaPlan();
    }

    @And("^Select project category$")
    public void selectProjectCategory(){
        dp.selectProjectCategory();
    }

    @And("^Select segment- media plan$")
    public void selectSegmentMediaPlan() {
        dp.selectSegmentMediaPlan();
    }

    @And("^Enter micromarket$")
    public void enterMicromarket(){
        dp.enterMicromarket();
    }

    @And("^Enter number of units- media plan$")
    public void enterNumberOfUnitsMediaPlan() {
        dp.enterNumberOfUnitsMediaPlan();
    }

    @And("^Enter min age- media plan$")
    public void enterMinAgeMediaPlan(){
        dp.enterMinAgeMediaPlan();
    }

    @And("^Enter max age- media plan$")
    public void enterMaxAgeMediaPlan() {
        dp.enterMaxAgeMediaPlan();
    }

    @And("^Select minimum household income$")
    public void selectMinimumHouseholdIncome() {
        dp.selectMinimumHouseholdIncome();
    }

    @And("^Enter geos- media plan$")
    public void enterGeosMediaPlan() {
        dp.enterGeosMediaPlan();
    }

    @And("^Enter micro geos- media plan$")
    public void enterMicroGeosMediaPlan(){
        dp.enterMicroGeosMediaPlan();
    }

    @And("^Enter trying to reach- media plan$")
    public void enterTryingToReachMediaPlan() {
        dp.enterTryingToReachMediaPlan();
    }

    @And("^Select tg- media plan$")
    public void selectTgMediaPlan(){
        dp.selectTgMediaPlan();
    }

    @And("^Click submit button- media plan$")
    public void clickSubmitButtonMediaPlan() {
        dp.clickSubmitButtonMediaPlan();
    }

    @And("^Select gender- media plan$")
    public void selectGenderMediaPlan() {
        dp.selectGenderMediaPlan();
    }

    @Then("^Select status to 'publish the task'$")
    public void selectStatusToPublishTheTask() {
        dp.selectStatusToPublishTheTask();
    }

    @And("^Click on media plan$")
    public void clickOnMediaPlan() {
        dp.clickOnMediaPlan();
    }

    @And("^Select objective suff info$")
    public void selectObjectiveSuffInfo() {
        dp.selectObjectiveSuffInfo();
    }

    @And("^Select budget suff info$")
    public void selectBudgetSuffInfo(){
        dp.selectBudgetSuffInfo();
    }

    @And("^Select start date suff info$")
    public void selectStartDateSuffInfo() {
        dp.selectStartDateSuffInfo();
    }

    @And("^Select end date suff info$")
    public void selectEndDateSuffInfo(){
        dp.selectEndDateSuffInfo();
    }

    @And("^Select communication guidelines suff info$")
    public void selectCommunicationGuidelinesSuffInfo(){
        dp.selectCommunicationGuidelinesSuffInfo();
    }

    @And("^Select offers suff info$")
    public void selectOffersSuffInfo() {
        dp.selectOffersSuffInfo();
    }

    @And("^Select product detail suff info$")
    public void selectProductDetailSuffInfo() {
        dp.selectProductDetailSuffInfo();
    }

    @And("^Select target group suff info$")
    public void selectTargetGroupSuffInfo() {
        dp.selectTargetGroupSuffInfo();
    }

    @And("^Select competitor analysis suff info$")
    public void selectCompetitorAnalysisSuffInfo(){
        dp.selectCompetitorAnalysisSuffInfo();
    }

    @And("^Rate the input brief- media input$")
    public void rateTheInputBriefMediaInput() {
        dp.rateTheInputBriefMediaInput();
    }

    @Then("^Click accept button- media input$")
    public void clickAcceptButtonMediaInput() {
        dp.clickAcceptButtonMediaInput();
    }

    @Then("^Upload Marketing brief reference doc$")
    public void uploadMarketingBriefReferenceDoc() {
        dp.uploadMarketingBriefReferenceDoc();
    }

    @And("^Click 'Save' button- Media Plan Campaign Input$")
    public void clickSaveButtonMediaPlanCampaignInput() {
        dp.clickSaveButtonMediaPlanCampaignInput();
    }

    @Then("^Enter Objective \"([^\"]*)\"$")
    public void enterObjective(String arg0) {
        dp.enterObjective(arg0);
    }

    @And("^Enter Total budget \"([^\"]*)\"$")
    public void enterTotalBudget(String arg0){
    dp.enterTotalBudget(arg0);
    }
}
