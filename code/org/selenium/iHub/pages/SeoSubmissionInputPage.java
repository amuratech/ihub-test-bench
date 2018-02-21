package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SeoSubmissionInputPage extends BasePage {

    UIElement type = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_seo_submission\"]/div[1]/div/div/div/div[1]");
    UIElement inputTask = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_seo_submission\"]/div[2]/div/div/div/div[1]");
    UIElement savePublish = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_seo_submission\"]/div[4]/input[1]");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_seo_submission\"]/div[3]/input");
    UIElement upload = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_seo_submission_client_content_task_doc\"]");
    UIElement refDoc = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div/div[2]/div/div/div[3]/div/input");
    UIElement rateInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_seo_review\"]/div[8]/div/div/a[4]");

    public void selectType() {
        tDriver.mywait(type);
    }

    public void selectAnInputTask() {
        tDriver.mywait(inputTask);
    }

    public void clickOnSaveAndPublishSeosubmission() {
        tDriver.myclicking(savePublish);
    }

    public void clickSaveSeosubmission() {
        tDriver.myclicking(save);
    }

    public void uploadContentReferenceDoc() {
        tDriver.mytxtupload(upload);
    }

    public void uploadReferenceDoc() {
        tDriver.mytxtupload(refDoc);
    }

    public void rateTheInputSEOSubmissionInput() {
        tDriver.myclicking(rateInput);
    }


}
