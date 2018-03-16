package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.DesignAdOutputPage;

public class DesignAdOutputSteps {

    DesignAdOutputPage dp;

    public DesignAdOutputSteps(){ dp = new DesignAdOutputPage();}

    @Then("^Click start working button- designad$")
    public void clickStartWorkingButtonDesignad()  {
        dp.clickStartWorkingButtonDesignad();
    }

    @And("^Click save- designad$")
    public void clickSaveDesignad() {
        dp.clickSaveDesignad();
    }


    @And("^Rate- Design Ad Output$")
    public void rateDesignAdOutput() {
        dp.rateDesignAdOutput();
    }

    @When("^Rate the output- Design Ad$")
    public void rateTheOutputDesignAd() {
        dp.rateTheOutputDesignAd();
    }
}
