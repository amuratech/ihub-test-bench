package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class DesignBannerInputPage extends BasePage {

    UIElement image = new UIElement(UIType.TextBox, UILocatorType.Xpath,"");
    UIElement height = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_banner_height\"]");
    UIElement width = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_banner_width\"]");
    UIElement content = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_banner\"]/div[2]/div/div[3]/div[2]");//*[@id="new_client_design_banner"]/div[2]/div/div[3]/div[2]
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_banner\"]/div[4]/input");
    UIElement rateInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[11]/div/div/a[4]");

    public void selectImageFormat() {
        tDriver.myimageformat();
    }

    public void enterHeightDesignBanner(String arg0) {
        tDriver.mytype(height,arg0);
    }

    public void enterWidthDesignBanner(String arg0) {
        tDriver.mytype(width,arg0);
    }

    public void enterContent(String arg0) {
        tDriver.mytype(content,arg0);
    }

    public void clickSaveButtonDesignBannerInput() {
        tDriver.myclicking(save);
    }

    public void rateTheInputBriefDesignBanner() {
        tDriver.myclicking(rateInput);
    }
}
