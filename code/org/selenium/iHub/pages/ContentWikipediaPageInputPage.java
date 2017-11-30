package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 23/10/17.
 */
public class ContentWikipediaPageInputPage extends BasePage {

    UIElement websiteLink = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_wikipedia_page_website_link\"]");
    UIElement referenceLink = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_wikipedia_page\"]/div[3]/div/div/div/input");
    UIElement saveInput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_wikipedia_page\"]/div[5]/input");
    UIElement rateInput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[10]/div/div/a[4]");


    public void enterWebsiteLink(String arg0) {
        tDriver.mytype(websiteLink,arg0);
    }

    public void enterReferenceLinksContentWikipediaPage() {
        tDriver.mycontentreferencelink(referenceLink);

    }

    public void clickSaveButtonContentWikipediaPage() {
        tDriver.myclicking(saveInput);
    }

    public void rateTheBriefContentWikipediaPage() {
        tDriver.myclicking(rateInput);
    }
}
