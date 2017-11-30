package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

import java.net.MalformedURLException;

/**
 * Created by amuraqa on 18/7/17.
 */
public class DashboardPage extends BasePage {

    UIElement dashboard = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li[1]/a");

    public void clickOnDashboard() {
        tDriver.myclicking(dashboard);
    }



}
