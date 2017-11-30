package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class NormalUserSignOutPage extends BasePage {

    UIElement user = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(text(),'Hi')]");//html/body/nav/ul/li[2]/a
    UIElement signOut = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(text(),'Sign out')]");//html/body/nav/ul/li[2]/ul/li[3]

    public void clickOnUserTab() {
        tDriver.mywait(user);
    }

    public void clickSignOutTab() {
        tDriver.myclicking(signOut);
    }

    public void clickUserName() {
        tDriver.myclicking(user);
    }

    public void clickSignOut() {
        tDriver.myclicking(signOut);
    }
}
