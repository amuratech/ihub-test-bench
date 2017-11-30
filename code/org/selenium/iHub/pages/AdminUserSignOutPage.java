package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class AdminUserSignOutPage extends BasePage {

    UIElement adminUser = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li[6]/a/i");
    UIElement signOut = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"accountLinks\"]/li[3]/a");

    public void clickOnAdminUserTab() {
        tDriver.myclicking(adminUser);
    }

    public void clickAdminSignOutTab() {
        tDriver.myclicking(signOut);
    }
}
