package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.DesignBannerOutputPage;

/**
 * Created by amura on 7/3/18.
 */
public class DesignBannerOutputSteps {

    DesignBannerOutputPage dp;

    public DesignBannerOutputSteps(){dp = new DesignBannerOutputPage();}

    @Then("^Enter thought process \"([^\"]*)\"- Design$")
    public void enterThoughtProcessDesign(String arg0) {
        dp.enterThoughtProcessDesign(arg0);
    }

    @When("^Rate the output- Desing Banner$")
    public void rateTheOutputDesingBanner(){
        dp.rateTheOutputDesingBanner();
    }

    @And("^Click 'Save' button- Design Banner$")
    public void clickSaveButtonDesignBanner() {
        dp.clickSaveButtonDesignBanner();
    }
}
