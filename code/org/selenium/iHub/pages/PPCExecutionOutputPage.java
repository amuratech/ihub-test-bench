package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class PPCExecutionOutputPage extends BasePage {

    UIElement rateOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_review\"]/div[9]/div/div/a[4]");
    UIElement advertising = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_campaign_execution_output_reason_for_not_using_advertising_automation\"]");
    UIElement link = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_campaign_execution_output_advertising_automation_dashboard_url\"]");

    public void rateTheOutputBriefPaidMedia() {
        tDriver.myclicking(rateOutput);
    }

    public void enterReasonForNotAdvertisingAutomation(String arg0) {
        tDriver.mytype(advertising,arg0);
    }

    public void enterDashboardLink(String arg0) {
        tDriver.mytype(link,arg0);
    }
}
