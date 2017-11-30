package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentMetaDescriptionInputPage extends BasePage {

    UIElement rateInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[7]/div/div/a[4]");
    UIElement metaTitle = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_suggestions')]");
    UIElement url = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_url')]");
    UIElement keywords = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_meta_description\"]/div[1]/div[2]/div/div/div[4]/div/div/div/div/input");//*[@id="new_client_content_seo_plan"]/div[2]/div[2]/div/div/div[3]/div/div/div/div/input
    UIElement saveInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_meta_description\"]/div[3]/input");

    public void rateTheBriefContentMetaDescription() {
        tDriver.myclicking(rateInput);
    }

    public void enterMetaTitleContentMetaDescription(String arg0) {
        tDriver.mytype(metaTitle,arg0);
    }

    public void enterURLContentMetaDescription(String arg0) {
        tDriver.mytype(url,arg0);
    }

    public void enterKeywords() {
        tDriver.mycontentmetadescriptionkeywords(keywords);
    }


    public void clickSaveButtonContentMetaDescription() {
        tDriver.myclicking(saveInput);
    }
}

