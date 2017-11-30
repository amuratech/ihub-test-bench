package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentSocialPostInputPage;

public class ContentSocialPostInputSteps {

    ContentSocialPostInputPage dp;

    public ContentSocialPostInputSteps(){dp = new ContentSocialPostInputPage();}

    @Then("^Enter name- content social post$")
    public void enterNameContentSocialPost() {
        dp.enterNameContentSocialPost();
    }

    @And("^Enter content brief- content social post$")
    public void enterContentBriefContentSocialPost(){
        dp.enterContentBriefContentSocialPost();
    }

    @And("^Select category- content social post$")
    public void selectCategoryContentSocialPost(){
        dp.selectCategoryContentSocialPost();
    }

    @And("^Select client project- content social post$")
    public void selectClientProjectContentSocialPost(){
        dp.selectClientProjectContentSocialPost();
    }

    @And("^Select tones of voice- content social post$")
    public void selectTonesOfVoiceContentSocialPost() {
        dp.selectTonesOfVoiceContentSocialPost();
    }

    @And("^Click save and publish button- content social post$")
    public void clickSaveAndPublishButtonContentSocialPost(){
        dp.clickSaveAndPublishButtonContentSocialPost();
    }

    @And("^Upload social post image$")
    public void uploadSocialPostImage() {
        dp.uploadSocialPostImage();
    }

    @And("^Enter 'who are you trying to reach'- content social post$")
    public void enterWhoAreYouTryingToReachContentSocialPost() {
        dp.enterWhoAreYouTryingToReachContentSocialPost();
    }

    @And("^Select 'what do you wan your tg to do'- content social post$")
    public void selectWhatDoYouWanYourTgToDoContentSocialPost() {
        dp.selectWhatDoYouWanYourTgToDoContentSocialPost();
    }

    @And("^Select category suff button$")
    public void selectCategorySuffButton() {
        dp.selectCategorySuffButton();
    }

    @And("^Select theme suff button$")
    public void selectThemeSuffButton() {
        dp.selectThemeSuffButton();
    }

    @And("^Select tags suff button$")
    public void selectTagsSuffButton(){
        dp.selectTagsSuffButton();
    }

    @And("^Select tones of voice suff button$")
    public void selectTonesOfVoiceSuffButton() {
        dp.selectTonesOfVoiceSuffButton();
    }

    @And("^Select platforms suff button$")
    public void selectPlatformsSuffButton() {
        dp.selectPlatformsSuffButton();
    }

    @And("^Select social post image suff$")
    public void selectSocialPostImageSuff() {
        dp.selectSocialPostImageSuff();
    }

    @And("^Select target group suff button$")
    public void selectTargetGroupSuffButton(){
        dp.selectTargetGroupSuffButton();
    }

    @Then("^Rate the input- content social post$")
    public void rateTheInputContentSocialPost(){
        dp.rateTheInputContentSocialPost();
    }

    @And("^Click accept button- content social post$")
    public void clickAcceptButtonContentSocialPost() {
        dp.clickAcceptButtonContentSocialPost();
    }


    @Then("^Select Theme- Content Socialpost$")
    public void selectThemeContentSocialpost(){
        dp.selectThemeContentSocialpost();
    }

    @And("^Select Tonality$")
    public void selectTonality() {
        dp.selectTonality();
    }

    @And("^Select Tags$")
    public void selectTags() {
        dp.selectTags();
    }

    @And("^Click 'Save' button- Content Social Post$")
    public void clickSaveButtonContentSocialPost() {
        dp.clickSaveButtonContentSocialPost();
    }




}
