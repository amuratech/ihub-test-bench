package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SocialMediaPlanInputPage;

public class SocialMediaPlanInputSteps {

    SocialMediaPlanInputPage  dp;

    public SocialMediaPlanInputSteps(){dp = new SocialMediaPlanInputPage();}

    @Then("^Enter budget \"([^\"]*)\"- social media plan$")
    public void enterBudgetSocialMediaPlan(String arg0){
        dp.enterBudgetSocialMediaPlan(arg0);
    }

    @Then("^Enter reference website link- \"([^\"]*)\"$")
    public void enterReferenceWebsiteLink(String arg0) {
        dp.enterReferenceWebsiteLink(arg0);
    }

    @And("^Click reference website accordion$")
    public void clickReferenceWebsiteAccordion() {
        dp.clickReferenceWebsiteAccordion();
    }

    @And("^Enter objective \"([^\"]*)\"- social media plan$")
    public void enterObjectiveSocialMediaPlan(String arg0) {
        dp.enterObjectiveSocialMediaPlan(arg0);
    }

    @And("^Enter client project- social media plan$")
    public void enterClientProjectSocialMediaPlan() {
            dp.enterClientProjectSocialMediaPlan();
    }

    @And("^Enter 'who are you trying to reach'$")
    public void enterWhoAreYouTryingToReach() {
        dp.enterWhoAreYouTryingToReach();
    }

    @And("^Select 'what do you want your tg to do'$")
    public void selectWhatDoYouWantYourTgToDo() {
        dp.selectWhatDoYouWantYourTgToDo();
    }

    @Then("^Click save button- social media plan input$")
    public void clickSaveButtonSocialMediaPlanInput() {
        dp.clickSaveButtonSocialMediaPlanInput();
    }

    @And("^Select brand product specific suff$")
    public void selectBrandProductSpecificSuff() {
        dp.selectBrandProductSpecificSuff();
    }

    @And("^Select objective- social media plan$")
    public void selectObjectiveSocialMediaPlan() {
        dp.selectObjectiveSocialMediaPlan();
    }

    @And("^Select reference website link suff$")
    public void selectReferenceWebsiteLinkSuff() {
        dp.selectReferenceWebsiteLinkSuff();
    }

    @And("^Select estimated budget suff$")
    public void selectEstimatedBudgetSuff(){
        dp.selectEstimatedBudgetSuff();
    }

    @And("^Select platforms suff$")
    public void selectPlatformsSuff() {
        dp.selectPlatformsSuff();
    }

    @And("^Select suggested duration suff$")
    public void selectSuggestedDurationSuff() {
        dp.selectSuggestedDurationSuff();
    }

    @And("^Select product suff- social media plan$")
    public void selectProductSuffSocialMediaPlan() {
        dp.selectProductSuffSocialMediaPlan();
    }

    @And("^Select campaign suff- social media plan$")
    public void selectCampaignSuffSocialMediaPlan() {
        dp.selectCampaignSuffSocialMediaPlan();
    }

    @And("^Select idea suff$")
    public void selectIdeaSuff() {
        dp.selectIdeaSuff();
    }

    @And("^Select target group suff$")
    public void selectTargetGroupSuff() {
        dp.selectTargetGroupSuff();
    }

    @And("^Rate the output- social media plan$")
    public void rateTheOutputSocialMediaPlan() {
        dp.rateTheOutputSocialMediaPlan();
    }

    @Then("^Click accept button- social media plan$")
    public void clickAcceptButtonSocialMediaPlan() {
        dp.clickAcceptButtonSocialMediaPlan();
    }

    @And("^Click 'Save' button- Social MP Input$")
    public void clickSaveButtonSocialMPInput(){
        dp.clickSaveButtonSocialMPInput();
    }

    @And("^Rate the input- social media plan$")
    public void rateTheInputSocialMediaPlan() {
        dp.rateTheInputSocialMediaPlan();

    }

    @Then("^Click 'Click to add' link$")
    public void clickClickToAddLink() {
        dp.clickClickToAddLink();
    }


}
