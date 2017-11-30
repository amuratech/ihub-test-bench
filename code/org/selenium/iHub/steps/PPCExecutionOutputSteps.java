package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.PPCExecutionOutputPage;

public class PPCExecutionOutputSteps {

    PPCExecutionOutputPage dp;

    public PPCExecutionOutputSteps(){dp = new PPCExecutionOutputPage();}

    @Then("^Rate the output brief- Paid Media$")
    public void rateTheOutputBriefPaidMedia(){
        dp.rateTheOutputBriefPaidMedia();
    }


    @And("^Enter Reason for not advertising automation \"([^\"]*)\"$")
    public void enterReasonForNotAdvertisingAutomation(String arg0){
        dp.enterReasonForNotAdvertisingAutomation(arg0);
    }

    @And("^Enter Dashboard link \"([^\"]*)\"$")
    public void enterDashboardLink(String arg0){
        dp.enterDashboardLink(arg0);
    }
}
