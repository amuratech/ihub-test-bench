package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SocialReportOutputPage extends BasePage {

    UIElement upload = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_report_output_report_document')]");//*[@id="page-content-wrapper"]/div[2]/div/div[1]/div[2]/div/div/div[3]/div/input
    UIElement saveOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_report_output\"]/div[2]/div/div/input");

    public void uploadReportDoc() {
        tDriver.mytxtupload(upload);
    }

    public void clickSaveButtonSocialReportOutput() {
        tDriver.myclicking(saveOutput);
    }
}
