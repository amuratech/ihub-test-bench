package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SeoAuditOutputPage extends BasePage {

    UIElement auditDoc = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_seo_audit_output_audit_document\"]");
    UIElement saveInput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_seo_audit_output\"]/div[3]/div/div/input");
    UIElement auditSuff = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_1_correct_true')]");//*[@id="client_seo_review_review_fields_attributes_1_correct_true"]
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_seo_review\"]/div[5]/div/div/a[4]");
    UIElement deliver = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_seo_review\"]/div[4]/input[1]");
    UIElement startWorking = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[10]/input");//*[@id="edit_client_seo_task_599d2d305461f47b63525d74"]/div[10]/input
    UIElement thought = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_0_correct_true')]");//*[@id="client_seo_review_review_fields_attributes_0_correct_true"]
    UIElement rework = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_seo_review\"]/div[4]/input[2]");//*[@id="client_seo_review_review_fields_attributes_0_correct_true"]


    public void clickStartWorkingButtonSeo() {
        tDriver.myclicking(startWorking);
    }

    public void uploadAuditDoc() {
        tDriver.mytxtupload(auditDoc);
    }

    public void clickSaveSeoaudit() {
        tDriver.myclicking(saveInput);
    }

    public void selectAuditDocSuff() {
        tDriver.myclicking(auditSuff);
    }

    public void rateTheOutputSeoaudit() {
        tDriver.myclicking(rateOutput);
    }

    public void clickDeliverSeoaudit() {
        tDriver.myclicking(deliver);
    }

    public void selectThoughtProcessSuffSeo() {
        tDriver.myclicking(thought);
    }

    public void clickReworkButtonSeo() {
        tDriver.myclicking(rework);
    }
}
