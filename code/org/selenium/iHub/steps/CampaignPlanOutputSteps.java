package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.CampaignPlanOutputPage;

public class CampaignPlanOutputSteps {

    CampaignPlanOutputPage dp;

    public CampaignPlanOutputSteps(){dp = new CampaignPlanOutputPage();}

    @And("^Select start date- campaign plan output$")
    public void selectStartDateCampaignPlanOutput() {
        dp.selectStartDateCampaignPlanOutput();
    }

    @And("^Select end date- campaign plan output$")
    public void selectEndDateCampaignPlanOutput(){
        dp.selectEndDateCampaignPlanOutput();
    }

    @And("^Enter offers- campaign plan output$")
    public void enterOffersCampaignPlanOutput() {
        dp.enterOffersCampaignPlanOutput();
    }

    @And("^Enter communication guidelines- campaign plan output$")
    public void enterCommunicationGuidelinesCampaignPlanOutput() {
        dp.enterCommunicationGuidelinesCampaignPlanOutput();
    }

    @And("^Select project- campaign plan output$")
    public void selectProjectCampaignPlanOutput(){
        dp.selectProjectCampaignPlanOutput();
    }

    @And("^Select project category- campaign plan output$")
    public void selectProjectCategoryCampaignPlanOutput() {
        dp.selectProjectCategoryCampaignPlanOutput();
    }

    @And("^Select segment- campaign plan output$")
    public void selectSegmentCampaignPlanOutput() {
        dp.selectSegmentCampaignPlanOutput();
    }

    @And("^Select gender- campaign plan output$")
    public void selectGenderCampaignPlanOutput() {
        dp.selectGenderCampaignPlanOutput();
    }

    @And("^Select 'what do you want your tg to do'- campaign plan output$")
    public void selectWhatDoYouWantYourTgToDoCampaignPlanOutput() {
        dp.selectWhatDoYouWantYourTgToDoCampaignPlanOutput();
    }

    @Then("^Click suff info for Objective$")
    public void clickSuffInfoForObjective(){
        dp.clickSuffInfoForObjective();
    }

    @And("^Click suff info for Budget$")
    public void clickSuffInfoForBudget() {
        dp.clickSuffInfoForBudget();
    }

    @And("^Click suff info for Start Date$")
    public void clickSuffInfoForStartDate() {
        dp.clickSuffInfoForStartDate();
    }

    @And("^Click suff info for End Date$")
    public void clickSuffInfoForEndDate(){
        dp.clickSuffInfoForEndDate();
    }

    @And("^Click suff info for Guidelines$")
    public void clickSuffInfoForGuidelines() {
        dp.clickSuffInfoForGuidelines();
    }

    @And("^Click suff info for Offers$")
    public void clickSuffInfoForOffers() {
        dp.clickSuffInfoForOffers();
    }

    @And("^Click suff info for Product Details$")
    public void clickSuffInfoForProductDetails(){
        dp.clickSuffInfoForProductDetails();
    }

    @And("^Click suff info for TG$")
    public void clickSuffInfoForTG() {
        dp.clickSuffInfoForTG();
    }

    @And("^Click suff info for Competitor Analysis$")
    public void clickSuffInfoForCompetitorAnalysis(){
        dp.clickSuffInfoForCompetitorAnalysis();
    }

    @Then("^Rate the output- campaign plan output$")
    public void rateTheOutputCampaignPlanOutput() {
        dp.rateTheOutputCampaignPlanOutput();
    }

    @And("^Click 'Deliver' button- campaign plan$")
    public void clickDeliverButtonCampaignPlan() {
        dp.clickDeliverButtonCampaignPlan();
    }
}
