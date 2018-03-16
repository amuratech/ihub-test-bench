package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.AddBriefPage;

/**
 * Created by amuraqa on 19/7/17.
 */
public class AddBriefSteps {

    AddBriefPage p;

    public AddBriefSteps(){p = new AddBriefPage();}

    @Then("^Put client name$")
    public void putClientName() {
        p.putClientName();
    }

    @Then("^Select task sub type$")
    public void selectTaskSubType() {
        p.selectTaskSubType();
    }

    @Then("^Enter usp \"([^\"]*)\"$")
    public void enterUsp(String arg0) {
        p.enterUsp(arg0);
    }

    @And("^Click plus sign$")
    public void clickPlusSign() {
        p.clickPlusSign();
    }

    @Then("^Upload sitemap$")
    public void uploadSitemap() {
        p.uploadSitemap();
    }

    @And("^Upload functional requirements$")
    public void uploadFunctionalRequirements() {
        p.uploadFunctionalRequirements();
    }

    @Then("^Select design guidelines$")
    public void selectDesignGuidelines() {
        p.selectDesignGuidelines();
    }

    @And("^Enter reference link \"([^\"]*)\"$")
    public void enterReferenceLink(String arg0){
        p.enterReferenceLink(arg0);
    }

    @Then("^Click plus$")
    public void clickPlus() {
        p.clickPlus();
    }

    @And("^Select CTA$")
    public void selectCTA() {
        p.selectCTA();
    }

    @Then("^Enter minimum age$")
    public void enterMinimumAge() {
        p.enterMinimumAge();
    }

    @And("^Enter maximum age$")
    public void enterMaximumAge(){
        p.enterMaximumAge();
    }

    @Then("^Select gender$")
    public void selectGender(){
        p.selectGender();
    }

    @Then("^Select edu background$")
    public void selectEduBackground() {
        p.selectEduBackground();
    }

    @Then("^Enter minimum household income \"([^\"]*)\"$")
    public void enterMinimumHouseholdIncome(String arg0) {
        p.enterMinimumHouseholdIncome(arg0);
    }
    @And("^Put geos \"([^\"]*)\"$")
    public void putGeos(String arg0) {
        p.putGeos(arg0);
    }

    @And("^Put micro geos \"([^\"]*)\"$")
    public void putMicroGeos(String arg0) {
        p.putMicroGeos(arg0);
    }

    @And("^Put trying to reach \"([^\"]*)\"$")
    public void putTryingToReach(String arg0) {
        p.putTryingToReach(arg0);
    }

    @And("^Select tg to do$")
    public void selectTgToDo() {
        p.selectTgToDo();
    }

    @And("^Save$")
    public void save() {
        p.save();
    }

    @And("^Click on design$")
    public void clickOnDesign(){
        p.clickOnDesign();
    }

    @And("^Slect the action details$")
    public void slectTheActionDetails(){
        p.slectTheActionDetails();
    }

    @And("^Click design brief sidebar$")
    public void clickDesignBriefSidebar() {
        p.clickDesignBriefSidebar();
    }


    @Then("^Click save and publish later button$")
    public void clickSaveAndPublishLaterButton() {
        p.clickSaveAndPublishLaterButton();
    }

    @And("^Click update task$")
    public void clickUpdateTask() {
        p.clickUpdateTask();
    }

    @Then("^Clik on user$")
    public void clikOnUser() {
        p.clikOnUser();
    }

    @Then("^Click sign out$")
    public void clickSignOut(){
        p.clickSignOut();
    }

    @And("^Upload content website ref doc$")
    public void uploadContentWebsiteRefDoc() {
        p.uploadContentWebsiteRefDoc();
    }

    @And("^Upload content sitemap ref doc$")
    public void uploadContentSitemapRefDoc() {
        p.uploadContentSitemapRefDoc();
    }

    @And("^Select content website suff info$")
    public void selectContentWebsiteSuffInfo(){
        p.selectContentWebsiteSuffInfo();
    }

    @And("^Select content sitemap suff info$")
    public void selectContentSitemapSuffInfo(){
        p.selectContentSitemapSuffInfo();
    }

    @And("^Select content website reference task suff info$")
    public void selectContentWebsiteReferenceTaskSuffInfo() {
        p.selectContentWebsiteReferenceTaskSuffInfo();
    }

    @And("^Select content sitemap reference task suff info$")
    public void selectContentSitemapReferenceTaskSuffInfo(){
        p.selectContentSitemapReferenceTaskSuffInfo();
    }

    @Then("^Click Publish this task link$")
    public void clickPublishThisTaskLink(){
        p.clickPublishThisTaskLink();
    }

    @And("^Select Tags- Design$")
    public void selectTagsDesign() {
        p.selectTagsDesign();
    }

    @And("^Select Website content task ref- Design Website$")
    public void selectWebsiteContentTaskRefDesignWebsite(){
        p.selectWebsiteContentTaskRefDesignWebsite();
    }

    @And("^Select Sitemap content task ref- Design Website$")
    public void selectSitemapContentTaskRefDesignWebsite(){

        p.selectSitemapContentTaskRefDesignWebsite();
    }
}
