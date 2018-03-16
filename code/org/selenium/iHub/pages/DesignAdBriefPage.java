package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class DesignAdBriefPage extends BasePage {

    UIElement project= new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_ad\"]/div[1]/div[1]/div[1]");
    UIElement ad = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_ad\"]/div[3]/div/div[1]");
    UIElement copyDoc = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_ad_content_ad_communication_doc\"]");//*[@id="client_design_ad_ad_copy_document"]
    UIElement trying = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_ad_target_group_attributes_target_audience\"]");
    UIElement tg = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_ad\"]/div[5]/div[13]/div/div[1]");
    UIElement publish = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_ad\"]/div[7]/input");//*[@id="new_client_design_ad"]/div[7]/input
    UIElement refLinks = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_5_correct_true\"]");
    UIElement adButton = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_6_correct_true\"]");
    UIElement adCopy = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_7_correct_true\"]");
    UIElement target = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_8_correct_true\"]");
    UIElement product = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_9_correct_true\"]");
    UIElement ref = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_10_correct_true\"]");
    UIElement adAccept = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[13]/a");
    UIElement rating = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[11]/div/div/a[4]    ");
    UIElement adRefTask = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_ad\"]/div[4]/div[2]/div/div/div/div/div[1]");

    public void enterTheProjectName() {
        tDriver.mytasktype(project);
    }

    public void enterAdFormat() {
        tDriver.myadformat(ad);
    }

    public void uploadAdCopyDoc() {
        tDriver.mytxtupload(copyDoc);
    }

    public void enterTryingAd() {
        tDriver.mywait(trying);
    }

    public void selectTgAd() {
        tDriver.mywait(tg);
    }

    public void clickSaveButtonDesignAdInput() {
        tDriver.myclicking(publish);
    }


    public void refLinks() {
        tDriver.myclicking(refLinks);
    }

    public void adRadioButton() {
        tDriver.myclicking(adButton);
    }

    public void adCopy() {
        tDriver.myclicking(adCopy);
    }

    public void targetRadioButton() {
        tDriver.myclicking(target);
    }

    public void productRadioButton() {
        tDriver.myclicking(product);
    }

    public void refImages() {
        tDriver.myclicking(ref);
    }


    public void giveRating() {
        tDriver.myclicking(rating);
    }

    public void clickAdAcceptButton() {
        tDriver.myclicking(adAccept);
    }

    public void selectAdCommunicationContentTaskReference() {
        tDriver.myDesignAdCommunicationContentRefTask(adRefTask);
    }
}
