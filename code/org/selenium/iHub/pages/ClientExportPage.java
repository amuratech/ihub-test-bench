package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 28/2/18.
 */
public class ClientExportPage extends BasePage {

    UIElement clientExports = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Client exports')]");
    UIElement dateRange = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Client exports')]");
    UIElement category = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_export\"]/div[3]/div/div[2]/div/div/div[1]");
    UIElement businessVertical = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_export\"]/div[3]/div/div[3]/div/div/div[1]");
    UIElement manager = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_export\"]/div[3]/div/div[4]/div/div/div[1]");
    UIElement executive  = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_export\"]/div[3]/div/div[5]/div/div/div[1]");
    UIElement clientExportsUser = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_export\"]/div[3]/div/div[5]/div/div/div[2]/div");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_export\"]/div[4]/input");

    public void clickClientExports() {
        tDriver.myclicking(clientExports);
    }

    public void selectDateRangeFieldClientExports() {
        tDriver.myClientExportsDateRange(dateRange);
    }

    public void selectCategoryOfTheClient() {
        tDriver.myClientExportsCategory(category);
    }

    public void selectBusinessVertical() {
        tDriver.myClientExportsBusinessVertical(businessVertical);
    }

    public void selectManager() {
        tDriver.myClientExportsManager(manager);
    }

    public void selectExecutive() {
        tDriver.myClientExportsExecutive(executive);
    }


    public void clickClientExportsUser() {
        tDriver.myclicking(clientExportsUser);
    }

    public void clickSaveButtonClientExports() {
        tDriver.myclicking(save);
    }
}
