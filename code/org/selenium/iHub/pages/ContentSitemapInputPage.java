package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentSitemapInputPage extends BasePage {

    UIElement name = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_name')]");
    UIElement brief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_brief')]");
    UIElement referenceTask = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_sitemap\"]/div[3]/div[1]/div/div/div/div[1]");//*[@id="new_client_content_blogpost"]/div[1]/div[1]/div/div/div/div[1]
    UIElement USPs = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_sitemap\"]/div[4]/div/div/div/div/div/input");
    UIElement accordion = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_sitemap\"]/div[4]/div/div/div/div/div/span/a/i");
    UIElement minAge = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_target_group_attributes_min_age')]");
    UIElement maxAge = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_target_group_attributes_max_age')]");
    UIElement geos = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_sitemap\"]/div[6]/div[10]/div/div/div/div[1]");
    UIElement microGeos = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_sitemap\"]/div[6]/div[11]/div/div/div/div[1]");
    UIElement trying = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_target_group_attributes_target_audience')]");
    UIElement saveInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_sitemap\"]/div[6]/input");//*[@id="new_client_content_sitemap"]/div[6]/input
    UIElement rateInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[10]/div/div/a[4]");

    public void enterNameContentSitemap(String arg0) {
        tDriver.mytype(name,arg0);
    }

    public void enterContentBriefContentSitemap(String arg0) {
        tDriver.mytype(brief,arg0);
    }

    public void enterCampaignPlanReferenceTask() {
        tDriver.mytasktype(referenceTask);
    }

    public void enterUSPs(String arg0) {
        tDriver.mytype(USPs,arg0);
    }

    public void clickUSPAccordion() {
        tDriver.myclicking(accordion);
    }

    public void enterMininumAge(String arg0) {
        tDriver.mytype(minAge,arg0);
    }

    public void enterMaximumAge(String arg0) {
        tDriver.mytype(maxAge,arg0);
    }

    public void selectGenderMale() {
        tDriver.mygendermale();
    }

    public void enterGeos(String arg0) {
        tDriver.mygeos(geos,arg0);
    }

    public void enterMicroGeos(String arg0) {
        tDriver.mymicrogoes(microGeos,arg0);
    }

    public void enterWhoAreYouTryingToReach(String arg0) {
        tDriver.mytype(trying,arg0);
    }

    public void selectWhatDoYouWantYourTgToDoContent() {
        tDriver.mytgcontentblogpost();
    }

//    public void clickSaveButtonContentSitemap() {
//        tDriver.myclicking(save);
//    }

    public void clickSaveButtonContentSitemapInput() {
        tDriver.myclicking(saveInput);
    }

    public void rateTheBriefContentSitemapInput() {
        tDriver.myclicking(rateInput);
    }
}
