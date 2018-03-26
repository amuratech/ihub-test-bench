package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 21/3/18.
 */
public class ClientOnboardingKickOffApprovedStagePage extends BasePage{

    UIElement markKickOffApproved = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Mark as Kick-off Approved')]");

    public void clickMarkAsKickOffApproved() {
        tDriver.myclicking(markKickOffApproved);
    }
}
