package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.FinanceContractPaymentDetailsPage;

/**
 * Created by amura on 21/3/18.
 */
public class FinanceContractPaymentDetailsSteps {
    
    FinanceContractPaymentDetailsPage dp;
    
    public FinanceContractPaymentDetailsSteps(){dp = new FinanceContractPaymentDetailsPage();}

    @And("^Select 'Signed on' date for the contract$")
    public void selectSignedOnDateForTheContract(){
        dp.selectSignedOnDateForTheContract();
    }


    @And("^Select Amura signatory$")
    public void selectAmuraSignatory() {
        dp.selectAmuraSignatory();
    }

    @And("^Enter Name of the contract \"([^\"]*)\"$")
    public void enterNameOfTheContract(String arg0) {
        dp.enterNameOfTheContract(arg0);
    }

    @And("^Enter Annual value \"([^\"]*)\"$")
    public void enterAnnualValue(String arg0){
        dp.enterAnnualValue(arg0);
    }

    @And("^Click 'Save' button- Finance Contract Payment Details$")
    public void clickSaveButtonFinanceContractPaymentDetails(){
        dp.clickSaveButtonFinanceContractPaymentDetails();
    }

    @When("^Click 'Mark as money received'$")
    public void clickMarkAsMoneyReceived(){
        dp.clickMarkAsMoneyReceived();
    }
}
