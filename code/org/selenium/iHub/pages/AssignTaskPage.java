package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class AssignTaskPage extends BasePage{

    UIElement assignee = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"review-accept-modal\"]/div/div/div[2]/div[1]/div/div[1]");//*[@id="review-accept-modal"]/div/div/div[2]/div[1]/div/div[1]
    UIElement date = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"task_start_date\"]");//*[@id="client_campaign_task_plan_output_start_date"]
    UIElement assign = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"review-accept-modal\"]/div/div/div[3]/input");
    UIElement requestChanges = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_review\"]/div[14]/input");
    UIElement startDate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"task_start_date\"]");

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
}
