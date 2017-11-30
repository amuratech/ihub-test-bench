package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentIdeaInputPage;

public class ContentIdeaInputSteps {

    ContentIdeaInputPage dp;

    public ContentIdeaInputSteps(){dp = new ContentIdeaInputPage();}

    @Then("^Enter name- content idea$")
    public void enterNameContentIdea() {
        dp.enterNameContentIdea();
    }

    @And("^Enter campaign objective \"([^\"]*)\"$")
    public void enterCampaignObjective(String arg0) {
        dp.enterCampaignObjective(arg0);
    }

    @And("^Select project- content idea$")
    public void selectProjectContentIdea() {
        dp.selectProjectContentIdea();
    }

    @And("^Enter required minimum concepts$")
    public void enterRequiredMinimumConcepts() {
        dp.enterRequiredMinimumConcepts();
    }

    @And("^Enter reason of interests$")
    public void enterReasonOfInterests() {
        dp.enterReasonOfInterests();
    }

    @And("^Click accordion$")
    public void clickAccordion(){
        dp.clickAccordion();
    }

    @And("^Click save- content idea$")
    public void clickSaveContentIdea() {
        dp.clickSaveContentIdea();
    }

    @Then("^Change the status- content idea$")
    public void changeTheStatusContentIdea() {
        dp.changeTheStatusContentIdea();
    }

    @And("^Click update task button- content idea$")
    public void clickUpdateTaskButtonContentIdea() {
        dp.clickUpdateTaskButtonContentIdea();
    }

    @And("^Select name radio button$")
    public void selectNameRadioButton() {
        dp.selectNameRadioButton();
    }

    @And("^Select campaign objective$")
    public void selectCampaignObjective() {
        dp.selectCampaignObjective();
    }

    @And("^Select about brand$")
    public void selectAboutBrand() {
        dp.selectAboutBrand();
    }

    @And("^Select reference links$")
    public void selectReferenceLinks() {
        dp.selectReferenceLinks();
    }

    @And("^Select reason of interest$")
    public void selectReasonOfInterest() {
        dp.selectReasonOfInterest();
    }

    @And("^Select required minimum concepts$")
    public void selectRequiredMinimumConcepts() {
        dp.selectRequiredMinimumConcepts();
    }

    @And("^Select blog contest idea$")
    public void selectBlogContestIdea() {
        dp.selectBlogContestIdea();
    }

    @And("^Select product radio button$")
    public void selectProductRadioButton() {
        dp.selectProductRadioButton();
    }

    @And("^Select reference images$")
    public void selectReferenceImages() {
        dp.selectReferenceImages();
    }

    @And("^Rate the brief- content idea$")
    public void rateTheBriefContentIdea() {
        dp.rateTheBriefContentIdea();
    }

    @And("^Click accept- content idea$")
    public void clickAcceptContentIdea() {
        dp.clickAcceptContentIdea();
    }
}
