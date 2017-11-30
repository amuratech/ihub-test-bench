package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 21/7/17.
 */
public class DesignReviewPage extends BasePage{

    UIElement actionReview = new UIElement(UIType.Button, UILocatorType.Xpath,"");
    UIElement sufName = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_0_correct_true\"]");//*[@id="client_development_review_review_fields_attributes_0_correct_true"]
    UIElement insufDesc = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_1_comments\"]");//*[@id="client_design_review_review_fields_attributes_1_correct_false"]
    UIElement sufDate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_2_correct_true\"]");
    UIElement sufPurpose = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_3_correct_true\"]");
    UIElement sufType= new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_6_correct_true\"]");
    UIElement sufDevice = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_6_correct_true')]");
    UIElement sufRef = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_7_correct_true')]");
    UIElement sufCta= new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_8_correct_true')]");
    UIElement sufUsps = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_9_correct_true')]");
    UIElement sufTags = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_10_correct_true')]");
    UIElement sufSitemap = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_12_correct_true\"]");
    UIElement sufFunc = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_13_correct_true')]");
    UIElement sufTarget = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_15_correct_true')]");
    UIElement rate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[15]/div/div/a[4]");//*[@id="new_client_design_review"]/div[14]/div/div/a[4]
    UIElement changeRequest = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[15]/input");
    UIElement accept = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"move_forward\"]");
    UIElement product = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_16_correct_true')]");
    UIElement timeSlot = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_4_correct_true\"]");
    UIElement reference = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_14_correct_true')]");

    public void selectActionReview() {
        tDriver.myaction(actionReview);
    }

    public void selectNameWithSufficientInfo() {
        tDriver.myclicking(sufName);
    }

    public void descriptionWithInsufficientInfo() {
        tDriver.mywait(insufDesc);
    }

    public void dueDateWithSufficient() {
        tDriver.myclicking(sufDate);
    }

    public void purposesWithSufficientInfo() {
        tDriver.myclicking(sufPurpose);
    }

    public void typeWithSufficientInfo() {
        tDriver.myclicking( sufType);
    }

    public void devicesWithInfo() {
        tDriver.myclicking(sufDevice);
    }

    public void referenceInfo() {
        tDriver.myclicking(sufRef);
    }

    public void ctaInfo() {
        tDriver.myclicking(sufCta);
    }

    public void uspsInfo() {
        tDriver.myclicking(sufUsps);
    }

    public void tagsInfo() {
        tDriver.myclicking(sufTags);
    }

    public void sitemapInfo() {
        tDriver.myclicking(sufSitemap);
    }

    public void funcInfo() {
        tDriver.myclicking(sufFunc);
    }

    public void targetInfo() {
        tDriver.myclicking(sufTarget);
    }

    public void rate() {
        tDriver.myclicking(rate);
    }

    public void accept() {
        tDriver.myclicking(accept);
    }

    public void changeRequest() {
        tDriver.myclick(changeRequest);
    }

    public void product() {
        tDriver.mywait(product);
    }

    public void timeSlot() {
        tDriver.mywait(timeSlot);
    }

    public void referenceImages() {
        tDriver.mywait(reference);
    }
}
