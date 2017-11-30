package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentPrintMediaOutputPage;

/**
 * Created by amuraqa on 23/10/17.
 */
public class ContentPrintMediaOutputSteps {

    ContentPrintMediaOutputPage dp;

    public ContentPrintMediaOutputSteps(){dp = new ContentPrintMediaOutputPage();}

    @And("^Click 'Save' button- Content Print Media Output$")
    public void clickSaveButtonContentPrintMediaOutput(){
        dp.clickSaveButtonContentPrintMediaOutput();
    }

    @Then("^Rate the output- Content Print Media$")
    public void rateTheOutputContentPrintMedia() {
        dp.rateTheOutputContentPrintMedia();
    }
}
