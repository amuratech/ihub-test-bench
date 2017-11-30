package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SocialReportOutputPage extends BasePage {

    UIElement upload = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_report_output_report_document\"]");
    UIElement saveOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_report_output\"]/div[2]/div/div/input");

    public void uploadReportDoc() {
        tDriver.mytxtupload(upload);
    }

    public void clickSaveButtonSocialReportOutput() {
        tDriver.myclicking(saveOutput);
    }
}
