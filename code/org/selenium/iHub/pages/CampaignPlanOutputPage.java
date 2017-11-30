package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class CampaignPlanOutputPage extends BasePage {

    UIElement startDate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_plan_output_start_date\"]");
    UIElement endDate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_plan_output_end_date\"]");
    UIElement offers = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[3]/div/div/div/div/div/input");
    UIElement guidelines = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[5]/div/div[1]/div[1]/div/div/div[1]");
    UIElement project = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[5]/div/div[1]/div[1]/div/div/div[1]");
    UIElement projectCategory = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[5]/div/div[1]/div[2]/div/div/div[1]");
    UIElement segment = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[5]/div/div[2]/div[1]/div/div/div[1]");
    UIElement gender = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[10]/div/div/div/div[1]");
    UIElement tg = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task_plan_output\"]/div[20]/div/div[1]");
    UIElement suffObjective = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_0_correct_true')]");
    UIElement suffBudget = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_1_correct_true')]");
    UIElement suffStartDate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_2_correct_true')]");
    UIElement suffEndDate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_3_correct_true')]");
    UIElement suffGuidelines = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_4_correct_true')]");
    UIElement suffOffers = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_5_correct_true')]");
    UIElement suffTG = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_6_correct_true')]");
    UIElement suffProductDetails = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_7_correct_true')]");
    UIElement suffCompetitor = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_8_correct_true')]");
    UIElement rateOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_review\"]/div[8]/div[3]/div/div/a[4]");
    UIElement deliver = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_review\"]/div[8]/div[4]/input[1]");

    public void selectStartDateCampaignPlanOutput() {
        tDriver.mywait(startDate);
    }

    public void selectEndDateCampaignPlanOutput() {
        tDriver.mywait(endDate);

    }

    public void enterOffersCampaignPlanOutput() {
        tDriver.mywait(offers);
    }

    public void enterCommunicationGuidelinesCampaignPlanOutput() {
        tDriver.mywait(guidelines);
    }

    public void selectProjectCampaignPlanOutput() {
        tDriver.mywait(project);
    }

    public void selectProjectCategoryCampaignPlanOutput() {
        tDriver.mywait(projectCategory);
    }

    public void selectSegmentCampaignPlanOutput() {
        tDriver.mywait(segment);
    }

    public void selectGenderCampaignPlanOutput() {
        tDriver.mywait(gender);
    }

    public void selectWhatDoYouWantYourTgToDoCampaignPlanOutput() {
        tDriver.mywait(tg);
    }

    public void clickSuffInfoForObjective() {
        tDriver.myclicking(suffObjective);
    }

    public void clickSuffInfoForBudget() {
        tDriver.myclicking(suffBudget);
    }

    public void clickSuffInfoForStartDate() {
        tDriver.myclicking(suffStartDate);
    }

    public void clickSuffInfoForEndDate() {
        tDriver.myclicking(suffEndDate);
    }

    public void clickSuffInfoForGuidelines() {
        tDriver.myclicking(suffGuidelines);
    }

    public void clickSuffInfoForOffers() {
        tDriver.myclicking(suffOffers);
    }

    public void clickSuffInfoForTG() {
        tDriver.myclicking(suffTG);
    }

    public void clickSuffInfoForProductDetails() {
        tDriver.myclicking(suffProductDetails);
    }

    public void clickSuffInfoForCompetitorAnalysis() {
        tDriver.myclicking(suffCompetitor);
    }

    public void rateTheOutputCampaignPlanOutput() {
        tDriver.myclicking(rateOutput);
    }

    public void clickDeliverButtonCampaignPlan() {
        tDriver.myclicking(deliver);
    }
}
