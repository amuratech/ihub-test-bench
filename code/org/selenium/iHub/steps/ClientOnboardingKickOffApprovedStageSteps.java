package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ClientOnboardingKickOffApprovedStagePage;

/**
 * Created by amura on 21/3/18.
 */
public class ClientOnboardingKickOffApprovedStageSteps {

    ClientOnboardingKickOffApprovedStagePage dp;

    public ClientOnboardingKickOffApprovedStageSteps(){dp = new ClientOnboardingKickOffApprovedStagePage();}

    @Then("^Click 'Mark as Kick-off Approved'$")
    public void clickMarkAsKickOffApproved() {
        dp.clickMarkAsKickOffApproved();
    }
}
