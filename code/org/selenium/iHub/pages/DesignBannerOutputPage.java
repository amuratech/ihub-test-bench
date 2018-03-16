package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 7/3/18.
 */
public class DesignBannerOutputPage extends BasePage{

    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[11]/div/div/a[4]");
    UIElement saveOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_design_output\"]/div[3]/input");
    UIElement thoughtProcess = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_output_thought_process')]");


    public void rateTheOutputDesingBanner() {
        tDriver.myclicking(rateOutput);
    }

    public void clickSaveButtonDesignBanner() {
        tDriver.myclicking(saveOutput);
    }

    public void enterThoughtProcessDesign(String arg0) {
        tDriver.mytype(thoughtProcess,arg0);
    }
}
