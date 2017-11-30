package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentSitemapInputPage;

public class ContentSitemapInputSteps {

    ContentSitemapInputPage dp;

    public ContentSitemapInputSteps(){dp = new ContentSitemapInputPage();}

    @Then("^Enter name \"([^\"]*)\"- content sitemap$")
    public void enterNameContentSitemap(String arg0) {
        dp.enterNameContentSitemap(arg0);
    }

    @And("^Enter content brief \"([^\"]*)\"- content sitemap$")
    public void enterContentBriefContentSitemap(String arg0){
        dp.enterContentBriefContentSitemap(arg0);
    }

    @And("^Enter 'campaign plan' reference task$")
    public void enterCampaignPlanReferenceTask() {
        dp.enterCampaignPlanReferenceTask();
    }

    @And("^Enter USPs \"([^\"]*)\"$")
    public void enterUSPs(String arg0) {
        dp.enterUSPs(arg0);
    }

    @Then("^Click USP accordion$")
    public void clickUSPAccordion() {
        dp.clickUSPAccordion();
    }

    @Then("^Enter mininum age \"([^\"]*)\"$")
    public void enterMininumAge(String arg0) {
        dp.enterMininumAge(arg0);

    }

    @And("^Enter maximum age \"([^\"]*)\"$")
    public void enterMaximumAge(String arg0) {
        dp.enterMaximumAge(arg0);
    }

    @And("^Select gender- male$")
    public void selectGenderMale() {
        dp.selectGenderMale();
    }

    @And("^Enter geos \"([^\"]*)\"$")
    public void enterGeos(String arg0) {
        dp.enterGeos(arg0);
    }

    @And("^Enter micro geos \"([^\"]*)\"$")
    public void enterMicroGeos(String arg0) {
        dp.enterMicroGeos(arg0);
    }

    @And("^Enter 'who are you trying to reach' \"([^\"]*)\"$")
    public void enterWhoAreYouTryingToReach(String arg0) {
        dp.enterWhoAreYouTryingToReach(arg0);
    }

    @And("^Select 'what do you want your tg to do'- content$")
    public void selectWhatDoYouWantYourTgToDoContent() {
        dp.selectWhatDoYouWantYourTgToDoContent();
    }

//    @Then("^Click 'Save' button- content sitemap$")
//    public void clickSaveButtonContentSitemap() {
//        dp.clickSaveButtonContentSitemap();
//    }

    @Then("^Click 'Save' button- Content Sitemap Input$")
    public void clickSaveButtonContentSitemapInput() {
        dp.clickSaveButtonContentSitemapInput();
    }

    @And("^Rate the brief- Content Sitemap Input$")
    public void rateTheBriefContentSitemapInput(){
        dp.rateTheBriefContentSitemapInput();
    }


    @Then("^Click 'Save' button- content sitemap$")
    public void clickSaveButtonContentSitemap() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

}
