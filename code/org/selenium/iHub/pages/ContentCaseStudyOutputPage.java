package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 24/1/18.
 */
public class ContentCaseStudyOutputPage extends BasePage {

    UIElement document = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_case_study_output_case_study_document\"]");
    UIElement save = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"new_client_content_case_study_output\"]/div[3]/input");
    UIElement rateOutput = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[7]/div/div/a[5]");


    public void uploadCaseStudyDocument() {
        tDriver.mytxtupload(document);
    }

    public void clickSaveButtonContentCaseStudyOutput() {
        tDriver.myclicking(save);
    }

    public void rateTheOutputContentCaseStudy() {
        tDriver.myclicking(rateOutput);
    }
}
