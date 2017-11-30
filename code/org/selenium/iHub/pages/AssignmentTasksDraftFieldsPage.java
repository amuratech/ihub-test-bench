package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class AssignmentTasksDraftFieldsPage extends BasePage {

    UIElement purpose = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[3]/div/div/div/div[1]");
    UIElement timeSlot = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_task_time_slot')]");

    public void selectPurposeAssignmentMediaPlan() {
        tDriver.mywait(purpose);
    }

    public void selectTimeSlotAssignmentMediaPlan() {
        tDriver.mywait(timeSlot);
    }
}
