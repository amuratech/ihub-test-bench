package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.WebHTMLFiveOutputPage;

/**
 * Created by amuraqa on 30/1/18.
 */
public class WebHTMLFiveOutputSteps {

    WebHTMLFiveOutputPage dp;

    public WebHTMLFiveOutputSteps(){dp = new WebHTMLFiveOutputPage();}

    @Then("^Select Tool used$")
    public void selectToolUsed() {
        dp.selectToolUsed();
    }

    @And("^Click 'Save' button- Web HTML Five Ad output$")
    public void clickSaveButtonWebHTMLFiveAdOutput() {
        dp.clickSaveButtonWebHTMLFiveAdOutput();
    }

    @When("^Upload Files$")
    public void uploadFiles(){
        dp.uploadFiles();

    }

    @Then("^Rate the output- Web HTML Five Ad output$")
    public void rateTheOutputWebHTMLFiveAdOutput(){
        dp.rateTheOutputWebHTMLFiveAdOutput();
    }
}
