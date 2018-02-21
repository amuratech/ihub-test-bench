package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 1/12/17.
 */
public class ReworkPage extends BasePage {

    UIElement enabledRework = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"move_backward\"]");
    UIElement disabledRework = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"move_backward\"]");


    public void reworkButtonShouldBeEnabled() {
        tDriver.myRework(enabledRework);

    }

    public void reworkButtonShouldBeDisabled() {
        tDriver.myRework(disabledRework);
    }
}
