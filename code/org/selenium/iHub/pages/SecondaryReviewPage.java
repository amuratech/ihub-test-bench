package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 5/1/18.
 */
public class SecondaryReviewPage extends BasePage {

    UIElement secondaryReview = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"move_forward\"] ");
    UIElement approveReject = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Approve or Reject the output')]");
    UIElement comment = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_review_comment')]");//*[@id="client_task_client_review_comment"]
    UIElement markDelivered = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'new_client_task_')]/div[2]/input[2]");//*[@id="new_client_task_client_review"]/div[2]/input[2]
    UIElement secondReviewer = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_task_secondary_output_review\"]/div[2]/input[2]");
    UIElement clientApproval = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_task_secondary_output_review\"]/div[2]/input[2]");
    UIElement updateTask = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_design_task_')]/div[15]/input[1]");
    UIElement user = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[13]/div[2]/div[1]/div[2]/div[1]/div/div/div[1]");//*[@id="edit_client_design_task_5a575b898ec629025ba8168f"]/div[13]/div[2]/div[1]/div[2]/div[1]/div/div/div[1]
    UIElement order = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[13]/div[2]/div[1]/div[2]/div[2]/div/div/div[1]");

    public void clickSendForSecondaryReviewButton() {
        tDriver.myclicking(secondaryReview);
    }

    public void clickApproveOrRejectTheOutput() {
        tDriver.myclicking(approveReject);
    }

    public void enterComments(String arg0) {
        tDriver.mytype(comment,arg0);
    }

    public void clickAcceptAndMarkDeliveredButton() {
        tDriver.myTaskAcceptedandDelivered(markDelivered);
    }

    public void clickSendTo2NdSecondaryReviewer() {
        tDriver.myclicking(secondReviewer);
    }

    public void clickSendForClientApproval() {
        tDriver.myClicking(clientApproval);
    }

    public void selectTheUserToAddAsSOR() {
        tDriver.mySOR(user);

    }

    public void selectTheOrderToBeAssigned() {
        tDriver.mySOROrder(order);

    }

    public void sorAndTheOrderShouldBeAssigned() {
        tDriver.myMessage();
    }
}
