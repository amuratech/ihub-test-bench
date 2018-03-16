package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import org.selenium.iHub.pages.ContentEmailerOutputPage;

public class ContentEmailerOutputSteps {

    ContentEmailerOutputPage dp;

    public ContentEmailerOutputSteps(){dp = new ContentEmailerOutputPage();}

    @And("^Enter Call to action \"([^\"]*)\"$")
    public void enterCallToAction(String arg0) {
        dp.enterCallToAction(arg0);
    }

    @And("^Enter Subject line \"([^\"]*)\"$")
    public void enterSubjectLine(String arg0) {
        dp.enterSubjectLine(arg0);
    }

    @And("^Click 'Save' button- Content Emailer Output$")
    public void clickSaveButtonContentEmailerOutput() {
        dp.clickSaveButtonContentEmailerOutput();
    }

    @And("^Enter 'Has the brief been followed' \"([^\"]*)\"- Content Emailer$")
    public void enterHasTheBriefBeenFollowedContentEmailer(String arg0) {
        dp.enterHasTheBriefBeenFollowedContentEmailer(arg0);
    }

    @And("^Enter 'Are the design cues, if submitted, in line with the submitted output' \"([^\"]*)\"$")
    public void enterAreTheDesignCuesIfSubmittedInLineWithTheSubmittedOutput(String arg0) {
        dp.enterAreTheDesignCuesIfSubmittedInLineWithTheSubmittedOutput(arg0);
    }

    @And("^Enter 'Does the content cater to given TG' \"([^\"]*)\"- Content Emailer$")
    public void enterDoesTheContentCaterToGivenTGContentEmailer(String arg0) {
        dp.enterDoesTheContentCaterToGivenTGContentEmailer(arg0);
    }

    @And("^Enter 'Has the copy writer followed the necessary 'tone of voice'' \"([^\"]*)\"- Content Emailer$")
    public void enterHasTheCopyWriterFollowedTheNecessaryToneOfVoiceContentEmailer(String arg0) {
        dp.enterHasTheCopyWriterFollowedTheNecessaryToneOfVoiceContentEmailer(arg0);
    }

    @And("^Rate the output- Content Emailer$")
    public void rateTheOutputContentEmailer() {
        dp.rateTheOutputContentEmailer();
    }

    @And("^Select Call to action- Content Emailer$")
    public void selectCallToActionContentEmailer(){
        dp.selectCallToActionContentEmailer();
    }
}
