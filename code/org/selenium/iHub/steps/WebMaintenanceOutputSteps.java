package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.WebMaintenanceOutputPage;

public class WebMaintenanceOutputSteps {

    WebMaintenanceOutputPage dp;

    public WebMaintenanceOutputSteps(){dp = new WebMaintenanceOutputPage();}

    @Then("^Click start working on this task- webmaintenance$")
    public void clickStartWorkingOnThisTaskWebmaintenance(){
        dp.clickStartWorkingOnThisTaskWebmaintenance();
    }

    @Then("^Click add output- webmaintenance$")
    public void clickAddOutputWebmaintenance() {
        dp.clickAddOutputWebmaintenance();
    }

    @Then("^Enter thought process \"([^\"]*)\"- webmaintenance$")
    public void enterThoughtProcessWebmaintenance(String arg0){
        dp.enterThoughtProcessWebmaintenance(arg0);
    }

    @And("^Enter URL output \"([^\"]*)\"- webmaintenance$")
    public void enterURLOutputWebmaintenance(String arg0) {
        dp.enterURLOutputWebmaintenance(arg0);
    }

    @Then("^Click submit- webmaintenance$")
    public void clickSubmitWebmaintenance() {
        dp.clickSubmitWebmaintenance();
    }

    @And("^Click update output- webmaintenance$")
    public void clickUpdateOutputWebmaintenance(){
        dp.clickUpdateOutputWebmaintenance();
    }

    @And("^Select radio URL- webmaintenance$")
    public void selectRadioURLWebmaintenance(){
        dp.selectRadioURLWebmaintenance();
    }

    @Then("^Rate the output- webmaintenance$")
    public void rateTheOutputWebmaintenance() {
        dp.rateTheOutputWebmaintenance();
    }

    @And("^Click the deliver button- webmaintenance$")
    public void clickTheDeliverButtonWebmaintenance() {
        dp.clickTheDeliverButtonWebmaintenance();
    }
}
