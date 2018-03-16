package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 8/3/18.
 */
public class DesignSocialCoverOutputPage extends BasePage {

    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[11]/div/div/a[4]");

    public void rateTheOutputDesignSocialCover() {
        tDriver.myclicking(rateOutput);
    }
}
