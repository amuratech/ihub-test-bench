package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentAdOutputPage extends BasePage{

    UIElement startWorking = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[8]/input");//*[@id="edit_client_content_task_59967c8b5461f4287c21c3c1"]/div[8]/input
    UIElement thought = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_ad_communication_output_thought_process\"]");//*[@id="edit_client_content_task_59967c8b5461f4287c21c3c1"]/div[8]/input
    UIElement upload = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_ad_communication_output_ad_content_document\"]");//*[@id="edit_client_content_task_59967c8b5461f4287c21c3c1"]/div[8]/input
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_ad_communication_output\"]/div[4]/input");//*[@id="edit_client_content_task_59967c8b5461f4287c21c3c1"]/div[8]/input
    UIElement updateTask = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[8]/input");//*[@id="edit_client_content_task_59967c8b5461f4287c21c3c1"]/div[8]/input
    UIElement adContentSuff = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_0_correct_true\"]");
    UIElement thoughtSuff = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_1_correct_true\"]");//*[@id="edit_client_content_task_59967c8b5461f4287c21c3c1"]/div[8]/input
    UIElement rate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[11]/div/div/a[4]");//*[@id="edit_client_content_task_59967c8b5461f4287c21c3c1"]/div[8]/input
    UIElement deliver = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[4]/input[1]");//*[@id="edit_client_content_task_59967c8b5461f4287c21c3c1"]/div[8]/input
    UIElement rework = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[4]/input[2]");//*[@id="edit_client_content_task_59967c8b5461f4287c21c3c1"]/div[8]/input
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[7]/div/div/a[4]");//*[@id="edit_client_content_task_59967c8b5461f4287c21c3c1"]/div[8]/input

    public void clickStartWorkingButtonContentAd() {
        tDriver.myclicking(startWorking);
    }

    public void enterThoughtProcessContentAd(String arg0) {
        tDriver.mytype(thought,arg0);
    }

    public void uploadAdContentDoc() {
        tDriver.mytxtupload(upload);
    }

    public void clickSaveButtonContent() {
        tDriver.myscreenshot2(save);
    }

    public void clickUpdateTaskButtonContent() {
        tDriver.myclicking(updateTask);
    }

    public void selectAdContentDocSuff() {
        tDriver.myclicking(adContentSuff);
    }

    public void selectThoughtProcessSuffContentAd() {
        tDriver.myclicking(thoughtSuff);
    }

    public void rateTheOutputContentAd() {
        tDriver.myclicking(rate);
    }

    public void clickDeliverContentAd() {
        tDriver.myclicking(deliver);
    }

    public void clickReworkContentAd() {
        tDriver.myclicking(rework);
    }

    public void reviewTheOutputContentAdCommunication() {
        tDriver.myclicking(rateOutput);
    }
}
