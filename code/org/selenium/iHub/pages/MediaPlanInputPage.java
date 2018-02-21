package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class MediaPlanInputPage extends BasePage {

    UIElement mediaPlan = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"taskLinks\"]/li[6]/a");
    UIElement type = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_media_plan_task\"]/div[1]/div[2]/div/div/div[1]");
    UIElement objective = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_output_objective')]");//*[@id="client_marketing_brief_output_objective"]
    UIElement budget = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_output_budget')]");
    UIElement startDate = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_output_start_date')]");//*[@id="client_media_plan_campaign_output_start_date"]
    UIElement endDate = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_output_end_date')]");
    UIElement offers = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[3]/div/div/div/div/div/input");
    UIElement offersAccordion = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[3]/div/div/div/div/div/span/a/i");
    UIElement guidelines = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[4]/div/div/div/div/div/input");
    UIElement guidelinesAccordion = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[4]/div/div/div/div/div/span/a/i");
    UIElement project = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[5]/div/div[1]/div[1]/div/div/div[1]");
    UIElement projectCategory = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[5]/div/div[1]/div[2]/div/div/div[1]");
    UIElement segment = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[5]/div/div[2]/div[1]/div/div/div[1]");
    UIElement microMarket = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_plan_output_product_detail_attributes_micro_market\"]");//*[@id="client_campaign_task_plan_output_product_detail_attributes_micro_market"]
    UIElement units = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_plan_output_product_detail_attributes_units\"]");
    UIElement minAge = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_plan_output_target_group_attributes_min_age\"]");
    UIElement maxAge = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_plan_output_target_group_attributes_max_age\"]");
    UIElement gender = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[10]/div/div/div/div[1]");
    UIElement income = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_plan_output_target_group_attributes_min_household_income\"]");
    UIElement geos = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[17]/div/div/div/div[1]");
    UIElement microGeos = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[18]/div/div/div/div[1]");
    UIElement trying = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_plan_output_target_group_attributes_target_audience\"]");
    UIElement tg = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[20]/div/div[1]");
    UIElement submit = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[21]/input");
    UIElement objectiveSuff = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_5_correct_true')]");
    UIElement budgetSuff = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_6_correct_true')]");
    UIElement startDateSuff = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_7_correct_true')]");
    UIElement endDateSuff = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_8_correct_true')]");
    UIElement guidelinesSuff = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_9_correct_true')]");
    UIElement offerSuff = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_10_correct_true')]");
    UIElement productSuff = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_11_correct_true')]");
    UIElement targetSuff = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_12_correct_true')]");
    UIElement analysisSuff = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_13_correct_true')]");
    UIElement rateInput = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_media_plan_review\"]/div[8]/div/div/a[4]");
    UIElement accept = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_media_plan_review\"]/div[16]/a");//*[@id="new_client_media_plan_review"]/div[16]/a
    UIElement refDoc = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_media_plan_campaign_marketing_brief_doc\"]");//*[@id="new_client_media_plan_review"]/div[16]/a
    UIElement saveInput = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_media_plan_campaign\"]/div[3]/input");//*[@id="new_client_media_plan_review"]/div[16]/a
    UIElement totalBudget = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_media_plan_campaign_output_total_budget\"]");//*[@id="new_client_media_plan_review"]/div[16]/a

    public void selectTheDepartmentMediaPlan() {
        tDriver.mydeptmediaplan();
    }

    public void enterTaskTypeCampaign() {
        tDriver.mymediaplancampaign(type);
    }

    public void enterObjectiveMediaPlan() {
        tDriver.mywait(objective);
    }

    public void enterBudget() {
        tDriver.mywait(budget);
    }

    public void selectStartDateOfCampaign() {
        tDriver.mystartdate(startDate);
    }

    public void selectEndDateOfCampaign() {
        tDriver.mycampaignenddate(endDate);
    }

    public void selectOffers() {
        tDriver.mywait(offers);
    }

    public void clickOffersAccordion() {
        tDriver.myclicking(offersAccordion);
    }

    public void selectCommunicationGuidelines() {
        tDriver.mywait(guidelines);
    }

    public void clickGuidelinesAccrdion() {
        tDriver.myclicking(guidelinesAccordion);
    }

    public void selectProjectMediaPlan() {
        tDriver.mywait(project);
    }

    public void selectProjectCategory() {
        tDriver.mywait(projectCategory);
    }

    public void selectSegmentMediaPlan() {
        tDriver.mywait(segment);
    }

    public void enterMicromarket() {
        tDriver.mywait(microMarket);
    }

    public void enterNumberOfUnitsMediaPlan() {
        tDriver.mytasktype(units);
    }

    public void enterMinAgeMediaPlan() {
        tDriver.mywait(minAge);
    }

    public void enterMaxAgeMediaPlan() {
        tDriver.mywait(maxAge);
    }

    public void selectMinimumHouseholdIncome() {
        tDriver.mywait(income);
    }

    public void enterGeosMediaPlan() {
        tDriver.mywait(geos);
    }

    public void enterMicroGeosMediaPlan() {
        tDriver.mywait(microGeos);
    }

    public void enterTryingToReachMediaPlan() {
        tDriver.mywait(trying);
    }

    public void selectTgMediaPlan() {
        tDriver.mywait(tg);
    }

    public void clickSubmitButtonMediaPlan() {
        tDriver.myclicking(submit);
    }

    public void selectGenderMediaPlan() {
        tDriver.mywait(gender);
    }

    public void selectStatusToPublishTheTask() {
        tDriver.mymediaplanpublish();
    }

    public void clickOnMediaPlan() {
        tDriver.myclicking(mediaPlan);
    }

    public void selectObjectiveSuffInfo() {
        tDriver.myclicking(objectiveSuff);
    }

    public void selectBudgetSuffInfo() {
        tDriver.myclicking(budgetSuff);
    }

    public void selectStartDateSuffInfo() {
        tDriver.myclicking(startDateSuff);
    }

    public void selectEndDateSuffInfo() {
        tDriver.myclicking(endDateSuff);
    }

    public void selectCommunicationGuidelinesSuffInfo() {
        tDriver.myclicking(guidelinesSuff);
    }

    public void selectOffersSuffInfo() {
        tDriver.myclicking(offerSuff);
    }

    public void selectProductDetailSuffInfo() {
        tDriver.myclicking(productSuff);
    }

    public void selectTargetGroupSuffInfo() {
        tDriver.myclicking(targetSuff);
    }

    public void selectCompetitorAnalysisSuffInfo() {
        tDriver.myclicking(analysisSuff);
    }

    public void rateTheInputBriefMediaInput() {
        tDriver.myclicking(rateInput);
    }

    public void clickAcceptButtonMediaInput() {
        tDriver.myclicking(accept);
    }

    public void uploadMarketingBriefReferenceDoc() {
        tDriver.mytxtupload(refDoc);
    }

    public void clickSaveButtonMediaPlanCampaignInput() {
        tDriver.myclicking(saveInput);
    }

    public void enterObjective(String arg0) {
        tDriver.mytype(objective,arg0);
    }

    public void enterTotalBudget(String arg0) {
        tDriver.mytype(totalBudget,arg0);
    }
}
