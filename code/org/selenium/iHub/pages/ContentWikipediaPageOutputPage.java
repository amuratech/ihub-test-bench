package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 23/10/17.
 */
public class ContentWikipediaPageOutputPage extends BasePage {

    UIElement title = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_output_title')]");//*[@id="client_content_website_output_title"]
    UIElement contentDoc = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_wikipedia_page_output_content\"]");
    UIElement saveOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_wikipedia_page_output\"]/div[5]/input");
    UIElement wellContent = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_2_answer\"]");
    UIElement refCitations = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_3_answer\"]");
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[13]/div/div/a[4]");

    public void enterTitleContent(String arg0) {
        tDriver.mytype(title,arg0);
    }

    public void uploadTheContentDocument() {
        tDriver.mytxtupload(contentDoc);
    }

    public void clickSaveButtonContentWikipediaOutput() {
        tDriver.myclicking(saveOutput);
    }

    public void enterHasTheCopywriterResearchedWellContentWikipedia(String arg0) {
        tDriver.mytype(wellContent,arg0);
    }

    public void enterHasTheCopywriterIncludedEnoughReferencesAndCitations(String arg0) {
        tDriver.mytype(refCitations,arg0);
    }

    public void rateTheOutputContentWikipediaPage() {
        tDriver.myclicking(rateOutput);
    }
}
