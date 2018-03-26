package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ClientOnboardingRequirementApprovedStagePage;

/**
 * Created by amura on 21/3/18.
 */
public class ClientOnboardingRequirementApprovedStageSteps {

    ClientOnboardingRequirementApprovedStagePage dp;

    public ClientOnboardingRequirementApprovedStageSteps(){dp = new ClientOnboardingRequirementApprovedStagePage();}


    @Then("^Click 'Mark as requirements approved'$")
    public void clickMarkAsRequirementsApproved(){
        dp.clickMarkAsRequirementsApproved();
    }

    @When("^Click 'Work on comprehensive marketing plan' task$")
    public void clickWorkOnComprehensiveMarketingPlanTask() {
        dp.clickWorkOnComprehensiveMarketingPlanTask();
    }


}
