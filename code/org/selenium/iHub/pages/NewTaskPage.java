package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class NewTaskPage extends BasePage {

    UIElement taskName = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_task_name')]");//*[@id="client_campaign_task_name"]
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'new_client_')]/div[15]/input");//*[@id="new_client_content_task"]/div[15]/input
    UIElement saveContent = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'new_client_')]/div[10]/input");//*[@id="new_client_content_task"]/div[10]/input
    UIElement clientProject = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_hoarding\"]/div[3]/div/div/div[1]/div[1]");//*[@id="new_client_content_hoarding"]/div[3]/div/div/div[1]/div[1]
    UIElement add = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(text(),'Quick add')]");//html/body/nav/ul[2]/li[1]/a
    UIElement task = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(text(),'Task')]");//html/body/nav/ul[2]/li[1]/ul/li[2]/a
    UIElement brief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'new_client_')]/div[3]/div/div/div/div[3]/div[2]");//*[@id="new_client_finance_task"]/div[2]/div/div[3]/div[2]
    UIElement dueDate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_task_due_date')]");//*[@id="new_client_design_task"]/div[3]/div/div/div/div[3]/div[2]
    UIElement addInputBrief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(text(),'Add input brief')]");//*[@id="new_client_design_task"]/div[3]/div/div/div/div[3]/div[2]
    UIElement editInput = new UIElement(UIType.  TextBox, UILocatorType.Xpath,"//*[contains(text(),'Edit input brief')]");//*[@id="new_client_design_task"]/div[3]/div/div/div/div[3]/div[2]
    UIElement taskBrief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_finance_task\"]/div[2]/div/div[3]/div[2]");//*[@id="new_client_design_task"]/div[3]/div/div/div/div[3]/div[2]
    UIElement saveFinance = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_finance_task\"]/div[5]/input");//*[@id="new_client_design_task"]/div[3]/div/div/div/div[3]/div[2]

    public void enterTaskName(String arg0) {
        tDriver.mytype(taskName,arg0);
    }

    public void selectPurpose() {
        tDriver.mypurpose();
    }

    public void selectTimeSlot() {
        tDriver.mytimeslot();
    }

    public void saveAndAddBriefButton() {
        tDriver.myclicking(save);
    }

    public void selectTimeSlotContent() {
        tDriver.mytimeslotcontent();
    }

    public void clickSaveAndAddBriefButtonContent() {
        tDriver.myclicking(saveContent);
    }

    public void selectClientProjectContentHoarding() {
        tDriver.mytasktype(clientProject);
    }

    public void clickQuickAddLink() {
        tDriver.myClicking(add);
    }

    public void selectTask() {
        tDriver.myclicking(task);
    }

    public void enterBrief(String arg0) {
        tDriver.mytype(brief,arg0);
    }

    public void enterDueDate() {
        tDriver.myduedate(dueDate);
    }

    public void clickAddInputBriefLink() {
        tDriver.myclicking(addInputBrief);
    }

    public void clickEditInputBriefLink() {
        tDriver.myclicking(editInput);
    }

    public void enterTaskBriefFinance(String arg0) {
        tDriver.mytype(taskBrief,arg0);
    }

    public void clickSaveButtonFinance() {
        tDriver.myclicking(saveFinance);
    }

//    public void selectPurposeOfThisTask() {
//        tDriver.mypurposeoftask();
//    }

//    public void selectTimeSlotOfThisTask() {
//        tDriver.mytimeslotoftask();
//    }
}
