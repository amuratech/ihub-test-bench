package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.DesignPublishPage;

/**
 * Created by amuraqa on 20/7/17.
 */
public class DesignPublishSteps {

    DesignPublishPage mp;

    public DesignPublishSteps(){mp = new DesignPublishPage();}

    @Then("^Select action details$")
    public void selectActionDetails() {
        mp.selectActionDetails();
    }

    @And("^Select status publish$")
    public void selectStatusPublish() {
        mp.selectStatusPublish();
    }

    @And("^Click save$")
    public void clickSave() {
        mp.clickSave();
    }




}
