package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 19/7/17.
 */
public class SaveDraftPage extends BasePage {

    UIElement taskName = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_task_name')]");//*[@id="client_design_task_name"]
    UIElement taskType = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_task_type-selectized')]");//*[@id="client_design_task_task_type-selectized"]
    UIElement purpose = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_purposes-selectized')]");//*[@id="client_design_task_purposes-selectized"]
    UIElement time = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[contains(@id,'_time_slot-selectized')]");//*[@id="client_content_task_due_date"]
    UIElement save = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[contains(@id,'new_client_')]/div[9]/input");//*[@id="new_client_content_task"]/div[7]/input

    public void enterTaskType() {
        tDriver.mywait(taskType);
    }

    public void purposeOfTask() {
        tDriver.mywait(purpose);
    }

    public void enterTheTime() {
        tDriver.mywait(time);
    }

    public void saveAndAddBrief() {
        tDriver.myclick(save);
    }
}
