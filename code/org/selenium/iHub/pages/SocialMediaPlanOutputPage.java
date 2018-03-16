package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SocialMediaPlanOutputPage extends BasePage{

    UIElement upload = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_media_plan_output_media_plan_output_document\"]");
    UIElement saveOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_social_media_plan_output\"]/div[4]/div/div/input");
    UIElement outputDoc = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_0_correct_true\"]");
    UIElement reviewTheme = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_0_answer\"]");
    UIElement reviewTg = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_1_answer\"]");
    UIElement rate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[4]/div/div/a[4]");
    UIElement deliver = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[5]/input[1]");
    UIElement rework = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[5]/input[2]");
    UIElement thoughtProcess = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_media_plan_output_thought_process\"]");
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[9]/div/div/a[4]");

    public void uploadMediaPlanOutputDocument() {
        tDriver.mytxtupload(upload);
    }

    public void clickSaveButtonSocialMediaPlanOutput() {
        tDriver.myclicking(saveOutput);
    }

    public void selectMediaPlanOutputDoc() {
        tDriver.myclicking(outputDoc);
    }

    public void enterReviewBasedOnHowWellThePlanAdheresToRequestedThemeOrIdea(String arg0) {
        tDriver.mytype(reviewTheme,arg0);
    }

    public void enterReviewBasedOnHowWellThePlanAdheresToTheRequestedTG(String arg0) {
        tDriver.mytype(reviewTg,arg0);
    }

    public void rateTheOutputSocialMediaPlanOutput() {
        tDriver.myclicking(rateOutput);
    }

    public void clickDeliverButtonSocialMediaPlan() {
        tDriver.myclicking(deliver);
    }

    public void clickReworkButtonSocailMediaPlan() {
        tDriver.myclicking(rework);
    }

    public void enterThoughtProcessSocialMediaPlan(String arg0) {
        tDriver.mytype(thoughtProcess,arg0);
    }
}
