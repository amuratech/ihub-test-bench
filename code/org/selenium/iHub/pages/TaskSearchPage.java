package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 5/12/17.
 */
public class TaskSearchPage extends BasePage {

    UIElement withoutPrefix = new UIElement(UIType.Button, UILocatorType.ID,"global-search-input");
    UIElement withPrefix = new UIElement(UIType.Button, UILocatorType.ID,"global-search-input");
    UIElement task = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[1]/div/nav/a");
    UIElement taskFound = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[1]/div/nav/a[4]");

    public void searchTheTaskWithoutUsingAsPrefix(String arg0) {
        tDriver.myTaskSearch(withoutPrefix);
    }

    public void theTaskShouldNotBeFound() {
        tDriver.myTask(task);
    }

    public void searchTheTaskWithUsingAsPrefix(String arg0) {
        tDriver.myTaskSearchWithPrefix(withPrefix);
    }

    public void theTaskShouldBeFound() {
        tDriver.myTaskFound(taskFound);
    }
}
