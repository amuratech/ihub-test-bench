package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.WebBlogInputPage;

public class WebBlogInputSteps {

    WebBlogInputPage dp;

    public WebBlogInputSteps(){dp = new WebBlogInputPage();}

    @Then("^Upload content blogpost reference doc$")
    public void uploadContentBlogpostReferenceDoc() {
        dp.uploadContentBlogpostReferenceDoc();
    }

    @And("^Enter meta keywords \"([^\"]*)\"- Web Blog$")
    public void enterMetaKeywordsWebBlog(String arg0) {
        dp.enterMetaKeywordsWebBlog(arg0);
    }

    @Then("^Click 'accordion' to add keywords$")
    public void clickAccordionToAddKeywords() {
        dp.clickAccordionToAddKeywords();
    }

    @Then("^Click 'Save' button- Web Blog Input$")
    public void clickSaveButtonWebBlogInput() {
        dp.clickSaveButtonWebBlogInput();
    }

    @Then("^Rate the input brief- Web Blog$")
    public void rateTheInputBriefWebBlog() {
        dp.rateTheInputBriefWebBlog();
    }


    @When("^Select Content blogpost task reference$")
    public void selectContentBlogpostTaskReference(){
        dp.selectContentBlogpostTaskReference();
    }
}
