package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SocialAssetCreationOutputPage;

public class SocialAssetCreationOutputSteps {

    SocialAssetCreationOutputPage dp;

    public SocialAssetCreationOutputSteps(){dp = new SocialAssetCreationOutputPage();}

    @Then("^Enter Link to facebook \"([^\"]*)\"$")
    public void enterLinkToFacebook(String arg0) {
        dp.enterLinkToFacebook(arg0);
    }

    @And("^Click 'Save' button- Social Asset$")
    public void clickSaveButtonSocialAsset() {
        dp.clickSaveButtonSocialAsset();
    }

    @And("^Enter 'How good is the content published on every platform' \"([^\"]*)\"$")
    public void enterHowGoodIsTheContentPublishedOnEveryPlatform(String arg0){
        dp.enterHowGoodIsTheContentPublishedOnEveryPlatform(arg0);
    }

    @And("^Enter 'Have they published any initial seed content on the asset' \"([^\"]*)\"$")
    public void enterHaveTheyPublishedAnyInitialSeedContentOnTheAsset(String arg0){
        dp.enterHaveTheyPublishedAnyInitialSeedContentOnTheAsset(arg0);
    }

    @And("^Enter 'Does the creative used follow brand guidelines' \"([^\"]*)\"$")
    public void enterDoesTheCreativeUsedFollowBrandGuidelines(String arg0) {
        dp.enterDoesTheCreativeUsedFollowBrandGuidelines(arg0);
    }

    @And("^Enter 'Have they correctly tagged the industry and other categorization for the created assets' \"([^\"]*)\"$")
    public void enterHaveTheyCorrectlyTaggedTheIndustryAndOtherCategorizationForTheCreatedAssets(String arg0){
        dp.enterHaveTheyCorrectlyTaggedTheIndustryAndOtherCategorizationForTheCreatedAssets(arg0);
    }

    @And("^Rate the output- Social Asset Creation$")
    public void rateTheOutputSocialAssetCreation() {
        dp.rateTheOutputSocialAssetCreation();
    }
}
