package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 21/3/18.
 */
public class MarketingRequirementInputPage extends BasePage {

    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_client_marketing_requirement')]/div[3]/input");

    public void clickSaveButtonMarketingRequirementInputBrief() {
        tDriver.myclicking(save);
    }
}
