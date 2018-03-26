package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 22/3/18.
 */
public class DeliveryFeedbackOutputPage extends BasePage {

    UIElement totalClientsCovered = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_delivery_feedback_output_total_clients_covered\"]");
    UIElement totalClientsResponded  = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_delivery_feedback_output_total_clients_responded\"]");
    UIElement averageRating = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_delivery_feedback_output\"]/div[2]/div/div/a[3]");
    UIElement specificComments = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_delivery_feedback_output\"]/div[3]/div/div[3]/div[2]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_delivery_feedback_output\"]/div[4]/input");
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_delivery_review\"]/div[9]/div/div/a[4]");
    UIElement refDocument = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[2]/div/div/div[3]/div/input");

    public void enterTotalClientsCoveredInTheSurvey(String arg0) {
        tDriver.myType(totalClientsCovered,arg0);
    }

    public void enterTotalClientsWhoRespondToThisSurvey(String arg0) {
        tDriver.myType(totalClientsResponded,arg0);
    }

    public void averageRatingAcrossAllClients() {
        tDriver.myclicking(averageRating);
    }

    public void clickSaveButtonDeliveryFeedbackOutput() {
        tDriver.myclicking(save);
    }

    public void mentionSpecificConcernsOrComments(String arg0) {
        tDriver.myType(specificComments,arg0);
    }

    public void rateTheOutputDeliveryFeedbackOutput() {
        tDriver.myclicking(rateOutput);
    }

    public void uploadReferenceDocumentDeliveryFeedback() {
        tDriver.mytxtupload(refDocument);
    }
}
