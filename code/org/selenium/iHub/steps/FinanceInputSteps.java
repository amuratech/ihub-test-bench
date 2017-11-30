package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.FinanceInputPage;

public class FinanceInputSteps {

    FinanceInputPage dp;

    public FinanceInputSteps(){dp = new FinanceInputPage();}

    @And("^Enter Amount \"([^\"]*)\"$")
    public void enterAmount(String arg0) {
        dp.enterAmount(arg0);
    }

    @And("^Select Campaign start date$")
    public void selectCampaignStartDate() {
        dp.selectCampaignStartDate();
    }

    @And("^Click 'Save' button- Finance input$")
    public void clickSaveButtonFinanceInput() {
        dp.clickSaveButtonFinanceInput();
    }

    @And("^Click 'Mark invoice raised$")
    public void clickMarkInvoiceRaised() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }


    @Then("^Click the alert$")
    public void clickTheAlert() {
        dp.clickTheAlert();
    }

    @Then("^Click the popup$")
    public void clickThePopup() {
        dp.clickThePopup();
    }
}
