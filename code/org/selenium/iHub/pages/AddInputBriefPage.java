package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class AddInputBriefPage extends BasePage {

    UIElement addInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div[2]/div/ul/li[1]/a");

    public void clickAddInputBriefLink() {
        tDriver.myclicking(addInput);
    }
}
