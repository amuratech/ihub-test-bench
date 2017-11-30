package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.PPCReportInputPage;

public class PPCReportInputSteps {

    PPCReportInputPage dp;

    public PPCReportInputSteps(){dp = new PPCReportInputPage();}

//    @Then("^Report for entire campaign- Yes$")
//    public void reportForEntireCampaignYes() {
//        dp.reportForEntireCampaignYes();
//    }

    @And("^Report for entire campaign- No$")
    public void reportForEntireCampaignNo() {
        dp.reportForEntireCampaignNo();
    }

    @Then("^Enter Campaign execution task reference$")
    public void enterCampaignExecutionTaskReference() {
        dp.enterCampaignExecutionTaskReference();
    }

    @And("^Click 'Save' button- Paid Media Report Input$")
    public void clickSaveButtonPaidMediaReportInput() {
        dp.clickSaveButtonPaidMediaReportInput();
    }

    @Then("^Select start date- Paid Media Report$")
    public void selectStartDatePaidMediaReport() {
        dp.selectStartDatePaidMediaReport();
    }

    @And("^Select end date- Paid Media Report$")
    public void selectEndDatePaidMediaReport() {
        dp.selectEndDatePaidMediaReport();
    }

    @Then("^Rate the input brief- Paid Media Report$")
    public void rateTheInputBriefPaidMediaReport() {
        dp.rateTheInputBriefPaidMediaReport();
    }


}
