package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.MarketingRequirementInputPage;
import org.selenium.iHub.pages.MarketingRequirementOutputPage;

/**
 * Created by amura on 21/3/18.
 */
public class MarketingRequirementOutputSteps {

    MarketingRequirementOutputPage dp;

    public MarketingRequirementOutputSteps(){dp = new MarketingRequirementOutputPage();}

    @Then("^Enter Technology Implementation Requirements \"([^\"]*)\"$")
    public void enterTechnologyImplementationRequirements(String arg0){
        dp.enterTechnologyImplementationRequirements(arg0);
    }

    @And("^Enter Existing Software Integration Requirements \"([^\"]*)\"$")
    public void enterExistingSoftwareIntegrationRequirements(String arg0){
        dp.enterExistingSoftwareIntegrationRequirements(arg0);
    }

    @And("^Enter Products and Services Information Gathering \"([^\"]*)\"$")
    public void enterProductsAndServicesInformationGathering(String arg0) {
        dp.enterProductsAndServicesInformationGathering(arg0);
    }

    @And("^Enter Marketing Communication Information \"([^\"]*)\"$")
    public void enterMarketingCommunicationInformation(String arg0){
        dp.enterMarketingCommunicationInformation(arg0);
    }

    @And("^Enter Brand and Creative Guidelines \"([^\"]*)\"$")
    public void enterBrandAndCreativeGuidelines(String arg0) {
        dp.enterBrandAndCreativeGuidelines(arg0);
    }

    @And("^Click 'Save' button- Marketing Requirement output$")
    public void clickSaveButtonMarketingRequirementOutput(){
        dp.clickSaveButtonMarketingRequirementOutput();
    }

    @Then("^Rate the output- Marketing Requirement output$")
    public void rateTheOutputMarketingRequirementOutput() {
        dp.rateTheOutputMarketingRequirementOutput();
    }
}
