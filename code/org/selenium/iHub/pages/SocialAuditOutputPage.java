package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SocialAuditOutputPage extends BasePage{

    UIElement addOutput = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div[2]/div/ul/li[3]/a");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li[3]/a
    UIElement upload = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_audit_output_audit_document\"]");
    UIElement submit = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_audit_output\"]/div[3]/div/div/input");
    UIElement auditDoc = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_0_correct_true\"]");
    UIElement auditCover = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_0_answer\"]");
    UIElement auditor = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_1_answer\"]");
    UIElement guidelines = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_2_answer\"]");
    UIElement rateOutput = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[10]/div/div/a[4]");
    UIElement deliver = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[6]/input[1]");
    UIElement rework = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[6]/input[2]");

    public void clickAddOutputSocialAudit() {
        tDriver.myclicking(addOutput);
    }

    public void uploadAuditDocument() {
        tDriver.mytxtupload(upload);
    }

    public void clickSubmitButtonSocialAuditOutput() {
        tDriver.myclicking(submit);
    }

    public void selectAuditDocSuffSocial() {
        tDriver.myclicking(auditDoc);
    }

    public void enterDoesTheAuditCoverAllTheRequirementsMentionedInTheTasks(String arg0) {
        tDriver.mytype(auditCover,arg0);
    }

    public void enterHasTheAuditorGivenRecommendations(String arg0) {
        tDriver.mytype(auditor,arg0);
    }

    public void enterIsTheAuditWellFormattedPresentableAndFollowsOurDesignGuidelines(String arg0) {
        tDriver.mytype(guidelines,arg0);
    }

    public void rateTheOutputSocialAudit() {
        tDriver.myclicking(rateOutput);
    }

    public void clickDeliverButtonSocialAudit() {
        tDriver.myclicking(deliver);
    }

    public void clickReworkSocialAudit() {
        tDriver.myclicking(rework);
    }


}
