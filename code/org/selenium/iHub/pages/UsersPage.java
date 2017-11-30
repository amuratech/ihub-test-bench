package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 18/7/17.
 */
public class UsersPage extends BasePage{

    UIElement users = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li[2]/a");
    UIElement actionShow = new UIElement(UIType.Link,UILocatorType.CSS,"#page-content-wrapper > div > div > div.col-md-9.resource-details-container.layout-70.custom-scope-present > div.pad-left > table > tbody > tr > td:nth-child(4) > div > button > i");
    UIElement edit = new UIElement(UIType.Link,UILocatorType.CSS,"body > nav > div.navigation-links-container > ul > li:nth-child(3)");
    UIElement save = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"edit_user_58de50b426300a71b73f1192\"]/div[5]/input");
    UIElement editField = new UIElement(UIType.TextBox,UILocatorType.Name,"user[email]");

    public void clickOnUsers() {
        tDriver.mywait(users);
    }

    public void selectTheActionShow() {
        tDriver.mywait(actionShow);
    }

    public void clickOnEditTab() {
        tDriver.mywait(edit);
    }

    public void editEmailField() {
        tDriver.mydropdown(editField);
    }

    public void clickOnSave() {
        tDriver.myclick(save);
    }
}
