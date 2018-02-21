package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.WebHTMLFiveInputPage;

/**
 * Created by amuraqa on 30/1/18.
 */
public class WebHTMLFiveInputSteps {

    WebHTMLFiveInputPage dp;

    public WebHTMLFiveInputSteps(){dp = new WebHTMLFiveInputPage();}

    @Then("^Enter Specification animation requirements \"([^\"]*)\"$")
    public void enterSpecificationAnimationRequirements(String arg0) {
        dp.enterSpecificationAnimationRequirements(arg0);
    }

    @And("^Click 'Save' button- Web HTML Five Ad Input$")
    public void clickSaveButtonWebHTMLFiveAdInput(){
        dp.clickSaveButtonHTMLFiveAd();
    }

    @And("^Rate the input brief- Web HTML Five Ad$")
    public void rateTheInputBriefWebHTMLFiveAd() {
        dp.rateTheInputBriefWebHTMLFiveAd();
    }


}
