package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SeoPlanOutputPage;

public class SeoPlanOutputSteps {

    SeoPlanOutputPage op;

    public SeoPlanOutputSteps(){op = new SeoPlanOutputPage();}

    @Then("^Click start working on this task button$")
    public void clickStartWorkingOnThisTaskButton() {
        op.clickStartWorkingOnThisTaskButton();
    }

    @Then("^Click output doc$")
    public void clickOutputDoc(){
        op.clickOutputDoc();
    }


    @And("^Enter suggested topics \"([^\"]*)\"$")
    public void enterSuggestedTopics(String arg0) {
        op.enterSuggestedTopics(arg0);
    }

    @And("^Click submit- seoplanoutput$")
    public void clickSubmitSeoplanoutput() {
        op.clickSubmitSeoplanoutput();
    }


    @And("^Enter (\\d+)nd URL- seo plan$")
    public void enterNdURLSeoPlan() {
        op.enterNdURLSeoPlan();
    }

    @Then("^Click 'Click to add' link for Keywords$")
    public void clickClickToAddLinkForKeywords() {
        op.clickClickToAddLinkForKeywords();
    }

    @And("^Enter Keyword \"([^\"]*)\"$")
    public void enterKeyword(String arg0) {
        op.enterKeyword(arg0);
    }

    @And("^Enter Impressions \"([^\"]*)\"$")
    public void enterImpressions(String arg0) {
        op.enterImpressions(arg0);
    }

    @And("^Enter Current SEO rank \"([^\"]*)\"$")
    public void enterCurrentSEORank(String arg0) {
        op.enterCurrentSEORank(arg0);
    }

    @And("^Enter Target SEO rank \"([^\"]*)\"$")
    public void enterTargetSEORank(String arg0) {
        op.enterTargetSEORank(arg0);
    }

    @And("^Select Category for keywords$")
    public void selectCategoryForKeywords() {
        op.selectCategoryForKeywords();
    }

    @And("^Enter Competition$")
    public void enterCompetition() {
        op.enterCompetition();
    }

    @Then("^Click 'Save' button- SEO Plan Output$")
    public void clickSaveButtonSEOPlanOutput() {
        op.clickSaveButtonSEOPlanOutput();
    }

    @And("^Rate the output- SEO Plan Output$")
    public void rateTheOutputSEOPlanOutput() {
        op.rateTheOutputSEOPlanOutput();
    }

//    @And("^Enter Keyword \"([^\"]*)\" again$")
//    public void enterKeywordAgain(String arg0) {
//        op.enterKeywordAgain(arg0);
//    }
//
//    @And("^Enter Impressions \"([^\"]*)\" again$")
//    public void enterImpressionsAgain(String arg0) {
//        op.enterImpressionsAgain(arg0);
//    }
//
//    @And("^Enter Current SEO rank \"([^\"]*)\" again$")
//    public void enterCurrentSEORankAgain(String arg0) {
//        op.enterCurrentSEORankAgain(arg0);
//    }
//
//    @And("^Enter Target SEO rank \"([^\"]*)\" again$")
//    public void enterTargetSEORankAgain(String arg0) {
//        op.enterTargetSEORankAgain(arg0);
//    }
//
//    @And("^Select Category again$")
//    public void selectCategoryAgain() {
//        op.selectCategoryAgain();
//    }
//
//    @And("^Enter Competition again$")
//    public void enterCompetitionAgain() {
//        op.enterCompetitionAgain();
//    }
}
