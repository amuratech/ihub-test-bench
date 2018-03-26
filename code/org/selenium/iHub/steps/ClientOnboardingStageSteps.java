package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ClientOnboardingStagePage;

/**
 * Created by amura on 20/3/18.
 */
public class ClientOnboardingStageSteps {

    ClientOnboardingStagePage dp;

    public ClientOnboardingStageSteps(){dp = new ClientOnboardingStagePage();}

    @When("^Click 'Clients' breadcrumb link$")
    public void clickClientsBreadcrumbLink() {
        dp.clickClientsBreadcrumbLink();
    }

    @Then("^Click 'Edit client' link$")
    public void clickEditClientLink() {
        dp.clickEditClientLink();
    }

    @And("^Change the stage to onboarding$")
    public void changeTheStageToOnboarding(){
        dp.changeTheStageToOnboarding();
    }

    @And("^Click 'Save' button- Onboarding stage$")
    public void clickSaveButtonOnboardingStage() {
        dp.clickSaveButtonOnboardingStage();
    }



}
