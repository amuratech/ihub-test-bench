package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.DesignSocialPostInputPage;


public class DesignSocialPostInputSteps {

    DesignSocialPostInputPage dp;

    public DesignSocialPostInputSteps(){dp = new DesignSocialPostInputPage();}


    @Then("^Select Media$")
    public void selectMedia() {
        dp.selectMedia();
    }

}
