package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 18/7/17.
 */
public class CreateTaskPage extends BasePage{

    UIElement addTask = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li[5]/a/i");
    UIElement enterClient = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"task-form-modal\"]/div/div/div[2]/div[1]/div/div[1]");//*[@id="task-form-modal"]/div/div/div[2]/div[1]/div/div[1]
    UIElement slectDept = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"task-form-modal\"]/div/div/div[2]/div[2]/div");
    UIElement clickCreate = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"task-form-modal\"]/div/div/div[3]/a");
    UIElement webDevClick = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"taskLinks\"]/li[3]/a");

    public void clickAddATask() {
        tDriver.myclicking(addTask);
    }

    public void enterTheClientName(String arg0) {
        tDriver.myenter(enterClient,arg0);
    }

    public void selectTheDepartment() {
        tDriver.mywait(slectDept);
    }

    public void clickOnCreateTask() {
        tDriver.myclick(clickCreate);
    }

    public void clickOnWebDevelopment() {
        tDriver.myclick(webDevClick);
    }
}
