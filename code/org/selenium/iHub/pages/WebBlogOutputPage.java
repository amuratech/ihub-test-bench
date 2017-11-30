package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class WebBlogOutputPage extends BasePage {

    UIElement url = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_blog_output_url\"]");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_blog_output\"]/div[2]/div/div/input");
    UIElement rateOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[3]/div/div/a[4]");

    public void enterFinalURL(String arg0) {
        tDriver.mytype(url,arg0);
    }

    public void clickSaveButtonWebBlogOutput() {
        tDriver.myclicking(save);
    }

    public void rateTheOutputWebBlog(){
        tDriver.myclicking(rateOutput);
    }


}
