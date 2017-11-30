package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 22/11/17.
 */
public class TaskOverviewAllTasksPage extends BasePage{

    UIElement unassigned = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div[1]/div[3]/a[1]/span[2]");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div/div[2]/div/div[4]/a[1]/span[2]
    UIElement status = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/form/div/div[2]/div[7]/div/div[1]");
    UIElement task = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[3]/div/div[3]/div[2]/div/div[2]/a");
    UIElement priority = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div[1]/div[3]/a[2]/span[2]  ");
    UIElement tag  = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/form/div/div[2]/div[5]/div/div[1]");
    UIElement overdue  = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div[1]/div[3]/a[3]/span[2]");
    UIElement date = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"fltrs_due_date\"]");


    public void clickUnassigned() {
        tDriver.myclicking(unassigned);
    }

    public void checkTheStatus() {
        tDriver.myStatus(status);
    }

    public void clickTheTaskUnderInProgress() {
        tDriver.myclicking(task);
    }

    public void clickPriority() {
        tDriver.myclicking(priority);
    }

    public void checkTheTags() {
        tDriver.myPriority(tag);
    }

    public void clickOverdue() {
        tDriver.myclicking(overdue);
    }

    public void checkTheDate() {
        tDriver.myDueToday(date);
    }
}
