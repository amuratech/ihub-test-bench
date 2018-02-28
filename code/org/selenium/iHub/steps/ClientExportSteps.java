package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ClientExportPage;

/**
 * Created by amura on 28/2/18.
 */
public class ClientExportSteps {

    ClientExportPage dp;

    public ClientExportSteps(){dp = new ClientExportPage();}

    @Then("^Click Client exports$")
    public void clickClientExports() {
        dp.clickClientExports();
    }

    @When("^Select Date range field- Client Exports$")
    public void selectDateRangeFieldClientExports() {
        dp.selectDateRangeFieldClientExports();
    }

    @Then("^Select Category of the client$")
    public void selectCategoryOfTheClient() {
        dp.selectCategoryOfTheClient();
    }

    @And("^Select Business vertical$")
    public void selectBusinessVertical(){
        dp.selectBusinessVertical();
    }

    @And("^Select Manager$")
    public void selectManager() {
        dp.selectManager();
    }

    @And("^Select Executive$")
    public void selectExecutive() {
        dp.selectExecutive();
    }

    @Then("^Click Client exports- User$")
    public void clickClientExportsUser() {
        dp.clickClientExportsUser();
    }

    @When("^Click 'Save' button- Client Exports$")
    public void clickSaveButtonClientExports(){
        dp.clickSaveButtonClientExports();
    }
}
