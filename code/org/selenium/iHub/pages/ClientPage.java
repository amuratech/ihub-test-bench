package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 18/7/17.
 */
public class ClientPage extends BasePage{

    UIElement clientsMenu = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li[2]/a");
    UIElement putClient = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div/div/div[2]/form/div/div[2]/div[1]/div/div[1]");//*[@id="assignment-form-modal"]/div/div/div[2]/div/div
    UIElement applyButton = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div/div/div[2]/form/div/div[1]/input");
    UIElement actionDetails = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div/div/div[1]/div[1]/table/tbody/tr[3]/td[4]/div/button");
    UIElement designBrief = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div/div/div[2]/div/div[2]/div/ul/li[1]/a");

    public void clickOnClients() {
        tDriver.myclick(clientsMenu);
    }

    public void filterWithClientName(String arg0) {
        tDriver.myenter(putClient,arg0);
    }

    public void clickApplyButton() {
        tDriver.myclick(applyButton);
    }

//    public void selectTheActionDetails() {
//        tDriver.myaction(actionDetails);
//    }

    public void clickOnDesignBriefFromSidePanel() {
        tDriver.mywait(designBrief);
    }

    public void selectTheActionDetails() {
    }
}
