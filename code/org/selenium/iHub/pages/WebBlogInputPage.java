package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

import static org.selenium.iHub.driver.TestDriver.tDriver;

public class WebBlogInputPage extends BasePage {

    UIElement upload = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_blog_content_blogpost_doc\"]");
    UIElement keywords = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_blog\"]/div[2]/div/div/div/input");
    UIElement accordion = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_blog\"]/div[2]/div/div/div/span/a/i");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_blog\"]/div[5]/input");
    UIElement rateInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[9]/div/div/a[4]");

    public void uploadContentBlogpostReferenceDoc() {
        tDriver.mytxtupload(upload);
    }

    public void enterMetaKeywordsWebBlog(String arg0) {
        tDriver.mytype(keywords,arg0);
    }

    public void clickAccordionToAddKeywords() {
        tDriver.myclicking(accordion);

    }

    public void clickSaveButtonWebBlogInput() {
        tDriver.myclicking(save);

    }

    public void rateTheInputBriefWebBlog() {
        tDriver.myclicking(rateInput);
    }


}
