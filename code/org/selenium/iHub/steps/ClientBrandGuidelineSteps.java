package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ClientBrandGuidelinePage;

/**
 * Created by amura on 21/3/18.
 */
public class ClientBrandGuidelineSteps {

    ClientBrandGuidelinePage dp;

    public ClientBrandGuidelineSteps(){ dp = new ClientBrandGuidelinePage();}

    @When("^Select 'Brand guideline' link$")
    public void selectBrandGuidelineLink() {
        dp.selectBrandGuidelineLink();
    }

    @Then("^Click 'Save' button- Brand guideline$")
    public void clickSaveButtonBrandGuideline(){
        dp.clickSaveButtonBrandGuideline();
    }
}
