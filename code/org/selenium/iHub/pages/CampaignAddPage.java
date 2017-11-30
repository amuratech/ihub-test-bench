package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class CampaignAddPage extends BasePage {

    UIElement taskType = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_campaign_task\"]/div[1]/div[2]/div/div/div[1]");


    public void enterCampaignTaskType() {
        tDriver.mywait(taskType);
    }

}
