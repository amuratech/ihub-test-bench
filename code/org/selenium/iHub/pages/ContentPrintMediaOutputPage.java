package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 23/10/17.
 */
public class ContentPrintMediaOutputPage extends BasePage {

    UIElement saveOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_print_medium_output\"]/div[7]/input");
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[14]/div/div/a[4]");

    public void clickSaveButtonContentPrintMediaOutput() {
        tDriver.myclicking(saveOutput);
    }


    public void rateTheOutputContentPrintMedia() {
        tDriver.myclicking(rateOutput);
    }
}
