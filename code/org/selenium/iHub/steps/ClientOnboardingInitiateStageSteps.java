package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ClientOnboardingInitiateStagePage;

/**
 * Created by amura on 21/3/18.
 */
public class ClientOnboardingInitiateStageSteps {

    ClientOnboardingInitiateStagePage dp;

    public ClientOnboardingInitiateStageSteps(){dp = new ClientOnboardingInitiateStagePage();}

    @And("^Click 'Initiate client onboarding' link$")
    public void clickInitiateClientOnboardingLink() {
        dp.clickInitiateClientOnboardingLink();
    }

    @When("^Click 'Get a contract signed' finance task$")
    public void clickGetAContractSignedFinanceTask() {
        dp.clickGetAContractSignedFinanceTask();
    }

    @When("^Click 'Create client requirement document' marketing task$")
    public void clickCreateClientRequirementDocumentMarketingTask() {
        dp.clickCreateClientRequirementDocumentMarketingTask();
    }
}
