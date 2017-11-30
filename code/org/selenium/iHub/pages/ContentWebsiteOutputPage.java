package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 30/10/17.
 */
public class ContentWebsiteOutputPage  extends  BasePage{

    UIElement webDoc = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_website_output_content\"]");
    UIElement saveOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_website_output\"]/div[7]/input");
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[13]/div/div/a[4]");

    public void uploadContentWebsiteDoc() {
        tDriver.mytxtupload(webDoc);
    }

    public void clickSaveButtonContentWebsiteOutput() {
        tDriver.myclicking(saveOutput);
    }

    public void rateTheOutputContentWebsite() {
        tDriver.myclicking(rateOutput);
    }
}
