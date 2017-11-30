package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentSocialPostOutputPage;

public class ContentSocialPostOutputSteps {

    ContentSocialPostOutputPage dp;

    public ContentSocialPostOutputSteps(){dp = new ContentSocialPostOutputPage(); }


    @And("^Enter thought process \"([^\"]*)\"- content social post$")
    public void enterThoughtProcessContentSocialPost(String arg0) {
        dp.enterThoughtProcessContentSocialPost(arg0);
    }

    @And("^Upload content doc- content social post$")
    public void uploadContentDocContentSocialPost(){
        dp.uploadContentDocContentSocialPost();
    }

    @Then("^Click save button- Content Social Post$")
    public void clickSaveButtonContentSocialPost(){
        dp.clickSaveButtonContentSocialPost();

    }

    @And("^Enter 'Has the copy writer followed the necessary 'tone of voice'' \"([^\"]*)\"$")
    public void enterHasTheCopyWriterFollowedTheNecessaryToneOfVoice(String arg0) {
        dp.enterHasTheCopyWriterFollowedTheNecessaryToneOfVoice(arg0);
    }

    @And("^Enter 'Are the design cues in line with the submitted output' \"([^\"]*)\"- Content Social Post$")
    public void enterAreTheDesignCuesInLineWithTheSubmittedOutputContentSocialPost(String arg0) {
        dp.enterAreTheDesignCuesInLineWithTheSubmittedOutputContentSocialPost(arg0);

    }
}
