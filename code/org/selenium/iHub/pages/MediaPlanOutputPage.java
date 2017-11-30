package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class MediaPlanOutputPage extends BasePage {

    UIElement startWorking = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[10]/input");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input
    UIElement addOutput = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[3]/div/div[2]/div/ul/li[1]/a");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input
    UIElement name = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_media_plan_campaign_output\"]/div[4]/div[2]/div/div/div[2]/div[1]/div/div/div[1]");//*[@id="new_client_media_plan_campaign_output"]/div[4]/div[2]/div/div/div[2]/div[1]/div/div/div[1]
    UIElement budgetPublisher = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_media_plan_campaign_output_publishers_attributes_0_budget\"]");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input
    UIElement clicks = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_media_plan_campaign_output_publishers_attributes_0_clicks\"]");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input
    UIElement visits = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_media_plan_campaign_output_publishers_attributes_0_visits\"]");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input
    UIElement inquiries= new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_media_plan_campaign_output_publishers_attributes_0_inquiries\"]");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input
    UIElement saveOutput = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_media_plan_campaign_output\"]/div[6]/input");//*[@id="new_client_media_plan_campaign_output"]/div[7]/input
    UIElement startDate = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_media_plan_review_review_fields_attributes_1_correct_true\"]");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input
    UIElement endDate = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_media_plan_review_review_fields_attributes_2_correct_true\"]");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input
    UIElement objective = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_media_plan_review_review_fields_attributes_3_correct_true\"]");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input
    UIElement totalBudget = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_media_plan_review_review_fields_attributes_4_correct_true\"]");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input
    UIElement totalClicks = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_media_plan_review_review_fields_attributes_5_correct_true\"]");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input
    UIElement totalVisits = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_media_plan_review_review_fields_attributes_6_correct_true\"]");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input
    UIElement totalInquiries = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_media_plan_review_review_fields_attributes_7_correct_true\"]");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input
    UIElement averageCPA = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_media_plan_review_review_fields_attributes_8_correct_true\"]");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input
    UIElement publisher = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_media_plan_review_review_fields_attributes_9_correct_true\"]");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input
    UIElement rate = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_media_plan_review\"]/div[13]/div/div/a[4]");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input
    UIElement deliver = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_media_plan_review\"]/div[12]/input[1]");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input


    public void clickStartWorkingButtonMediaPlan() {
        tDriver.myclicking(startWorking);
    }

    public void clickMediaPlanOutput() {
        tDriver.myclicking(addOutput);
    }

    public void enterNameOfPublisher() {
        tDriver.myPublisher(name);
    }

    public void enterBudgetMediaPlan(String arg0) {
        tDriver.mytype(budgetPublisher,arg0);
    }

    public void enterClicks(String arg0) {
        tDriver.mytype(clicks,arg0);
    }

    public void enterVisits(String arg0) {
        tDriver.mytype(visits,arg0);
    }

    public void enterInquiries(String arg0) {
        tDriver.mytype(inquiries,arg0);
    }

    public void clickSubmitButtonMediaPlanOutput() {
        tDriver.myclicking(saveOutput);
    }

    public void selectStartDateSuffInfoOutput() {
        tDriver.myclicking(startDate);
    }

    public void selectEndDateSuffInfoOutput() {
        tDriver.myclicking(endDate);
    }

    public void selectObjectiveOutput() {
        tDriver.myclicking(objective);
    }

    public void selectTotalBudget() {
        tDriver.myclicking(totalBudget);
    }

    public void selectTotalClicks() {
        tDriver.myclicking(totalClicks);
    }

    public void selectTotalVisits() {
        tDriver.myclicking(totalVisits);
    }

    public void selectTotalInquiries() {
        tDriver.myclicking(totalInquiries);
    }

    public void selectAverageCpa() {
        tDriver.myclicking(averageCPA);
    }

    public void selectPublishers() {
        tDriver.myclicking(publisher);
    }

    public void rateTheOutputMediaPlan() {
        tDriver.myclicking(rate);
    }

    public void clickDeliverButtonMediaPlan() {
        tDriver.myclicking(deliver);
    }


}
