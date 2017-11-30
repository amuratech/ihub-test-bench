package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.WebSEOInputPage;

public class WebSEOInputSteps {

    WebSEOInputPage dp;

    public WebSEOInputSteps(){dp = new WebSEOInputPage();}
//
//    @Then("^Enter URL$")
//    public void enterURL() {
//        dp.enterURL();
//    }
//
//    @And("^Enter title$")
//    public void enterTitle() {
//        dp.enterTitle();
//    }

//    @And("^Enter meta keywords$")
//    public void enterMetaKeywords() {
//        dp.enterMetaKeywords();
//    }
//
//    @And("^Enter meta desc$")
//    public void enterMetaDesc() {
//    }

    @And("^Click save button- webseo$")
    public void clickSaveButtonWebseo() {
        dp.clickSaveButtonWebseo();
    }

    @And("^Click save and publish- webseo$")
    public void clickSaveAndPublishWebseo() {
        dp.clickSaveAndPublishWebseo();
    }

    @Then("^Select radio URL$")
    public void selectRadioURL() {
        dp.selectRadioURL();
    }

    @And("^Select radio title$")
    public void selectRadioTitle() {
        dp.selectRadioTitle();
    }

    @And("^Select radio keywords$")
    public void selectRadioKeywords() {
        dp.selectRadioKeywords();
    }

    @And("^Select radio desc$")
    public void selectRadioDesc() {
        dp.selectRadioDesc();
    }

    @Then("^Rating the brief$")
    public void ratingTheBrief() {
        dp.ratingTheBrief();
    }

    @And("^Click the accept$")
    public void clickTheAccept(){
        dp.clickTheAccept();
    }


    @Then("^Enter URL \"([^\"]*)\"- Web SEO$")
    public void enterURLWebSEO(String arg0) {
        dp.enterURLWebSEO(arg0);
    }

    @And("^Enter meta title \"([^\"]*)\"$")
    public void enterMetaTitle(String arg0) {
        dp.enterMetaTitle(arg0);
    }

    @And("^Enter meta keywords \"([^\"]*)\"$")
    public void enterMetaKeywords(String arg0) {
        dp.enterMetaKeywords(arg0);
    }

    @And("^Click accordion- meta keywords$")
    public void clickAccordionMetaKeywords() {
        dp.clickAccordionMetaKeywords();
    }

    @And("^Enter meta desc \"([^\"]*)\"$")
    public void enterMetaDesc(String arg0) {
        dp.enterMetaDesc(arg0);
    }


    @And("^Click Save and publish later button- Web SEO$")
    public void clickSaveAndPublishLaterButtonWebSEO() {
        dp.clickSaveAndPublishLaterButtonWebSEO();
    }
}
