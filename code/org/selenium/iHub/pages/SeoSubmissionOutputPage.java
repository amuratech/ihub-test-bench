package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SeoSubmissionOutputPage extends BasePage {

    UIElement submissionURL = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_seo_submission_output_url\"]");
    UIElement keywords = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_seo_submission_output\"]/div[2]/div/div/div/div[1]");//*[@id="new_client_seo_plan_output"]/div[5]/div[2]/div/div/div[3]/div/div/div/div[1]
    UIElement saveOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_seo_submission_output\"]/div[4]/div/div/input");
    UIElement tags = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_seo_review_questions_attributes_0_answer\"]");
    UIElement rateOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_seo_review\"]/div[5]/div/div/a[4]");

    public void enterKeywordsOfFocus() {
        tDriver.mykeywords(keywords);
    }

    public void enterSubmissionURL(String arg0) {
        tDriver.mytype(submissionURL,arg0);
    }

    public void clickSaveButtonSEOSubmissionOutput() {
        tDriver.myclicking(saveOutput);
    }

    public void enterHaveTheCorrectKeywordsAndTagsPostedAlongWithTheMainSubmission(String arg0) {
        tDriver.mytype(tags,arg0);
    }

    public void rateTheOutputSEOSubmission() {
        tDriver.myclicking(rateOutput);
    }
}
