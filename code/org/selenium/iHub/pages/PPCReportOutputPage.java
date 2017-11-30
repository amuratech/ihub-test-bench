package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class PPCReportOutputPage extends BasePage {

    UIElement optimization = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_report_output\"]/div[1]/div/div/div/div[3]/div[2]");
    UIElement observations = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_report_output\"]/div[2]/div/div/div/div[3]/div[2]");
    UIElement reportDoc = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_campaign_report_output_report_document\"]");
    UIElement saveOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_report_output\"]/div[5]/input");
    UIElement rateOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_review\"]/div[7]/div/div/a[4]");

    public void enterOptimizationsUndertaken(String arg0) {
        tDriver.mytype(optimization,arg0);
    }

    public void enterObservations(String arg0) {
        tDriver.mytype(observations,arg0);
    }

    public void uploadReportDocument() {
        tDriver.mytxtupload(reportDoc);
    }

    public void clickSaveButtonPaidMediaReportOutput() {
        tDriver.myclicking(saveOutput);
    }

    public void rateTheOutputBriefPaidMediaReport() {
        tDriver.myclicking(rateOutput);
    }
}
