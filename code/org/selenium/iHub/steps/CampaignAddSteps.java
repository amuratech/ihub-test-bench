package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.CampaignAddPage;

public class CampaignAddSteps {

    CampaignAddPage cp;

    public CampaignAddSteps(){cp = new CampaignAddPage();}

    @And("^Enter campaign task type$")
    public void enterCampaignTaskType() {
        cp.enterCampaignTaskType();
    }


}
