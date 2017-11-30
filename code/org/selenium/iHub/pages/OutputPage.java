package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class OutputPage extends BasePage {

    //*[@id="edit_client_design_output_59c4b3748ec629792ff50b18"]/div[2]/input
    UIElement more = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[2]/div/div[4]/div/div/ul/li[4]/a/i");
    UIElement editTask = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[2]/div/div[4]/div/div/ul/li[4]/ul/li/a");



    public void clickMore() {
        tDriver.myclicking(more);
    }

    public void selectEditTask() {
        tDriver.myclicking(editTask);
    }
}
