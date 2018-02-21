package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class AssignTaskPage extends BasePage{

    UIElement assignee = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[1]/div/div[1]");//*[@id="review-accept-modal"]/div/div/div[2]/div[1]/div/div[1]
    UIElement date = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"task_start_date\"]");//*[@id="client_campaign_task_plan_output_start_date"]
    UIElement assign = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"review-accept-modal\"]/div/div/div[3]/input");//*[@id="review-accept-modal"]/div/div/div[3]/input
    UIElement requestChanges = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_review\"]/div[14]/input");
    UIElement startDate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"task_start_date\"]");
    UIElement marketingAssignee = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[1]/div[1]/div/div/div[1]");
    UIElement mediaPlanningAssignee = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[2]/div[1]/div/div/div[1]");
    UIElement dueDate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"task_due_date\"]");
    UIElement contentAssignee = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[1]/div[1]/div/div/div[1]");
    UIElement designAssignee = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[2]/div[1]/div/div/div[1]");//*[@id="review-accept-modal"]/div/div/div[2]/div[2]/div[1]/div/div/div[1]
    UIElement webDevelopmentAssignee = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[1]/div[1]/div/div/div[1]");
    UIElement campaignAssignee = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[2]/div[1]/div/div/div[1]");
    UIElement socialAssignee = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[1]/div[1]/div/div/div[1]");
    UIElement seoAssignee = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[1]/div[1]/div/div/div[1]");

    public void selectAssignee() {
        tDriver.myassignee(assignee);
    }

    public void selectStartDate() {
        tDriver.mystartdate(date);
    }

    public void clickAssignButton() {
        tDriver.mytasktype(assign);
    }

    public void clickRequestChangesButton() {
        tDriver.myclicking(requestChanges);
    }

    public void selectStartDate(String arg0) {
        tDriver.mytype(startDate,arg0);
    }

    public void selectAssigneeForMarketingBrief() {
        tDriver.myMarketingAssignee(marketingAssignee);
    }

    public void selectAssigneeForMediaPlanning() {
        tDriver.myMediaPlanningAssignee(mediaPlanningAssignee);
    }

    public void selectDueDate() {
        tDriver.myDueDate(dueDate);
    }

    public void selectAssigneeForContent() {
        tDriver.myContentAssignee(contentAssignee);
    }

    public void selectAssigneeForDesign() {
        tDriver.myDesignAssignee(designAssignee);
    }

    public void selectAssigneeForWebDevelopment() {
        tDriver.myWebDevelopmentAssignee(webDevelopmentAssignee);
    }

    public void selectAssigneeForCampaign() {
        tDriver.myCampaignAssignee(campaignAssignee);

    }

    public void selectAssigneeForSocial() {
        tDriver.mySocialAssignee(socialAssignee);
    }

    public void selectAssigneeForSeo() {
        tDriver.mySEOAssignee(seoAssignee);
    }
}
