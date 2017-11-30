package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class CampaignExecutionOutputPage extends BasePage{

    UIElement startWorking = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[11]/input");//*[@id="edit_client_campaign_task_59a561e55461f4118b24d192"]/div[11]/input
    UIElement addOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[3]/div/div[2]/div/ul/li[1]/a");//*[@id="page-content-wrapper"]/div[2]/div/div[3]/div/div[2]/div/ul/li[1]/a
    UIElement screenshotFile = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_execution_output_ad_screenshots_attributes_0_file\"]");//*[@id="page-content-wrapper"]/div[2]/div/div[3]/div/div[2]/div/ul/li[1]/a
    UIElement submit = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_execution_output\"]/div[5]/input");//*[@id="new_client_campaign_execution_output"]/div[5]/input
    UIElement dashboardURL = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_campaign_task_execution_output_advertising_automation_dashboard_url\"]");//*[@id="page-content-wrapper"]/div[2]/div/div[3]/div/div[2]/div/ul/li[1]/a
    UIElement updateTask = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[11]/input");//*[@id="edit_client_design_task_59c4ddf38ec629792ff50e8d"]/div[11]/input
    UIElement suffURL = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_0_correct_true')]");//*[@id="client_campaign_review_review_fields_attributes_0_correct_true"]
    UIElement suffReason = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_1_correct_true')]");//*[@id="edit_client_campaign_task_59a6c2485461f447a6d3d0a9"]/div[11]/input
    UIElement suffMediaPlan = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_2_correct_true')]");//*[@id="client_campaign_review_review_fields_attributes_2_correct_true"]
    UIElement suffAdScreenshot = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_3_correct_true')]");//*[@id="client_campaign_review_review_fields_attributes_3_correct_true"]
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_review\"]/div[5]/div/div/a[4]");//*[@id="edit_client_campaign_task_59a6c2485461f447a6d3d0a9"]/div[11]/input
    UIElement deliver = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_review\"]/div[6]/input[1]");//*[@id="edit_client_campaign_task_59a6c2485461f447a6d3d0a9"]/div[11]/input

    public void clickStartWorkingOnThisTask() {
        tDriver.myclicking(startWorking);
    }

    public void clickSubmitOutputLink() {
        tDriver.myclicking(addOutput);
    }

    public void uploadAdScreenshotFile() {
        tDriver.myjpgupload(screenshotFile);
    }

    public void clickSubmitButton() {
        tDriver.myclicking(submit);
    }

    public void enterAdvertisingAutomationDashboardURL(String arg0) {
        tDriver.mytype(dashboardURL,arg0);
    }

    public void selectTheStatusReview() {
        tDriver.myreviewtask();
    }

    public void clickUpdateTaskButtonOutput() {
        tDriver.mytasktype(updateTask);
    }

    public void clickAdvertisingAutomationDashboardUrlSuffInfoButton() {
        tDriver.myclicking(suffURL);
    }

    public void clickReasonForNotUsingAdvertisingAutomationSuffInfoButton() {
        tDriver.myclicking(suffReason);
    }

    public void clickMediaPlanPublisherSuffInfoButton() {
        tDriver.myclicking(suffMediaPlan);
    }


    public void clickAdScreenshotsSuffInfoButton() {
        tDriver.myclicking(suffAdScreenshot);
    }

    public void rateTheOutputCampaignExecution() {
        tDriver.myclicking(rateOutput);
    }

    public void clickDeliverButtonCampaignExecution() {
        tDriver.myclicking(deliver);
    }
}
