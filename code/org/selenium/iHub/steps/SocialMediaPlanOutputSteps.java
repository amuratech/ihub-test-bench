package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SocialMediaPlanOutputPage;

public class SocialMediaPlanOutputSteps {

    SocialMediaPlanOutputPage dp;

    public SocialMediaPlanOutputSteps(){dp = new SocialMediaPlanOutputPage();}

    @And("^Upload media plan output document$")
    public void uploadMediaPlanOutputDocument(){
        dp.uploadMediaPlanOutputDocument();
    }

    @Then("^Click 'Save' button- social media plan output$")
    public void clickSaveButtonSocialMediaPlanOutput(){
        dp.clickSaveButtonSocialMediaPlanOutput();
    }

    @Then("^Select media plan output doc$")
    public void selectMediaPlanOutputDoc() {
        dp.selectMediaPlanOutputDoc();
    }

    @And("^Enter 'Review based on how well the plan adheres to requested theme or idea' \"([^\"]*)\"$")
    public void enterReviewBasedOnHowWellThePlanAdheresToRequestedThemeOrIdea(String arg0) {
        dp.enterReviewBasedOnHowWellThePlanAdheresToRequestedThemeOrIdea(arg0);
    }

    @And("^Enter 'Review based on how well the plan adheres to the requested TG' \"([^\"]*)\"$")
    public void enterReviewBasedOnHowWellThePlanAdheresToTheRequestedTG(String arg0) {
        dp.enterReviewBasedOnHowWellThePlanAdheresToTheRequestedTG(arg0);
    }

    @And("^Rate the output- social media plan output$")
    public void rateTheOutputSocialMediaPlanOutput(){
        dp.rateTheOutputSocialMediaPlanOutput();
    }

    @Then("^Click deliver button- social media plan$")
    public void clickDeliverButtonSocialMediaPlan() {
        dp.clickDeliverButtonSocialMediaPlan();
    }

    @And("^Click rework button- socail media plan$")
    public void clickReworkButtonSocailMediaPlan(){
        dp.clickReworkButtonSocailMediaPlan();
    }

    @Then("^Enter thought process \"([^\"]*)\"- Social Media Plan$")
    public void enterThoughtProcessSocialMediaPlan(String arg0) {
        dp.enterThoughtProcessSocialMediaPlan(arg0);
    }
}
