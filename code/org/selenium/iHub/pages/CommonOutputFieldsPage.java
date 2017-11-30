package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class CommonOutputFieldsPage extends BasePage{

    UIElement addOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Add your output')]");
    UIElement editOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[1]/div/div[4]/div/div/ul/li[2]/a");

    public void clickAddYourOutputLink() {
        tDriver.myclicking(addOutput);
    }

    public void clickEditYourOutputLink() {
        tDriver.myclicking(editOutput);
    }
}
