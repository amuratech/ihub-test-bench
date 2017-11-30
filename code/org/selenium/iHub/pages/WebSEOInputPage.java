package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class WebSEOInputPage extends BasePage{

    UIElement URL = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_url')]");//*[@id="client_seo_audit_url"]
    UIElement title = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_seo_update_title\"]");//*[@id="client_content_meta_description_meta_description_models_attributes_1509364932848_suggestions"]
    UIElement keywords = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_seo_update\"]/div[3]/div/div/div/input");
    UIElement accordion = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_seo_update\"]/div[3]/div/div/div/span");
    UIElement metaDesc = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_meta_description')]");//*[@id="new_client_content_meta_description_output"]/div[1]/div[2]/div/div/div[2]/div/div/div/div[3]/div[2]
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_seo_update\"]/div[6]/input");
    UIElement savePublish = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_seo_update\"]/div[5]/input[2]");
    UIElement radioURL = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_6_correct_true')]");
    UIElement radioTitle = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_7_correct_true')]");
    UIElement radioKeywords = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_8_correct_true')]");
    UIElement radioDesc = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_9_correct_true')]");
    UIElement brief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[9]/div/div/a[4]");
    UIElement accept = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[12]/a");//*[@id="new_client_development_review"]/div[11]/a
    UIElement start = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"edit_client_development_task_598c60675461f40e10dca058\"]/div[10]/input");


//    public void enterURL() {
//        tDriver.mywait(URL);
//    }
//
//    public void enterTitle() {
//        tDriver.mywait(title);
//    }

//    public void enterMetaKeywords() {
//        tDriver.mytasktype(keywords);
//    }
//
//    public void enterMetaDesc() {
//        tDriver.mywait(metaDesc);
//    }

    public void clickSaveButtonWebseo() {
        tDriver.myclick(save);
    }

    public void clickSaveAndPublishWebseo() {
        tDriver.mytasktype(savePublish);
    }

    public void selectRadioURL() {
        tDriver.myclicking(radioURL);
    }

    public void selectRadioTitle() {
        tDriver.myclicking(radioTitle);
    }

    public void selectRadioKeywords() {
        tDriver.myclicking(radioKeywords);
    }

    public void selectRadioDesc() {
        tDriver.myclicking(radioDesc);
    }

    public void ratingTheBrief() {
        tDriver.myclicking(brief);
    }

    public void clickTheAccept() {
        tDriver.myclicking(accept);
    }

    public void clickStartWorking() {
        tDriver.mywait(start);
    }


    public void enterURLWebSEO(String arg0) {
        tDriver.mytype(URL,arg0);
    }

    public void enterMetaTitle(String arg0) {
        tDriver.mytype(title,arg0);
    }

    public void enterMetaKeywords(String arg0) {
        tDriver.mytype(keywords,arg0);
    }

    public void clickAccordionMetaKeywords() {
        tDriver.myclicking(accordion);
    }

    public void enterMetaDesc(String arg0) {
        tDriver.mytype(metaDesc,arg0);
    }

    public void clickSaveAndPublishLaterButtonWebSEO() {
        tDriver.myclicking(save);
    }
}
