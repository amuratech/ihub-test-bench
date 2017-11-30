package org.selenium.iHub.pages;

import org.apache.xpath.operations.String;
import org.openqa.selenium.WebDriver;
import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 18/7/17.
 */
public class TasksPage extends BasePage {

    UIElement tasks = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li[4]/a");
    UIElement designTasks = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"taskLinks\"]/li[1]/a");



    public void clickOnTasks() {
        tDriver.myclick(tasks);
    }

    public void selectDesign() {
        tDriver.myclick(designTasks);
    }

//    public void takeTheScreenshot() {
//        tDriver.myscreenshot();
//
//    }

}
