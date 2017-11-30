package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class WebMailerAddPage extends BasePage{

    UIElement URL = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_mailer\"]/div[1]/div/div/div/input");
    UIElement contentDoc = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_mailer_content_emailer_doc\"]");
    UIElement designDoc = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_mailer_design_emailer_doc\"]");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_mailer\"]/div[5]/input");
    UIElement savePublish = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_mailer\"]/div[5]/input");
    UIElement status = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"edit_client_development_task_598d51bf5461f40e10dca2f8\"]/div[5]/div/div/div/div[1]");
    UIElement update = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"edit_client_development_task_598d51bf5461f40e10dca2f8\"]/div[9]/input");
    UIElement radioContent = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_review_review_fields_attributes_7_correct_true\"]");
    UIElement radioDesign = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_review_review_fields_attributes_8_correct_true\"]");
    UIElement radioImage = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_review_review_fields_attributes_9_correct_true\"]");
    UIElement contentEmailer = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_mailer\"]/div[2]/div[2]/div/div[1]/div/div/div[1]");//*[@id="new_client_development_mailer"]/div[3]/div[2]/div/div[1]/div/div/div[1]
    UIElement designEmailer = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_mailer\"]/div[3]/div[2]/div/div[1]/div/div/div[1]");
    UIElement accordion = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_mailer\"]/div[1]/div/div/div/span/a/i");
    UIElement suffContent = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_10_correct_true')]");
    UIElement suffDesign = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_11_correct_true')]");

    public void enterDestinationURL(String arg0) {
        tDriver.mytype(URL,arg0);
    }

    public void uploadContentDoc() {
        tDriver.mytxtupload(contentDoc);

    }

    public void uploadDesignDoc() {
        tDriver.mytxtupload(designDoc);
    }

    public void clickSaveWeb() {
        tDriver.myclicking(save);
    }

    public void clickSavePublishWeb() {
        tDriver.mytasktype(savePublish);
    }

    public void selectStatusWebmailer() {
        tDriver.mywait(status);
    }

    public void clickUpdateWebmailer() {
        tDriver.myclicking(update);
    }

    public void selectRadioContentDoc() {
        tDriver.myclicking(radioContent);
    }

    public void selectRadioDesignDoc() {
        tDriver.myclicking(radioDesign);
    }

    public void selectRadioImageSlices() {
        tDriver.myclicking(radioImage);
    }

    public void enterContentEmailerReferenceTask() {
        tDriver.myReferencedContentEmailer(contentEmailer);
    }

    public void enterDesignEmailerReferenceTask() {
        tDriver.myReferencedDesignEmailer(designEmailer);
    }


    public void clickAccordionURL() {
        tDriver.myclicking(accordion);
    }

    public void selectContentEmailerSuffInfo() {
        tDriver.myclicking(suffContent);
    }

    public void selectDesignEmailerSuffInfo() {
        tDriver.myclicking(suffDesign);
    }
}
