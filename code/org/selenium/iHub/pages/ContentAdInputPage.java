package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentAdInputPage extends BasePage {

    UIElement related = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_task\"]/div[3]/div/div/div/div[1]");//*[@id="new_client_content_task"]/div[3]/div/div/div/div[1]
    UIElement save = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_task\"]/div[7]/input");
    UIElement usps = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_ad_communication\"]/div[1]/div/div/div/input");
    UIElement offer = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_ad_communication\"]/div[2]/div/div/div/input");
    UIElement project = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_ad_communication\"]/div[3]/div[1]/div[1]");
    UIElement tags = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_ad_communication\"]/div[4]/div/div[1]");
    UIElement trying = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_ad_communication_target_group_attributes_target_audience\"]");
    UIElement tg = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_ad_communication\"]/div[5]/div[13]/div/div[1]");
    UIElement saveButton = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_ad_communication\"]/div[6]/input[1]");
    UIElement updateTask = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[7]/input");
    UIElement savePublish = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_ad_communication\"]/div[6]/input[2]");
    UIElement uspsSuff = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_5_correct_true\"]");
    UIElement offersSuff = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_6_correct_true\"]");
    UIElement tagsSuff = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_7_correct_true\"]");
    UIElement productSuff = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_8_correct_true\"]");
    UIElement targetSuff = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_9_correct_true\"]");
    UIElement rate = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[15]/div/div/a[4]");//*[@id="new_client_content_review"]/div[14]/div/div/a[4]
    UIElement accept = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[12]/a");
    UIElement request = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[12]/input");
    UIElement saveInput = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_ad_communication\"]/div[10]/input");
    UIElement websiteURL = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_ad_communication_website_url\"]");
    UIElement refTask = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_ad_communication\"]/div[7]/div[2]/div/div/div/div/div[1]");

    public void selectRelatedTask() {
        tDriver.mywait(related);
    }

    public void saveAndAddContentBrief() {
        tDriver.myclicking(save);
    }

    public void enterUsps() {
        tDriver.mycontentadusps(usps);
    }

    public void enterOffer() {
        tDriver.mywait(offer);
    }

    public void enterClientProject() {
        tDriver.mywait(project);
    }

    public void addTags() {
        tDriver.mycontentadtags(tags);
    }

    public void enterWhoAreYouTryingToReach() {
        tDriver.mywait(trying);
    }

    public void selectTgToDoContentAd() {
        tDriver.mywait(tg);
    }

    public void clickSaveButtonContentAdInput() {
        tDriver.mywait(saveButton);
    }

    public void changeTheStatusToPublish() {
        tDriver.mypublish();
    }

    public void clickUpdateTaskToPublish() {
        tDriver.myclicking(updateTask);
    }

    public void clickSaveAndPublishButtonContentAdInput() {
        tDriver.mywait(savePublish);
    }

    public void selectUspsSuff() {
        tDriver.myclicking(uspsSuff);
    }

    public void selectOffersSuff() {
        tDriver.myclicking(offersSuff);
    }

    public void selectTagsSuff() {
        tDriver.myclicking(tagsSuff);
    }

    public void selectProductSuffInfo() {
        tDriver.myclicking(productSuff);
    }

    public void selectTargetGroupInfo() {
        tDriver.myclicking(targetSuff);
    }

    public void rateTheInputBriefContentAd() {
        tDriver.myclicking(rate);
    }

    public void clickAcceptContentAd() {
        tDriver.myclicking(accept);
    }

    public void selectRequestChanges() {
        tDriver.myclicking(request);
    }

    public void clickSaveButtonContentAdCommunication() {
        tDriver.myclicking(saveInput);
    }

    public void enterWebsiteURLContentAd(String arg0) {
        tDriver.mytype(websiteURL,arg0);
    }

    public void selectMediaPlanTaskReference() {
        tDriver.myContentAdMediaPlanRefTask(refTask);
    }
}
