package org.selenium.iHub.steps;

import cucumber.api.java.en.And;
import org.selenium.iHub.pages.AddInputBriefPage;

public class AddInputBriefSteps {

    AddInputBriefPage dp;

    public AddInputBriefSteps(){dp = new AddInputBriefPage();}

    @And("^Click 'add input brief' link$")
    public void clickAddInputBriefLink() {
        dp.clickAddInputBriefLink();
    }
}
