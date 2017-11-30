package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SocialAssetCreationInputPage;

public class SocialAssetCreationInputSteps {

    SocialAssetCreationInputPage dp;

    public SocialAssetCreationInputSteps(){dp = new SocialAssetCreationInputPage();}

    @Then("^Select 'platforms to be created'$")
    public void selectPlatformsToBeCreated() {
        dp.selectPlatformsToBeCreated();
    }

    @And("^Enter contact name \"([^\"]*)\"$")
    public void enterContactName(String arg0){
        dp.enterContactName(arg0);
    }

    @And("^Enter email \"([^\"]*)\"$")
    public void enterEmail(String arg0){
        dp.enterEmail(arg0);
    }

    @And("^Enter contact email \"([^\"]*)\"$")
    public void enterContactEmail(String arg0) {
        dp.enterContactEmail(arg0);
    }

    @And("^Enter phone number \"([^\"]*)\"$")
    public void enterPhoneNumber(String arg0) {
        dp.enterPhoneNumber(arg0);
    }

    @Then("^Click save button- social asset creation input$")
    public void clickSaveButtonSocialAssetCreationInput() {
        dp.clickSaveButtonSocialAssetCreationInput();
    }

    @And("^Select 'platforms to be created' suff$")
    public void selectPlatformsToBeCreatedSuff() {
        dp.selectPlatformsToBeCreatedSuff();
    }

    @And("^Select contact name suff$")
    public void selectContactNameSuff() {
        dp.selectContactNameSuff();
    }

    @And("^Select email suff$")
    public void selectEmailSuff(){
        dp.selectEmailSuff();
    }

    @And("^Select contact email suff$")
    public void selectContactEmailSuff() {
        dp.selectContactEmailSuff();
    }
    @And("^Select contact number suff$")
    public void selectContactNumberSuff() {
        dp.selectContactNumberSuff();
    }

    @And("^Rate the input- social asset creation$")
    public void rateTheInputSocialAssetCreation() {
        dp.rateTheInputSocialAssetCreation();
    }

    @Then("^Click accept button- social asset creation$")
    public void clickAcceptButtonSocialAssetCreation() {
        dp.clickAcceptButtonSocialAssetCreation();
    }

    @And("^Click request changes- social asset creation$")
    public void clickRequestChangesSocialAssetCreation(){
        dp.clickRequestChangesSocialAssetCreation();
    }


}
