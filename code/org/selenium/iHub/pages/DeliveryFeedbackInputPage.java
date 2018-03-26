package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 22/3/18.
 */
public class DeliveryFeedbackInputPage extends BasePage{

    UIElement task = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Submit Client Feedback')]");
    UIElement linkGoogleForms = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_delivery_feedback_link_to_google_form\"]");
    UIElement linkGoogleDrive = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_delivery_feedback_link_to_google_result_sheet\"]");
    UIElement surveyScheduled = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_delivery_feedback_survey_date\"]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_delivery_feedback\"]/div[5]/input");
    UIElement rateInput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_delivery_review\"]/div[10]/div/div/a[4]");

    public void clickSubmitClientFeedbackTask() {
        tDriver.myclicking(task);
    }

    public void enterLinkToTheSurveyFormOnGoogleForms(String arg0) {
        tDriver.myType(linkGoogleForms,arg0);
    }

    public void enterLinkToTheSurveyResultsOnGoogleDrive(String arg0) {
        tDriver.myType(linkGoogleDrive,arg0);
    }

    public void selectWhenIsTheSurveyScheduled() {
        tDriver.myDeliveryFeedbackSurveyDate(surveyScheduled);
    }

    public void clickSaveButtonFeedbackInput() {
        tDriver.myclicking(save);
    }

    public void rateTheInputBriefDeliveryFeedback() {
        tDriver.myclicking(rateInput);
    }
}
