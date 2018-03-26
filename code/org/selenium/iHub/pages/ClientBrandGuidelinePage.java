package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 21/3/18.
 */
public class ClientBrandGuidelinePage extends BasePage {

    UIElement brandGuidelineLink = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div/div[2]/div/div/ul/li[7]/a/i");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_brand_guideline\"]/div[9]/input");


    public void selectBrandGuidelineLink() {
        tDriver.myClientBrandGuidelines(brandGuidelineLink);
    }

    public void clickSaveButtonBrandGuideline() {
        tDriver.myclicking(save);
    }
}
