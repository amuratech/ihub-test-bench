package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.DesignAdBriefPage;

public class DesignAdBriefSteps {

    DesignAdBriefPage dp;

    public DesignAdBriefSteps(){dp = new DesignAdBriefPage();}

    @Then("^Enter the project name$")
    public void enterTheProjectName() {
        dp.enterTheProjectName();
    }

    @And("^Enter ad format$")
    public void enterAdFormat() {
        dp.enterAdFormat();
    }

    @And("^Upload ad copy doc$")
    public void uploadAdCopyDoc() {
       dp.uploadAdCopyDoc();
    }

    @And("^Enter trying ad$")
    public void enterTryingAd() {
        dp.enterTryingAd();
    }

    @And("^Select tg ad$")
    public void selectTgAd() {
        dp.selectTgAd();
    }

    @Then("^Click 'Save' button- Design Ad Input$")
    public void clickSaveButtonDesignAdInput() {
        dp.clickSaveButtonDesignAdInput();
    }

    @And("^Ref links$")
    public void refLinks() {
        dp.refLinks();
    }

    @And("^Ad radio button$")
    public void adRadioButton() {
        dp.adRadioButton();
    }

    @And("^Ad copy$")
    public void adCopy() {
        dp.adCopy();
    }

    @And("^Target radio button$")
    public void targetRadioButton() {
        dp.targetRadioButton();
    }

    @And("^Product radio button$")
    public void productRadioButton() {
        dp.productRadioButton();
    }

    @And("^Ref images$")
    public void refImages() {
        dp.refImages();
    }


    @Then("^Give rating$")
    public void giveRating() {
        dp.giveRating();
    }

    @And("^Click ad accept button$")
    public void clickAdAcceptButton() {
        dp.clickAdAcceptButton();
    }

    @And("^Select Ad communication content task reference$")
    public void selectAdCommunicationContentTaskReference() {
        dp.selectAdCommunicationContentTaskReference();
    }
}
