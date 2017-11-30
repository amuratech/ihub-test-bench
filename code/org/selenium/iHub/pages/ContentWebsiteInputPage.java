package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 30/10/17.
 */
public class ContentWebsiteInputPage extends BasePage {

    UIElement saveInput =  new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_website\"]/div[11]/input");
    UIElement usps =  new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_website\"]/div[5]/div/div/div/div/div/input");
    UIElement rateInput =  new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[15]/div/div/a[4]");

    public void selectTagsContent() {
        tDriver.mycontentwebsitetags();
    }

    public void selectTonalityContentWebsite() {
        tDriver.mycontentwebsitetonality();
    }

    public void enterUSPsContentWebsite() {
        tDriver.mycontentwebsiteusps(usps);
    }

    public void clickSaveButtonContentWebsite() {
        tDriver.myclicking(saveInput);
    }

    public void rateTheInputBriefContentWebsite() {
        tDriver.myclicking(rateInput);
    }
}
