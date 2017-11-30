package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import org.selenium.iHub.pages.WebBlogOutputPage;

public class WebBlogOutputSteps {

    WebBlogOutputPage dp;

    public WebBlogOutputSteps(){dp = new WebBlogOutputPage();}

    @And("^Enter Final URL \"([^\"]*)\"$")
    public void enterFinalURL(String arg0) {
        dp.enterFinalURL(arg0);
    }

    @And("^Click 'Save' button- Web Blog Output$")
    public void clickSaveButtonWebBlogOutput() {
        dp.clickSaveButtonWebBlogOutput();
    }


    @And("^Rate the output- Web Blog$")
    public void rateTheOutputWebBlog() {
        dp.rateTheOutputWebBlog();
    }
}

