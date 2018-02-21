package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 23/11/17.
 */
public class RelatedTasksOfProjectPage extends BasePage{

    UIElement initialCampaign = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr/td[1]/a");//*[@id="page-content-wrapper"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr/td[1]/a
    UIElement mediaPlan = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr/td[1]/a");//*[@id="page-content-wrapper"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr[1]/td[1]/a
    UIElement advertisingInvoice = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr[1]/td[1]/a");
    UIElement sitemap = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr[1]/td[1]/a");
    UIElement content = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr[1]/td[1]/a");
    UIElement adCommunication = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr[1]/td[1]/a");
    UIElement designWebsite = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr[1]/td[1]/a");
    UIElement adDesign = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr/td[1]/a");
    UIElement website = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr/td[1]/a");
    UIElement campaign = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr/td[1]/a");

    public void clickSubmitInitialCampaignBriefTask() {
        tDriver.myclicking(initialCampaign);
    }

    public void testingSubmitMediaPlan() {
        tDriver.myclicking(mediaPlan);
    }

    public void clickOnTestingGenerateAdvertisingInvoice() {
        tDriver.myclicking(advertisingInvoice);
    }

    public void clickOnTestingGenerateSitemap() {
        tDriver.myclicking(sitemap);
    }

    public void clickOnTestingContentForLP() {
        tDriver.myclicking(content);
    }

    public void clickOnTestingRequestForAdCommunication() {
        tDriver.myclicking(adCommunication);
    }

    public void clickTestingRequestWebsiteDesign() {
        tDriver.myclicking(designWebsite);
    }

    public void clickTestingRequestForAdDesign() {
        tDriver.myclicking(adDesign);
    }

    public void testingRequestForWebsiteDevelopment() {
        tDriver.myclicking(website);
    }

    public void clickTestingRequestForCampaignExecution() {
        tDriver.myclicking(campaign);
    }
}
