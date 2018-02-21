package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class CampaignExecutionInputPage extends BasePage {

    UIElement project = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_execution\"]/div[1]/div/div/div[1]/div[1]");
    UIElement refCopyIdea = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_execution\"]/div[2]/div/div/div[1]/div[1]");
    UIElement refwebdevelopment = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_execution\"]/div[3]/div/div/div[1]/div[1]");
    UIElement URL = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[@id=\"client_campaign_execution_website_url\"]");//*[@id="client_campaign_execution_website_url"]
    UIElement refDesignAd = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_execution\"]/div[5]/div/div/div[1]/div[1]");
    UIElement refMediaPlan = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_execution\"]/div[6]/div/div/div[1]/div[1]");
    UIElement refContentAd = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_execution\"]/div[7]/div/div/div[1]/div[1]");
    UIElement save = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_execution\"]/div[8]/input[1]");
    UIElement savePublish = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_execution\"]/div[8]/input[2]");
    UIElement suffWebisteURL = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[contains(@id,'_5_correct_true')]");
    UIElement suffProduct = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[contains(@id,'_6_correct_true')]");
    UIElement suffCopyIdea = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[contains(@id,'_7_correct_true')]");
    UIElement suffWebsite = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[contains(@id,'_8_correct_true')]");
    UIElement suffDesign = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[contains(@id,'_9_correct_true')]");
    UIElement suffMediaPlan = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[contains(@id,'_10_correct_true')]");
    UIElement suffContentAd = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[contains(@id,'_11_correct_true')]");
    UIElement rateInput = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_review\"]/div[39]/div/div/a[4]");
    UIElement accept = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_review\"]/div[14]/a");
    UIElement url = new UIElement(UIType.ListBox, UILocatorType.Xpath,"//*[@id=\"client_campaign_execution_website_url\"]");

    public void selectClientProjectCampaign() {
        tDriver.mywait(project);
    }

    public void searchAndSelectClientCopyIdeaTask() {
        tDriver.mywait(refCopyIdea);
    }

    public void searchAndSelectWebsiteDevelopmentTask() {
        tDriver.mywait(refwebdevelopment);
    }

    public void enterWebsiteURL(String arg0) {
        tDriver.mytype(URL,arg0);
    }

    public void searchAndSelectDesignAdTask() {
        tDriver.mywait(refDesignAd);
    }

    public void searchAndSelectMediaPlanTask() {
        tDriver.mywait(refMediaPlan);
    }

    public void searchAndSelectContentAdTask() {
        tDriver.mywait(refContentAd);
    }

    public void clickSaveButtonCampaignInput() {
        tDriver.myclicking(save);
    }

    public void clickSaveAndPublishButtonCampaignInput() {
        tDriver.myclicking(savePublish);
    }

    public void selectWebsiteURLSuffInfoRadioButton() {
        tDriver.myclicking(suffWebisteURL);
    }

    public void selectProductSuffInfoRadioButton() {
        tDriver.myclicking(suffProduct);
    }

    public void selectCopyIdeaSuffInfoRadioButton() {
        tDriver.myclicking(suffCopyIdea);
    }

    public void selectWebsiteSuffInfoRadioButton() {
        tDriver.myclicking(suffWebsite);
    }

    public void selectDesignAdSuffInfoRadioButton() {
        tDriver.myclicking(suffDesign);
    }

    public void selectMediaPlanSuffInfoRadioButton() {
        tDriver.myclicking(suffMediaPlan);
    }

    public void selectContentAdSuffInfoRadioButton() {
        tDriver.myclicking(suffContentAd);
    }

    public void rateTheInputBriefCampaignExecution() {
        tDriver.myclicking(rateInput);
    }

    public void clickAcceptButtonCampaignExecution() {
        tDriver.myclicking(accept);
    }

    public void enterLandingPageURL() {
        tDriver.myEnter(url);
    }
}
