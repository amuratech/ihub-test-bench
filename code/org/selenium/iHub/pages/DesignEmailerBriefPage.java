package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class DesignEmailerBriefPage extends BasePage{

    UIElement product = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_emailer\"]/div[1]/div[1]/div[1]");//*[@id="new_client_design_print_medium"]/div[1]/div[1]/div[1]
    UIElement subType = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_emailer\"]/div[2]/div/div[1]");
    UIElement trying = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_emailer_target_group_attributes_target_audience\"]");
    UIElement objective = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_emailer\"]/div[9]/div[13]/div/div[1]");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_emailer\"]/div[10]/input");
    UIElement emailerType = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_5_correct_true\"]");
    UIElement form = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_6_correct_true\"]");
    UIElement content = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_7_correct_true\"]");
    UIElement subject = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_8_correct_true\"]");
    UIElement footer = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_9_correct_true\"]");
    UIElement disclaimer = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_10_correct_true\"]");
    UIElement offline = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_11_correct_true\"]");
    UIElement target = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_12_correct_true\"]");
    UIElement productSuff = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_13_correct_true\"]");
    UIElement rating = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[14]/div/div/a[4]");
    UIElement accept = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[16]/a");
    UIElement offlineCreative = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_emailer_offline_creative\"]");
    UIElement contentEmailer = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_emailer_content_emailer_doc\"]");
    UIElement contentRefTask = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_emailer\"]/div[7]/div[2]/div/div/div/div/div[1]");
    UIElement rateOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[11]/div/div/a[4]");


    public void enterEmailerProductName() {
        tDriver.mywait(product);
    }

    public void selectEmailerSubType() {
        tDriver.myclicking(subType);
    }

    public void enterEmailerTrying() {
        tDriver.mywait(trying);
    }

    public void selectTgObjective() {
        tDriver.myclicking(objective);
    }

    public void clickSaveButtonDesignEmailer() {
        tDriver.myclicking(save);
    }

    public void emailerType() {
        tDriver.myclicking(emailerType);
    }

    public void form() {
        tDriver.myclicking(form);
    }

    public void content() {
        tDriver.myclicking(content);
    }

    public void subject() {
        tDriver.myclicking(subject);
    }

    public void footer() {
        tDriver.myclicking(footer);
    }

    public void disclaimer() {
        tDriver.myclicking(disclaimer);
    }

    public void offlineCreative() {
        tDriver.myclicking(offline);
    }

    public void targetGroup() {
        tDriver.myclicking(target);
    }

    public void productSuff() {
        tDriver.myclicking(productSuff);
    }

    public void rating() {
        tDriver.myclicking(rating);
    }

    public void acceptButton() {
        tDriver.myclicking(accept);
    }

    public void uploadOfflineCreative() {
        tDriver.myjpgupload(offlineCreative);
    }

    public void uploadContentEmailerReferenceDoc() {
        tDriver.myjpgupload(contentEmailer);
    }

    public void showTheCount() {
        tDriver.mydashboard();
    }

    public void selectEmailerContentTaskReferenceDesignEmailer() {
        tDriver.myDesignEmailerContentRefTask(contentRefTask);
    }

    public void rateTheOutputDesignEmailer() {
        tDriver.myclicking(rateOutput);
    }
}
