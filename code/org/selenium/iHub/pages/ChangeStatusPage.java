package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ChangeStatusPage extends BasePage{

    UIElement updateTask = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[13]/input");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input
    UIElement update = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Update task status')]");//*[contains(text(),'Tasks')]
    UIElement review = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Review')]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input
    UIElement start = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Start')]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input
    UIElement statusPublish = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(text(),'Publish')]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input
    UIElement cancel = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[14]/input[2]");//*[@id="edit_client_design_task_5a1ebda28ec62961e3f763f7"]/div[14]/input[2]
    UIElement editTask = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Edit task')]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input
    UIElement publish = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Publish')]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input
    UIElement reason = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_design_task_task_cancellation_reason\"]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input

    public void selectTheStatusPublish() {
        tDriver.mypublishtask();
    }

    public void clickUpdateTaskButton() {
        tDriver.myclicking(updateTask);
    }

    public void clickUpdateLink(){
        tDriver.myclicking(update);
    }

    public void selectReview() {
        tDriver.mytasktype(review);
    }

    public void selectStartOption() {
        tDriver.myclicking(start);
    }

    public void selectPublish() {
        tDriver.mytasktype(statusPublish);
    }

    public void clickCancel() {
        tDriver.myclicking(cancel);
    }

    public void clickEditTask() {
        tDriver.myclicking(editTask);
    }


    public void selectPublishFinance() {
        tDriver.myClick(publish);
    }

    public void enterTheTaskCancellationReason(String arg0) {
        tDriver.myEnter(reason,arg0);
    }

    public void enterTheTaskCancellationReason() {
        tDriver.myEnter(reason);
    }

    public void doNotEnterReasonForCancellingTheTask() {
        tDriver.myEnter(reason);
    }
}
