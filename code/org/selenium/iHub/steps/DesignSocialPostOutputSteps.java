package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.DesignSocialPostOutputPage;

/**
 * Created by amura on 8/3/18.
 */
public class DesignSocialPostOutputSteps {

    DesignSocialPostOutputPage dp;

    public DesignSocialPostOutputSteps(){dp = new DesignSocialPostOutputPage();}


    @When("^Rate the output- Design Social Post$")
    public void rateTheOutputDesignSocialPost() {
        dp.rateTheOutputDesignSocialPost();
    }

}
