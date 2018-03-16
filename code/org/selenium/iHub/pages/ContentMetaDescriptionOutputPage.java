package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentMetaDescriptionOutputPage extends BasePage {

    UIElement desc = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_meta_description_output\"]/div[1]/div[2]/div/div/div[2]/div/div/div/div[3]/div[2]");
    UIElement thought = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_meta_description_output_thought_process\"]");
    UIElement saveOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_meta_description_output\"]/div[3]/input");//*[@id="new_client_content_meta_description_output"]/div[3]/input
    UIElement rateOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[7]/div/div/a[5]");


    public void enterMetaDescription(String arg0) {
        tDriver.mytype(desc,arg0);
    }

    public void enterThoughtProcessContentMetaDescription(String arg0) {
        tDriver.mytype(thought,arg0);
    }

    public void clickSaveButtonContentMetaDescriptionOutput() {
        tDriver.myclicking(saveOutput);
    }

    public void rateTheOutputContentMetaDescription() {
        tDriver.myclicking(rateOutput);
    }
}
