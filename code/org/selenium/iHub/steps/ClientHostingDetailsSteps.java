package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ClientHostingDetailsPage;

/**
 * Created by amura on 21/3/18.
 */
public class ClientHostingDetailsSteps {

    ClientHostingDetailsPage dp;

    public ClientHostingDetailsSteps(){ dp = new ClientHostingDetailsPage();}


    @When("^Click 'Add hosting details' link$")
    public void clickAddHostingDetailsLink(){
        dp.clickAddHostingDetailsLink();
    }

    @Then("^Enter URL or IP address \"([^\"]*)\"$")
    public void enterURLOrIPAddress(String arg0){
        dp.enterURLOrIPAddress(arg0);
    }

    @And("^Select the Hosting type$")
    public void selectTheHostingType(){
        dp.selectTheHostingType();
    }

    @And("^Enter the Username \"([^\"]*)\"$")
    public void enterTheUsername(String arg0) {
        dp.enterTheUsername(arg0);
    }

    @And("^Enter the Password \"([^\"]*)\"$")
    public void enterThePassword(String arg0) {
        dp.enterThePassword(arg0);
    }

    @And("^Click 'Save' button- Client hosting details$")
    public void clickSaveButtonClientHostingDetails() {
        dp.clickSaveButtonClientHostingDetails();
    }
}
