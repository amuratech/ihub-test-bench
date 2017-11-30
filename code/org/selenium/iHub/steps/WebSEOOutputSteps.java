package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.WebSEOOutputPage;
import org.selenium.iHub.pages.WebWebsiteOutputPage;

public class WebSEOOutputSteps {

    WebSEOOutputPage dp;

    public WebSEOOutputSteps(){dp = new WebSEOOutputPage();}

    @Then("^Click start working$")
    public void clickStartWorking() {
        dp.clickStartWorking();
    }

    @Then("^Enter thought process \"([^\"]*)\"- webseo$")
    public void enterThoughtProcessWebseo(String arg0) {
        dp.enterThoughtProcessWebseo(arg0);
    }

    @And("^Enter URL \"([^\"]*)\"- webseo$")
    public void enterURLWebseo(String arg0) {
        dp.enterURLWebseo(arg0);
    }

    @Then("^Click submit- webseo$")
    public void clickSubmitWebseo() {
        dp.clickSubmitWebseo();
    }

    @Then("^Select status- web$")
    public void selectStatusWeb() {
        dp.selectStatusWeb();
    }

    @And("^Click update button$")
    public void clickUpdateButton() {
        dp.clickUpdateButton();
    }

    @And("^Select URL- webseo$")
    public void selectURLWebseo() {
        dp.selectURLWebseo();
    }

    @Then("^Rating- webseo output$")
    public void ratingWebseoOutput(){
        dp.ratingWebseoOutput();
    }

    @And("^Click deliver- webseo$")
    public void clickDeliverWebseo() {
        dp.clickDeliverWebseo();
    }

    @Then("^Click on rework$")
    public void clickOnRework(){
        dp.clickOnRework();
    }

    @And("^Click update web$")
    public void clickUpdateWeb() {
        dp.clickUpdateWeb();
    }
}
