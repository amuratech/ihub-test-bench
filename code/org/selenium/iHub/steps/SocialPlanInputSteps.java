package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SocialPlanInputPage;

public class SocialPlanInputSteps {

    SocialPlanInputPage dp;

    public SocialPlanInputSteps(){dp = new SocialPlanInputPage();}

    @And("^Select Category$")
    public void selectCategory() {
        dp.selectCategory();
    }

    @And("^Enter Theme$")
    public void enterTheme() {
        dp.enterTheme();
    }

    @And("^Enter Hashtags$")
    public void enterHashtags() {
        dp.enterHashtags();
    }

    @And("^Select second Category$")
    public void selectSecondCategory(){
        dp.selectSecondCategory();
    }

    @And("^Enter second Theme$")
    public void enterSecondTheme() {
        dp.enterSecondTheme();
    }

    @And("^Enter second Hashtags$")
    public void enterSecondHashtags(){
        dp.enterSecondHashtags();
    }

    @And("^Select third Category$")
    public void selectThirdCategory() {
        dp.selectThirdCategory();
    }

    @And("^Enter third Theme$")
    public void enterThirdTheme(){
        dp.enterThirdTheme();
    }

    @And("^Enter third Hashtags$")
        public void enterThirdHashtags() {
        dp.enterThirdHashtags();
    }

    @Then("^Click save button- Social Plan Input$")
    public void clickSaveButtonSocialPlanInput() {
        dp.clickSaveButtonSocialPlanInput();
    }

    @Then("^Rate the input- Social Plan$")
    public void rateTheInputSocialPlan() {
        dp.rateTheInputSocialPlan();
    }


}
