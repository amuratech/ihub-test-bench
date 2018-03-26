package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ChangeStatusPage extends BasePage{

    UIElement updateTask = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Update Task')]");//*[@id="edit_client_design_task_5a55c82c8ec6293eff030e56"]/div[15]/input
    UIElement update = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Update task status')]");//*[contains(text(),'Tasks')]
    UIElement review = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Review')]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input
    UIElement start = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Start')]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input
    UIElement statusPublish = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(text(),'Publish')]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input
    UIElement cancel = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[14]/input[2]");//*[@id="edit_client_design_task_5a1ebda28ec62961e3f763f7"]/div[14]/input[2]
    UIElement editTask = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Edit task')]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input
    UIElement publish = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Publish')]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input
    UIElement reason = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_design_task_task_cancellation_reason\"]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input
    UIElement acceptTask = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Accept this task')]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input
    UIElement reviewOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Review the output')]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input
    UIElement markConducted = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Mark as Conducted')]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input
    UIElement sendForReview = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Send for review')]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input
    UIElement reviewInput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Review input brief')]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input
    UIElement startWorking = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Start working on this task')]");//*[@id="edit_client_development_task_59dcb3e15461f412dbbf03bc"]/div[13]/input

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
        tDriver.myclicking(publish);
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

    public void clickAcceptThisTask() {
        tDriver.myclicking(acceptTask);
    }

    public void clickReviewTheOutput() {
        tDriver.myclicking(reviewOutput);
    }

    public void clickMarkAsConductedToConductTheMeeting() {
        tDriver.myclicking(markConducted);
    }

    public void clickSendForReviewLink() {
        tDriver.myclicking(sendForReview);
    }

    public void clickReviewInputBrief() {
        tDriver.myclicking(reviewInput);
    }

    public void clickStartWorkingOnThisTaskLink() {
        tDriver.myclicking(startWorking);
    }
}
