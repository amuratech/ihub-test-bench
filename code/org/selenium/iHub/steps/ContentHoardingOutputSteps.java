package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentHoardingOutputPage;

public class ContentHoardingOutputSteps {

    ContentHoardingOutputPage dp;

    public ContentHoardingOutputSteps(){dp = new ContentHoardingOutputPage();}

    @Then("^Enter Title \"([^\"]*)\"- Content Hoarding$")
    public void enterTitleContentHoarding(String arg0){
        dp.enterTitleContentHoarding(arg0);
    }

    @And("^Select Call to action$")
    public void selectCallToAction() {
        dp.selectCallToAction();
    }

    @And("^Enter Content \"([^\"]*)\"- Content$")
    public void enterContentContent(String arg0) {
        dp.enterContentContent(arg0);
    }

    @And("^Enter Thought process \"([^\"]*)\"- Content$")
    public void enterThoughtProcessContent(String arg0) {
        dp.enterThoughtProcessContent(arg0);
    }

    @Then("^Click 'Save' button- Content Hoarding Output$")
    public void clickSaveButtonContentHoardingOutput() {
            dp.clickSaveButtonContentHoardingOutput();
    }

    @Then("^Enter 'Does the content ensure it fits for the given type of hoarding & the mentioned dimensions' \"([^\"]*)\"$")
    public void enterDoesTheContentEnsureItFitsForTheGivenTypeOfHoardingTheMentionedDimensions(String arg0) {
        dp.enterDoesTheContentEnsureItFitsForTheGivenTypeOfHoardingTheMentionedDimensions(arg0);
    }

    @And("^Enter 'Has the brief been followed' \"([^\"]*)\"- Content Hoarding$")
    public void enterHasTheBriefBeenFollowedContentHoarding(String arg0) {
        dp.enterHasTheBriefBeenFollowedContentHoarding(arg0);
    }

    @And("^Enter 'Does the content cater to given TG' \"([^\"]*)\"- Content Hoading$")
    public void enterDoesTheContentCaterToGivenTGContentHoading(String arg0) {
        dp.enterDoesTheContentCaterToGivenTGContentHoading(arg0);
    }

    @And("^Enter 'Has the copywriter followed the necessary 'tone of voice'' \"([^\"]*)\"- Content Hoarding$")
    public void enterHasTheCopywriterFollowedTheNecessaryToneOfVoiceContentHoarding(String arg0) {
        dp.enterHasTheCopywriterFollowedTheNecessaryToneOfVoiceContentHoarding(arg0);
    }

    @And("^Rate the output- Content Hoarding$")
    public void rateTheOutputContentHoarding() {
        dp.rateTheOutputContentHoarding();
    }
}
