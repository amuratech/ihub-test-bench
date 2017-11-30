package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.PassForgotPage;

/**
 * Created by amuraqa on 21/7/17.
 */
public class PassForgotSteps {

    PassForgotPage mp;

    public PassForgotSteps(){mp = new PassForgotPage();}

    @Then("^Click on 'click here'$")
    public void clickOnClickHere(){
        mp.clickOnClickHere();
    }

    @Then("^Enter email id \"([^\"]*)\"$")
    public void enterEmailId(String arg0) {
        mp.enterEmailId(arg0);
    }

    @And("^Click submit button$")
    public void clickSubmitButton(){
        mp.clickSubmitButton();
    }


    @Then("^Didn't receive confirmation$")
    public void didnTReceiveConfirmation(){
        mp.didnTReceiveConfirmation();
    }

    @And("^Click resend button$")
    public void clickResendButton() {
        mp.clickResendButton();
    }


}
