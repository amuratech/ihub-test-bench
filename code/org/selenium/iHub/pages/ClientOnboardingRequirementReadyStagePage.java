package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 21/3/18.
 */
public class ClientOnboardingRequirementReadyStagePage extends BasePage {

    UIElement task = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div/div[11]/div[2]/table/tbody/tr/td[1]/a");

    public void clickInternalKickOffMeetingToUnderstandClientRequirementsTask() {
        tDriver.myclicking(task);
    }
}
