package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class PPCExecutionInputPage extends BasePage {

    UIElement design = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_design_ad_doc')]");//*[@id="client_development_html_five_ad_design_ad_doc"]
    UIElement mediaPlan = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_media_plan_campaign_doc')]");
    UIElement adCommunication = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_campaign_execution_content_ad_communication_doc\"]");
    UIElement saveInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_execution\"]/div[17]/input");
    UIElement file = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_campaign_execution_campaign_tracking_file\"]");
    UIElement GA = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_campaign_execution_google_analytics_id\"]");

    public void uploadDesignAdReferenceDoc() {
        tDriver.mytxtupload(design);
    }

    public void uploadMediaPlanReferenceDoc() {
        tDriver.mytxtupload(mediaPlan);
    }

    public void uploadAdCommunicationReferenceDoc() {tDriver.mytxtupload(adCommunication);
    }

    public void clickSaveButtonPaidMediaInput() {
        tDriver.myclicking(saveInput);
    }

    public void uploadCampaignTrackingFile() {
        tDriver.mytxtupload(file);
    }

    public void selectGrantThePaidMediaAccessTo() {
        tDriver.myGrantAccess();
    }

    public void enterGoogleAnalyticsID(String arg0) {
        tDriver.mytype(GA,arg0);
    }
}
