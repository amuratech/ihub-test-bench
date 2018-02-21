package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ExportFormatPage;

/**
 * Created by amuraqa on 8/2/18.
 */
public class ExportFormatSteps {

    ExportFormatPage dp;

    public ExportFormatSteps(){dp = new ExportFormatPage();}

    @When("^Click Export formats$")
    public void clickExportFormats(){
        dp.clickExportFormats();
    }

    @And("^Click 'Add a export format'$")
    public void clickAddAExportFormat() {
        dp.clickAddAExportFormat();
    }

    @Then("^Enter Name \"([^\"]*)\"$")
    public void enterName(String arg0) {
        dp.enterName(arg0);
    }

    @And("^Click 'Save' button- Export formats$")
    public void clickSaveButtonExportFormats() {
        dp.clickSaveButtonExportFormats();
    }

    @When("^Click 'Generate new report'$")
    public void clickGenerateNewReport(){
        dp.clickGenerateNewReport();
    }

    @Then("^Select Date range field- Export$")
    public void selectDateRangeFieldExport() {
        dp.selectDateRangeFieldExport();
    }

    @And("^Select the status- Export$")
    public void selectTheStatusExport() {
        dp.selectTheStatusExport();
    }

    @Then("^Click 'Save' button- Export$")
    public void clickSaveButtonExport(){
        dp.clickSaveButtonExport();
    }

    @When("^Click Export formats- User$")
    public void clickExportFormatsUser() {
        dp.clickExportFormatsUser();
    }

    @And("^Click 'Add new export'$")
    public void clickAddNewExport(){
        dp.clickAddNewExport();
    }

    @When("^Select the department- Export$")
    public void selectTheDepartmentExport() {
        dp.selectTheDepartmentExport();
    }

    @And("^Click 'Download' link$")
    public void clickDownloadLink() {
        dp.clickDownloadLink();
    }

    @When("^Select the Rework$")
    public void selectTheRework() {
        dp.selectTheRework();
    }
}
