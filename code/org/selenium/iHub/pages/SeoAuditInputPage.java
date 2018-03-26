package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SeoAuditInputPage extends BasePage {

    UIElement savePublish = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_seo_audit\"]/div[3]/input[2]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_seo_audit\"]/div[4]/input");
    UIElement req = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_seo_audit\"]/div[1]/div/div/div/div[1]");
    UIElement suffURL = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_seo_review_review_fields_attributes_5_correct_true\"]");
    UIElement suffReq = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_seo_review_review_fields_attributes_6_correct_true\"]");
    UIElement accept = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_seo_review\"]/div[9]/a");
    UIElement rate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_seo_review\"]/div[9]/div/div/a[4]");
    UIElement url = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_seo_audit_url\"]");

    public void clickOnSaveAndPublishSeoaudit() {
        tDriver.myclicking(savePublish);

    }

    public void clickSaveSeoaudit() {
        tDriver.myclicking(save);
    }

    public void selectRequirements() {
        tDriver.myseorequirements(req);
    }

    public void selectURLSuff() {
        tDriver.myclicking(suffURL);
    }

    public void selectReqSuff() {
        tDriver.myclicking(suffReq);
    }

    public void clickAcceptSeoaudit() {
        tDriver.myclicking(accept);
    }

    public void rateInputBriefSeoaudit() {
        tDriver.myclicking(rate);
    }

    public void enterURL(String arg0) {
        tDriver.mytype(url,arg0);
    }
}
