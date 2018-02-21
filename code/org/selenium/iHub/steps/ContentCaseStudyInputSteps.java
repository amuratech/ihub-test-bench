package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ContentCaseStudyInputPage;

/**
 * Created by amuraqa on 24/1/18.
 */
public class ContentCaseStudyInputSteps {

    ContentCaseStudyInputPage dp;

    public ContentCaseStudyInputSteps(){dp = new ContentCaseStudyInputPage();}

    @Then("^Enter Purpose \"([^\"]*)\"- Content Case Study input$")
    public void enterPurposeContentCaseStudyInput(String arg0){
        dp.enterPurposeContentCaseStudyInput(arg0);
    }

    @And("^Enter Results \"([^\"]*)\"$")
    public void enterResults(String arg0) {
        dp.enterResults(arg0);
    }

    @And("^Enter Keywords- Content Case Study input$")
    public void enterKeywordsContentCaseStudyInput() {
        dp.enterKeywordsContentCaseStudyInput();
    }

    @And("^Enter Strategy and execution details \"([^\"]*)\"$")
    public void enterStrategyAndExecutionDetails(String arg0) {
        dp.enterStrategyAndExecutionDetails(arg0);
    }

    @And("^Click 'Save' button- Content Case Study Input$")
    public void clickSaveButtonContentCaseStudyInput() {
        dp.clickSaveButtonContentCaseStudyInput();
    }

    @And("^Rate the brief- Content Case Study$")
    public void rateTheBriefContentCaseStudy() {
        dp.rateTheBriefContentCaseStudy();
    }



}
