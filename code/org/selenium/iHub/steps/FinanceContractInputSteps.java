package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.FinanceContractInputPage;

/**
 * Created by amura on 21/3/18.
 */
public class FinanceContractInputSteps {

    FinanceContractInputPage dp;

    public FinanceContractInputSteps(){dp = new FinanceContractInputPage();}

    @And("^Select Start date for the contract$")
    public void selectStartDateForTheContract(){
        dp.selectStartDateForTheContract();
    }

    @And("^Select End date for the contract$")
    public void selectEndDateForTheContract(){
        dp.selectEndDateForTheContract();
    }

    @And("^Select Billing contact details$")
    public void selectBillingContactDetails() {
        dp.selectBillingContactDetails();
    }

    @And("^Click 'Save' button- Finance Contract Input$")
    public void clickSaveButtonFinanceContractInput(){
        dp.clickSaveButtonFinanceContractInput();
    }

    @Then("^Click 'Mark as invoice raised' link$")
    public void clickMarkAsInvoiceRaisedLink(){
        dp.clickMarkAsInvoiceRaisedLink();
    }


}
