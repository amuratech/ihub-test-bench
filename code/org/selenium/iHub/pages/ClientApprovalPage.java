package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

import javax.swing.*;

/**
 * Created by amuraqa on 9/1/18.
 */
public class ClientApprovalPage extends BasePage {

    UIElement taskSidebar = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li/a/i");
    UIElement all = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[1]/ul/li[1]/a");
    UIElement details = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/table/tbody/tr[1]/td[5]/div/a/i");
    UIElement design = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"taskLinks\"]/li[3]/a");

    public void clickOnTaskSidebarClient() {
        tDriver.myclicking(taskSidebar);
    }

    public void clickOnAll() {
        tDriver.myclicking(all);
    }

    public void clickOnDetails() {
        tDriver.myDetails(details);

    }

    public void clickOnDesignClient() {
        tDriver.myclicking(design);
    }
}
