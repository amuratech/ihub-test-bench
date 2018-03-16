package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

import java.rmi.server.UID;

public class PPCReportInputPage extends BasePage {

    UIElement taskRef = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_report\"]/div[2]/div[2]/div/div[1]/div/div/div[1]");
    UIElement saveInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_report\"]/div[4]/input");
    UIElement startDate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_campaign_report_start_date\"]");
    UIElement endDate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_campaign_report_end_date\"]");
    UIElement rateInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_review\"]/div[11]/div/div/a[4]");
    UIElement refTask = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_report\"]/div[2]/div[2]/div/div/div/div/div[1]");

//    public void reportForEntireCampaignYes() {
//    }

    public void reportForEntireCampaignNo() {
        tDriver.mypaidmediareportno();
    }

    public void enterCampaignExecutionTaskReference() {
        tDriver.myreftask(taskRef);
    }

    public void clickSaveButtonPaidMediaReportInput() {
        tDriver.myclicking(saveInput);
    }

    public void selectStartDatePaidMediaReport() {
        tDriver.mypaidmediareportstartdate(startDate);
    }

    public void selectEndDatePaidMediaReport() {
        tDriver.mypaidmediareportenddate(endDate);
    }

    public void rateTheInputBriefPaidMediaReport() {
        tDriver.myclicking(rateInput);
    }

    public void selectCampaignExecutionTaskReference() {
        tDriver.myPPCCampaignExecutionRefTask(refTask);
    }
}
