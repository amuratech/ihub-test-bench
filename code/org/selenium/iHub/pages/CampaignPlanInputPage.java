package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class CampaignPlanInputPage extends BasePage {

    public void enterCampaignTaskTypePlan() {
    }

    UIElement objective = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_objective')]");//*[@id="client_campaign_task_plan_output_objective"]
    UIElement clientBrief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_campaign_plan_client_brief\"]");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_plan\"]/div[3]/input[1]");
    UIElement savePublish = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_plan\"]/div[3]/input[2]");
    UIElement rate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_review\"]/div[9]/div/div/a[4]");
    UIElement startDate = new UIElement(UIType.TextBox,UILocatorType.Xpath,"");
    UIElement brief = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"task_start_date\"]");
    UIElement ref = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"task_start_date\"]");
    UIElement user = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li[7]/a");
    UIElement signOut = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"accountLinks\"]/li[3]/a");
    UIElement suffObjective = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[contains(@id,'_5_correct_true')]");//*[@id="client_campaign_review_review_fields_attributes_5_correct_true"]
    UIElement suffBrief = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[contains(@id,'_6_correct_true')]");
    UIElement suffReference = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[contains(@id,'_7_correct_true')]");
    UIElement rateInput = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"new_client_campaign_review\"]/div[9]/div/div/a[5]");
    UIElement accept = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"new_client_campaign_review\"]/div[10]/a");
    UIElement startWorking = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[10]/input");//*[@id="edit_client_design_task_59c4ac7e8ec629792ff50932"]/div[11]/input



    public void enterObjective(String arg0) {
        tDriver.mytype(objective,arg0);
    }

    public void enterClientBrief() {
        tDriver.mywait(clientBrief);
    }

    public void clickSaveButton() {
        tDriver.mywait(save);
    }

    public void clickSaveAndPublishButton() {
        tDriver.mytasktype(savePublish);
    }

    public void rateTheBrief() {
        tDriver.mywait(rate);
    }

    public void selectTaskStartDate() {
        tDriver.mywait(startDate);
    }

    public void clickClientBrief() {
        tDriver.mywait(brief);
    }

    public void clickReferenceDoc() {
        tDriver.mywait(ref);
    }

    public void clickOnUser() {
        tDriver.myclick(user);
    }

    public void clickOnSignOut() {
        tDriver.myclick(signOut);
    }

    public void clickObjectiveSuffInfo() {
        tDriver.myclicking(suffObjective);
    }

    public void clickClientBriefSuffInfo() {
        tDriver.myclicking(suffBrief);
    }

    public void clickReferenceDocSuffInfo() {
        tDriver.myclicking(suffReference);
    }

    public void rateTheInputBriefCampaignPlan() {
        tDriver.myclicking(rateInput);
    }

    public void clickAcceptButtonCampaignPlanInput() {
        tDriver.myassignscroll(accept);
    }

    public void clickStartWorkingOnThisTaskButton() {
        tDriver.myclicking(startWorking);
    }
}

