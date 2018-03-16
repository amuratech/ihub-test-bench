package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentHoardingInputPage;

public class ContentHoardingInputSteps {

    ContentHoardingInputPage dp;

    public ContentHoardingInputSteps(){dp = new ContentHoardingInputPage();}

    @Then("^Enter height \"([^\"]*)\"$")
    public void enterHeight(String arg0) {
        dp.enterHeight(arg0);
    }

    @And("^Enter width \"([^\"]*)\"$")
    public void enterWidth(String arg0) {
        dp.enterWidth(arg0);
    }

    @And("^Select 'campaign plan' reference task$")
    public void selectCampaignPlanReferenceTask() {
        dp.selectCampaignPlanReferenceTask();
    }

    @And("^Select Tonality- Content Hoarding$")
    public void selectTonalityContentHoarding() {
        dp.selectTonalityContentHoarding();
    }

    @And("^Click 'Save' button- Content Hoarding$")
    public void clickSaveButtonContentHoarding() {
        dp.clickSaveButtonContentHoarding();
    }

    @And("^Select Tags- Content Hoarding$")
    public void selectTagsContentHoarding() {
        dp.selectTagsContentHoarding();
    }


    @Then("^Rate the brief- Content Hoarding$")
    public void rateTheBriefContentHoarding(){
        dp.rateTheBriefContentHoarding();
    }
}
