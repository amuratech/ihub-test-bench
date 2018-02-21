package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 13/2/18.
 */
public class MarketingReportOutputPage extends BasePage{
    UIElement campaignInferences = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_report_output\"]/div[1]/div/div/div/div[3]/div[2]");
    UIElement strategicInferences = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_report_output\"]/div[2]/div/div/div/div[3]/div[2]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_report_output\"]/div[4]/input");
    UIElement reportDoc = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[2]/div/div/div[3]/div/input");
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_review\"]/div[9]/div/div/a[4]");

    public void enterCampaignInferences(String arg0) {
        tDriver.mytype(campaignInferences,arg0);
    }

    public void enterStrategicInferences(String arg0) {
        tDriver.mytype(strategicInferences,arg0);
    }


    public void clickSaveButtonMarketingReportOutput() {
        tDriver.myclicking(save);

    }

    public void uploadReportDocumentMarketingReportOutput(){
        tDriver.mytxtupload(reportDoc);
    }

    public void rateTheOutputMarketingReportOutput() {
        tDriver.myclicking(rateOutput);
    }
}
