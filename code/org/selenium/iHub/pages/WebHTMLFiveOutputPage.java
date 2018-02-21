package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;
import sun.swing.UIAction;

/**
 * Created by amuraqa on 30/1/18.
 */
public class WebHTMLFiveOutputPage extends BasePage {

    UIElement tool = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_html_five_ad_output\"]/div[1]/div/div/div/div[1]");
    UIElement saveOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_html_five_ad_output\"]/div[3]/div/div/input");
    UIElement uploadFiles = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[2]/div[2]/div/div[2]/div/input");
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[7]/div/div/a[4]");

    public void selectToolUsed() {
        tDriver.myWebHTMLToolUsed(tool);
    }

    public void clickSaveButtonWebHTMLFiveAdOutput() {
        tDriver.myclicking(saveOutput);
    }

    public void uploadFiles() {
        tDriver.mytxtupload(uploadFiles);
    }

    public void rateTheOutputWebHTMLFiveAdOutput() {
        tDriver.myclicking(rateOutput);
    }
}
