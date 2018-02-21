package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentEmailerInputPage extends BasePage {

    UIElement saveInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'edit_client_content_emailer_')]/div[5]/input");
    UIElement rateInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[11]/div/div/a[4]");

    public void clickSaveButtonContentEmailer() {
        tDriver.myclicking(saveInput);
    }

    public void rateTheBriefContentEmailer() {
        tDriver.myclicking(rateInput);
    }

    public void selectTonalityContentEmailer() {
        tDriver.myContentEmailerTonality();

    }
}
