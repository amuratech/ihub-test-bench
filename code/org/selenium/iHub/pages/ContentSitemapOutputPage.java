package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 23/10/17.
 */
public class ContentSitemapOutputPage extends BasePage{

    UIElement sitemapDoc = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_sitemap_output_detailed_sitemap\"]");
    UIElement saveOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_sitemap_output\"]/div[4]/input");
    UIElement tg = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_0_answer\"]");
    UIElement brief = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_1_answer\"]");
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[9]/div/div/a[4]");


    public void uploadDetailedSitemapDoc() {
        tDriver.mytxtupload(sitemapDoc);
    }

    public void clickSaveButtonContentSitemapOutput() {
        tDriver.myclicking(saveOutput);
    }

    public void enterDoesTheContentCaterToGivenTGContentSitemap(String arg0) {
        tDriver.mytype(tg,arg0);
    }

    public void enterHasTheBriefBeenFollowedContentSitemap(String arg0) {
        tDriver.mytype(brief,arg0);
    }

    public void rateTheOutputContentSitemap() {
        tDriver.myclicking(rateOutput);
    }
}
