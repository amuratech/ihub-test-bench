package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 8/3/18.
 */
public class DesignSocialPostOutputPage extends BasePage {

    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[9]/div/div/a[4]");

    public void rateTheOutputDesignSocialPost() {
        tDriver.myclicking(rateOutput);
    }
}
