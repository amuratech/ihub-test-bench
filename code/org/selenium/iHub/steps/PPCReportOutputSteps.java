package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.PPCReportOutputPage;

public class PPCReportOutputSteps {

    PPCReportOutputPage dp;

    public PPCReportOutputSteps(){dp = new PPCReportOutputPage();}

    @Then("^Enter Optimizations undertaken \"([^\"]*)\"$")
    public void enterOptimizationsUndertaken(String arg0) {
        dp.enterOptimizationsUndertaken(arg0);
    }

    @And("^Enter Observations \"([^\"]*)\"$")
    public void enterObservations(String arg0){
        dp.enterObservations(arg0);
    }

    @And("^Upload Report document$")
    public void uploadReportDocument() {
        dp.uploadReportDocument();
    }

    @And("^Click 'Save' button- Paid Media Report Output$")
    public void clickSaveButtonPaidMediaReportOutput() {
        dp.clickSaveButtonPaidMediaReportOutput();
    }

    @Then("^Rate the output brief- Paid Media Report$")
    public void rateTheOutputBriefPaidMediaReport() {
        dp.rateTheOutputBriefPaidMediaReport();
    }
}
