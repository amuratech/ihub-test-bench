package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 12/2/18.
 */
public class MarketingReportInputPage extends BasePage{

    UIElement seoReport = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_report\"]/div[2]/div[2]/div/div/div/div/div[1]");
    UIElement socialReport = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_report\"]/div[3]/div[2]/div/div/div/div/div[1]");
    UIElement campaignReport = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_report\"]/div[4]/div[2]/div/div/div/div/div[1]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_report\"]/div[6]/input");
    UIElement rateInput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_review\"]/div[12]/div/div/a[5]");


    public void selectSEOReportTaskReference() {
        tDriver.myMarketingReportSEOReportRef(seoReport);
    }

    public void selectSocialReportTaskReference() {
        tDriver.myMarketingReportSocialReportRef(socialReport);
    }

    public void selectCampaignReportTaskReference() {
        tDriver.myMarketingReportCampaignReportRef(campaignReport);
    }

    public void clickSaveButtonMarketingReportInput() {
        tDriver.myclicking(save);
    }

    public void rateTheInputBriefMarketingReport() {
        tDriver.myclicking(rateInput);
    }


}
