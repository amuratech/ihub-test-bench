package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SocialReportInputPage extends BasePage {

    UIElement campaign = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_report_campaign_name\"]");
    UIElement startDate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_report_report_start_date')]");//*[@id="client_marketing_report_report_start_date"]
    UIElement endDate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_report_report_end_date')]");
    UIElement saveInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_report\"]/div[6]/input");

    public void enterCampaignName(String arg0) {
        tDriver.mytype(campaign,arg0);
    }

    public void selectReportStartDate() {
        tDriver.mystartdate(startDate);
    }

    public void selectReportEndDate() {
        tDriver.mystartdate(endDate);
    }

    public void clickSaveButtonSocialReportInput() {
        tDriver.myclicking(saveInput);
    }

    public void selectPlatforms() {
        tDriver.mysocialplatform();
    }
}
