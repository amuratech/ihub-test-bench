package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ProductExportPage;
import org.selenium.iHub.utitlities.UIElement;

/**
 * Created by amura on 23/2/18.
 */
public class ProductExportSteps {
    ProductExportPage dp;

    public ProductExportSteps(){dp = new ProductExportPage();}

    @Then("^Click Product exports$")
    public void clickProductExports() {
    dp.clickProductExports();
    }

    @Then("^Click Product exports- User$")
    public void clickProductExportsUser(){
        dp.clickProductExportsUser();
    }

    @When("^Select Date range field- Product Exports$")
    public void selectDateRangeFieldProductExports() {
        dp.selectDateRangeFieldProductExports();
    }

    @Then("^Select Stage$")
    public void selectStage(){
        dp.selectStage();
    }

    @Then("^Select Client$")
    public void selectClient() {
        dp.selectClient();
    }

    @Then("^Select Creator$")
    public void selectCreator() {
        dp.selectCreator();
    }

    @When("^Click 'Save' button- Product Export$")
    public void clickSaveButtonProductExport() {
        dp.clickSaveButtonProductExport();
    }
}
