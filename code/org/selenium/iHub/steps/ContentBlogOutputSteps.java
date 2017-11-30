package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentBlogOutputPage;

public class ContentBlogOutputSteps {

    ContentBlogOutputPage dp;

    public ContentBlogOutputSteps(){dp = new ContentBlogOutputPage();}


    @Then("^Click start working on this task button- contentblogpost$")
    public void clickStartWorkingOnThisTaskButtonContentblogpost() {
        dp.clickStartWorkingOnThisTaskButtonContentblogpost();
    }

    @Then("^Enter title- contentblogpost \"([^\"]*)\"$")
    public void enterTitleContentblogpost(String arg0){
        dp.enterTitleContentblogpost(arg0);
    }

    @And("^Select CTA- contentblogpost$")
    public void selectCTAContentblogpost() {
        dp.selectCTAContentblogpost();
    }

    @And("^Enter content- contentblogpost \"([^\"]*)\"$")
    public void enterContentContentblogpost(String arg0) {
        dp.enterContentContentblogpost(arg0);
    }

    @And("^Enter thought process- contentblogpost \"([^\"]*)\"$")
    public void enterThoughtProcessContentblogpost(String arg0) {
        dp.enterThoughtProcessContentblogpost(arg0);
    }

    @Then("^Change the status- contentblogpost$")
    public void changeTheStatusContentblogpost(){
        dp.changeTheStatusContentblogpost();
    }

    @And("^Click update- contentblogpost$")
    public void clickUpdateContentblogpost() {
        dp.clickUpdateContentblogpost();
    }

    @Then("^Select content suff$")
    public void selectContentSuff() {
        dp.selectContentSuff();
    }

    @And("^Select CTA suff$")
    public void selectCTASuff(){
        dp.selectCTASuff();
    }

    @And("^Select title suff$")
    public void selectTitleSuff() {
        dp.selectTitleSuff();
    }

    @And("^Select thought process suff$")
    public void selectThoughtProcessSuff() {
        dp.selectThoughtProcessSuff();
    }

    @Then("^Rate the output- contentblogpost$")
    public void rateTheOutputContentblogpost() {
        dp.rateTheOutputContentblogpost();
    }

    @And("^Click deliver- contentblogpost$")
    public void clickDeliverContentblogpost() {
        dp.clickDeliverContentblogpost();
    }

    @And("^Select design cue image suff$")
    public void selectDesignCueImageSuff() {
        dp.selectDesignCueImageSuff();
    }

    @And("^Select design cue image radio suff$")
    public void selectDesignCueImageRadioSuff() {
        dp.selectDesignCueImageRadioSuff();
    }

    @And("^Select radio design cue image suff$")
    public void selectRadioDesignCueImageSuff() {
        dp.selectRadioDesignCueImageSuff();
    }

    @And("^Select has the brief followed$")
    public void selectHasTheBriefFollowed() {
        dp.selectHasTheBriefFollowed();
    }

    @And("^Select content cater to tg$")
    public void selectContentCaterToTg(){
        dp.selectContentCaterToTg();
    }

    @And("^Select copywriter followed tone$")
    public void selectCopywriterFollowedTone() {
        dp.selectCopywriterFollowedTone();
    }

    @And("^Upload Design cue image$")
    public void uploadDesignCueImage() {
        dp.uploadDesignCueImage();
    }

    @And("^Enter Description \"([^\"]*)\"$")
    public void enterDescription(String arg0) {
        dp.enterDescription(arg0);
    }

    @Then("^Click 'Save' button- Content Blogpost$")
    public void clickSaveButtonContentBlogpost() {
        dp.clickSaveButtonContentBlogpost();
    }

    @And("^Enter 'Does the content cater to given TG' \"([^\"]*)\"$")
    public void enterDoesTheContentCaterToGivenTG(String arg0) {
        dp.enterDoesTheContentCaterToGivenTG(arg0);
    }

    @And("^Enter 'Has the copywriter followed the necessary 'tone of voice'' \"([^\"]*)\"$")
    public void enterHasTheCopywriterFollowedTheNecessaryToneOfVoice(String arg0) {
        dp.enterHasTheCopywriterFollowedTheNecessaryToneOfVoice(arg0);
    }
}
