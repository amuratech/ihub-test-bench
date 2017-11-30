package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SocialPlanOutputPage;

public class SocialPlanOutputSteps {
    
    SocialPlanOutputPage dp;
    
    public SocialPlanOutputSteps(){dp = new SocialPlanOutputPage();}

    @Then("^Enter Thought process \"([^\"]*)\"$")
    public void enterThoughtProcess(String arg0) {
        dp.enterThoughtProcess(arg0);
    }

    @And("^Enter Topic \"([^\"]*)\"$")
    public void enterTopic(String arg0) {
        dp.enterTopic(arg0);
    }

    @And("^Select Theme$")
    public void selectTheme() {
        dp.selectTheme();
    }

    @And("^Select Image format- Social Plan$")
    public void selectImageFormatSocialPlan(){
        dp.selectImageFormatSocialPlan();
    }

    @And("^Enter Hashtags \"([^\"]*)\"$")
    public void enterHashtags(String arg0) {
        dp.enterHashtags(arg0);
    }

    @And("^Select Structure$")
    public void selectStructure() {
        dp.selectStructure();
    }

    @And("^Select Tones of voice$")
    public void selectTonesOfVoice() {
        dp.selectTonesOfVoice();
    }

    @And("^Enter Goal \"([^\"]*)\"$")
    public void enterGoal(String arg0) {
        dp.enterGoal(arg0);
    }

    @And("^Upload Reference image$")
    public void uploadReferenceImage() {
        dp.uploadReferenceImage();
    }

    @And("^Click 'Save' button- Social Plan Output$")
    public void clickSaveButtonSocialPlanOutput(){
        dp.clickSaveButtonSocialPlanOutput();
    }

    @And("^Enter Hashtags- Social Plan Output$")
    public void enterHashtagsSocialPlanOutput(){
        dp.enterHashtagsSocialPlanOutput();
    }



}
