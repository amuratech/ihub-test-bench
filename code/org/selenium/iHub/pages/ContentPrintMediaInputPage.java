package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 23/10/17.
 */
public class ContentPrintMediaInputPage extends BasePage {

    UIElement usp = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_print_medium\"]/div[4]/div/div/div/div/div/input");
    UIElement saveInput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_print_medium\"]/div[9]/input");
    UIElement rateInput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[13]/div/div/a[4]");

    public void selectTonalityContentPrintMedia() {
        tDriver.mycontentprintmediatonality();
    }

    public void enterUSPs() {
        tDriver.mycontentprintmediausp(usp);
    }

    public void clickSaveButtonContentPrintMediaInput() {
        tDriver.myclicking(saveInput);
    }

    public void rateTheInputBriefContentPrintMedia() {
        tDriver.myclicking(rateInput);
    }
}
