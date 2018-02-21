package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ReportFormatPage;

/**
 * Created by amuraqa on 30/1/18.
 */
public class ReportFormatSteps {

    ReportFormatPage dp;

    public ReportFormatSteps(){dp = new ReportFormatPage();}

    @And("^Click Reports$")
    public void clickReports() {
        dp.clickReports();
    }

    @When("^Click 'Add a report format'$")
    public void clickAddAReportFormat() {
        dp.clickAddAReportFormat();
    }

    @Then("^Enter Name of the report format \"([^\"]*)\"$")
    public void enterNameOfTheReportFormat(String arg0){
        dp.enterNameOfTheReportFormat(arg0);
    }

    @And("^Select Group by$")
    public void selectGroupBy() {
        dp.selectGroupBy();
    }

    @When("^Select Metric name$")
    public void selectMetricName() {
        dp.selectMetricName();
    }

    @Then("^Select Calculate by$")
    public void selectCalculateBy() {
        dp.selectCalculateBy();
    }

    @And("^Click 'Save' button- Report Format$")
    public void clickSaveButtonReportFormat(){
        dp.clickSaveButtonReportFormat();
    }

    @When("^Click 'Create report'$")
    public void clickCreateReport() {
        dp.clickCreateReport();
    }

    @Then("^Select Date range field$")
    public void selectDateRangeField(){
        dp.selectDateRangeField();
    }

    @And("^Select Date range field value$")
    public void selectDateRangeFieldValue(){
        dp.selectDateRangeFieldValue();
    }

    @When("^Select Department$")
    public void selectDepartment() {
        dp.selectDepartment();
    }

    @And("^Click 'Save' button- Create report$")
    public void clickSaveButtonCreateReport(){
        dp.clickSaveButtonCreateReport();
    }

    @And("^Select 'Generate new report'$")
    public void selectGenerateNewReport(){
        dp.selectGenerateNewReport();
    }


    @And("^Select 'Show'$")
    public void selectShow() {
        dp.selectShow();
    }

    @And("^Select 'View all reports'$")
    public void selectViewAllReports() {
    dp.selectViewAllReports();
    }

    @When("^Click Reports- All users$")
    public void clickReportsAllUsers() {
        dp.clickReportsAllUsers();
    }

    @Then("^Select 'Build report'$")
    public void selectBuildReport(){
        dp.selectBuildReport();
    }

    @Then("^Click 'Generate Report' button$")
    public void clickGenerateReportButton() {
        dp.clickGenerateReportButton();
    }

    @And("^Show the report$")
    public void showTheReport(){
        dp.showTheReport();
    }
}
