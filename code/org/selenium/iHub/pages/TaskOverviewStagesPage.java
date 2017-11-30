package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 28/11/17.
 */
public class TaskOverviewStagesPage extends BasePage {

    UIElement priority = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div/div[2]/div/div[4]/a[2]/span[2]");
    UIElement priorityTag = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/form/div/div[2]/div[5]/div/div[1]");
    UIElement total = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[1]/div/nav/a");
    UIElement briefChange = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div/div[2]/div/div[4]/a[4]/span[2]");
    UIElement ongoing = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div/div[2]/div/div[4]/a[5]/span[2]");
    UIElement unassigned = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div/div[2]/div/div[4]/a[6]/span[2]");
    UIElement paused = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div/div[2]/div/div[4]/a[7]/span[2]");
    UIElement dueToday = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div/div[2]/div/div[4]/a[1]/span[2]");

    public void iWillClickOnPriority() {
        tDriver.myclicking(priority);
    }

    public void itShouldDisplayTheNumberOfTasks() {
        tDriver.myTotalTasks(total);
    }

    public void itShouldDisplayThePreSelectedTag() {
        tDriver.myPriority(priorityTag);
    }

    public void iWillClickOnBriefChange() {
        tDriver.myclicking(briefChange);
    }

    public void iWillClickOnOngoing() {
        tDriver.myclicking(ongoing);
    }

    public void iWillClickOnUnassigned() {
        tDriver.myclicking(unassigned);
    }

    public void iWillClickOnPausedTasks() {
        tDriver.myclicking(paused);
    }

    public void iWillClickOnDueToday() {
        tDriver.myclicking(dueToday);
    }
}
