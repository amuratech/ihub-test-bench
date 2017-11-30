package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentHoardingInputPage extends BasePage {

    UIElement height = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"client_content_hoarding_height\"]");//*[@id="client_design_print_medium_dimension_width"]
    UIElement width = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"client_content_hoarding_width\"]");
    UIElement referenceTask = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"new_client_content_hoarding\"]/div[4]/div[1]/div/div/div/div[1]");
    UIElement saveInput = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"new_client_content_hoarding\"]/div[8]/input");
    UIElement title  = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"client_content_hoarding_output_title\"]");
    UIElement content = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"new_client_content_hoarding_output\"]/div[3]/div/div/div/div[3]/div[2]");
    UIElement thought = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"client_content_hoarding_output_thought_process\"]");

    public void enterHeight(String arg0) {
        tDriver.mytype(height,arg0);
    }

    public void enterWidth(String arg0) {
        tDriver.mytype(width,arg0);
    }

    public void selectCampaignPlanReferenceTask() {
        tDriver.mytasktype(referenceTask);
    }

    public void selectTonalityContentHoarding() {
        tDriver.mycontenthoardingtonality();
    }

    public void clickSaveButtonContentHoarding() {
        tDriver.myclicking(saveInput);
    }

    public void selectTagsContentHoarding() {
        tDriver.mycontenthoardingtags();
    }


}
