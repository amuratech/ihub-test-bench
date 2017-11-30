package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class DesignAdOutputPage extends BasePage{

    UIElement startWorking = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[10]/input");//*[@id="edit_client_media_plan_task_599583795461f40e7d63c089"]/div[10]/input
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_client_')]/div[2]/input");//*[@id="edit_client_design_output_59941fdd5461f40de73ce05d"]/div[2]/input
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[10]/div/div/a[4]");//*[@id="edit_client_design_output_59941fdd5461f40de73ce05d"]/div[2]/input

    public void clickStartWorkingButtonDesignad() {
        tDriver.myclicking(startWorking);
    }

    public void clickSaveDesignad() {
        tDriver.myclicking(save);
    }

    public void rateDesignAdOutput() {
        tDriver.myclicking(rateOutput);
    }
}
