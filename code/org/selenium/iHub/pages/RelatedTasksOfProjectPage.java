package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 23/11/17.
 */
public class RelatedTasksOfProjectPage extends BasePage{

//    UIElement initialCampaign = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[9]/div[2]/table/tbody/tr/td[1]/a");//*[@id="page-content-wrapper"]/div[2]/div/div[1]/div[9]/div[2]/table/tbody/tr/td[1]/a
//    UIElement mediaPlan = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[9]/div[2]/table/tbody/tr/td[1]/a");//*[@id="page-content-wrapper"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr[1]/td[1]/a
//    UIElement advertisingInvoice = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[9]/div[2]/table/tbody/tr/td[1]/a");
//    UIElement sitemap = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[9]/div[2]/table/tbody/tr/td[1]/a");
//    UIElement content = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr[1]/td[1]/a");
//    UIElement adCommunication = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr[1]/td[1]/a");
//    UIElement designWebsite = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr[1]/td[1]/a");
//    UIElement adDesign = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr/td[1]/a");
//    UIElement website = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr/td[1]/a");
//    UIElement campaign = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr/td[1]/a");
    UIElement tasks = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[9]/div[2]/table/tbody/tr/td[1]/a");//*[@id="page-content-wrapper"]/div[2]/div/div[1]/div[9]/div[2]/table/tbody/tr/td[1]/a

    public void clickSubmitInitialCampaignBriefTask() {
        tDriver.myclicking(tasks);
    }

    public void testingSubmitMediaPlan() {
        tDriver.myclicking(tasks);
    }

    public void clickOnTestingGenerateAdvertisingInvoice() {
        tDriver.myclicking(tasks);
    }

    public void clickOnTestingGenerateSitemap() {
        tDriver.myclicking(tasks);
    }

    public void clickOnTestingContentForLP() {
        tDriver.myclicking(tasks);
    }

    public void clickOnTestingRequestForAdCommunication() {
        tDriver.myclicking(tasks);
    }

    public void clickTestingRequestWebsiteDesign() {
        tDriver.myclicking(tasks);
    }

    public void clickTestingRequestForAdDesign() {
        tDriver.myclicking(tasks);
    }

    public void testingRequestForWebsiteDevelopment() {
        tDriver.myclicking(tasks);
    }

    public void clickTestingRequestForCampaignExecution() {
        tDriver.myclicking(tasks);
    }
}
