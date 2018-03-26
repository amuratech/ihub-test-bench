package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.MarketingRequirementInputPage;

/**
 * Created by amura on 21/3/18.
 */
public class MarketingRequirementInputSteps {

    MarketingRequirementInputPage dp;

    public MarketingRequirementInputSteps(){dp = new MarketingRequirementInputPage();}

    @And("^Click 'Save' button- Marketing Requirement input brief$")
    public void clickSaveButtonMarketingRequirementInputBrief() {
        dp.clickSaveButtonMarketingRequirementInputBrief();
    }
}
