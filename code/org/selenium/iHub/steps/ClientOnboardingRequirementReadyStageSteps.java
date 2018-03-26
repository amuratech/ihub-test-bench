package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ClientOnboardingRequirementReadyStagePage;

/**
 * Created by amura on 21/3/18.
 */
public class ClientOnboardingRequirementReadyStageSteps {
    ClientOnboardingRequirementReadyStagePage dp;

    public ClientOnboardingRequirementReadyStageSteps(){dp = new ClientOnboardingRequirementReadyStagePage();}

    @Then("^Click 'Internal kick off meeting to understand client requirements' task$")
    public void clickInternalKickOffMeetingToUnderstandClientRequirementsTask(){
        dp.clickInternalKickOffMeetingToUnderstandClientRequirementsTask();
    }


}
