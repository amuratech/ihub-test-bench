package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 23/2/18.
 */
public class ProductExportPage extends BasePage {
    UIElement productExports = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"exportFormatLinks\"]/li[3]/a");
    UIElement productExportsUser = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"exportFormatLinks\"]/li[3]/a");
    UIElement dateRangeField = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_export\"]/div[2]/div[1]/div/div/div[1]");
    UIElement stage = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_export\"]/div[3]/div/div[1]/div/div/div[1]");
    UIElement client = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_export\"]/div[3]/div/div[3]/div/div/div[1]");
    UIElement creator = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_export\"]/div[3]/div/div[4]/div/div/div[1]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_export\"]/div[4]/input");

    public void clickProductExports() {
        tDriver.myclicking(productExports);
    }

    public void clickProductExportsUser() {
        tDriver.myclicking(productExportsUser);
    }

    public void selectDateRangeFieldProductExports() {
        tDriver.myProductExportDateRangeField(dateRangeField);
    }

    public void selectStage() {
        tDriver.myProductExportStage(stage);
    }

    public void selectClient() {
        tDriver.myProductExportClient(client);
    }

    public void selectCreator() {
        tDriver.myProductExportCreator(creator);
    }

    public void clickSaveButtonProductExport() {
        tDriver.myclicking(save);
    }
}
