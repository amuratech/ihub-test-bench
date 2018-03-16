package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.DesignSocialCoverInputPage;

public class DesignSocialCoverInputSteps {

    DesignSocialCoverInputPage dp;

    public DesignSocialCoverInputSteps(){dp = new DesignSocialCoverInputPage();}

    @Then("^Select platforms$")
    public void selectPlatforms() {
        dp.selectPlatforms();
    }

    @And("^Upload Social post content reference doc$")
    public void uploadSocialPostContentReferenceDoc() {
        dp.uploadSocialPostContentReferenceDoc();
    }

    @Then("^Click 'Save' button- Design Social Cover Input$")
    public void clickSaveButtonDesignSocialCoverInput() {
        dp.clickSaveButtonDesignSocialCoverInput();
    }

    @Then("^Rate the input- Design Social Cover$")
    public void rateTheInputDesignSocialCover() {
        dp.rateTheInputDesignSocialCover();
    }

    @And("^Select Social post content task reference$")
    public void selectSocialPostContentTaskReference() {
        dp.selectSocialPostContentTaskReference();
    }


}
