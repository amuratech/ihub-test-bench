package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ClientOnboardingKickOffReadyStagePage;

/**
 * Created by amura on 21/3/18.
 */
public class ClientOnboardingKickOffReadyStageSteps {

    ClientOnboardingKickOffReadyStagePage dp;

    public ClientOnboardingKickOffReadyStageSteps(){dp = new ClientOnboardingKickOffReadyStagePage();}

    @When("^Click 'Kick off meeting with the client' task$")
    public void clickKickOffMeetingWithTheClientTask(){
        dp.clickKickOffMeetingWithTheClientTask();
    }


}
