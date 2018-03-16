package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class WebCustomizedAddPage extends BasePage {

    UIElement name = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_customized_requirement_name\"]");
    UIElement brief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_customized_requirement\"]/div[2]/div/div[3]/div[2]");
    UIElement reqType = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_customized_requirement\"]/div[3]/div/div[1]");
    UIElement reqDoc = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_customized_requirement_requirement_doc\"]");
    UIElement savePublish = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_customized_requirement\"]/div[3]/input");
    UIElement radioReqType = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_review_review_fields_attributes_7_correct_true\"]");
    UIElement radioReqDoc = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_review_review_fields_attributes_8_correct_true\"]");
    UIElement rate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[8]/div/div/a[4]");
    UIElement accept = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[11]/a");

    public void enterNameInputWebcustomized() {
        tDriver.mywait(name);
    }

    public void enterBriefInputWebcustomized() {
        tDriver.mywait(brief);
    }

    public void enterRequirementTypeWebcustomized() {
        tDriver.mywait(reqType);
    }

    public void uploadRequirementDocWebcustomized() {
        tDriver.mytxtupload(reqDoc);
    }

    public void clickSaveAndPublishWebcustomized() {
        tDriver.myclicking(savePublish);
    }

    public void selectRequirementTypeWebmaintenance() {
        tDriver.myclicking(radioReqType);
    }

    public void selectRequirementDocWebmaintenance() {
        tDriver.myclicking(radioReqDoc);
    }

    public void rateTheBriefWebcustomized() {
        tDriver.myclicking(rate);
    }

    public void clickAcceptWebcustomized() {
        tDriver.myclicking(accept);
    }
}
