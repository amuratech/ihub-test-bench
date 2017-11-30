package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.MediaPlanOutputPage;

public class MediaPlanOutputSteps {

    MediaPlanOutputPage dp;

    public MediaPlanOutputSteps(){dp = new MediaPlanOutputPage();}

    @And("^Click start working button- media plan$")
    public void clickStartWorkingButtonMediaPlan() {
        dp.clickStartWorkingButtonMediaPlan();
    }

    @Then("^Click media plan output$")
    public void clickMediaPlanOutput() {
        dp.clickMediaPlanOutput();
    }

    @Then("^Enter name of publisher$")
    public void enterNameOfPublisher(){
        dp.enterNameOfPublisher();
    }

    @And("^Enter budget- media plan \"([^\"]*)\"$")
    public void enterBudgetMediaPlan(String arg0){
        dp.enterBudgetMediaPlan(arg0);
    }

    @And("^Enter clicks \"([^\"]*)\"$")
    public void enterClicks(String arg0) {
        dp.enterClicks(arg0);
    }

    @And("^Enter visits \"([^\"]*)\"$")
    public void enterVisits(String arg0) {
        dp.enterVisits(arg0);
    }

    @And("^Enter inquiries \"([^\"]*)\"$")
    public void enterInquiries(String arg0) {
        dp.enterInquiries(arg0);
    }

    @Then("^Click submit button- media plan output$")
    public void clickSubmitButtonMediaPlanOutput(){
        dp.clickSubmitButtonMediaPlanOutput();
    }

    @And("^Select start date suff info- output$")
    public void selectStartDateSuffInfoOutput() {
        dp.selectStartDateSuffInfoOutput();
    }

    @And("^Select end date suff info- output$")
    public void selectEndDateSuffInfoOutput() {
        dp.selectEndDateSuffInfoOutput();
    }

    @And("^Select objective- output$")
    public void selectObjectiveOutput() {
        dp.selectObjectiveOutput();
    }

    @And("^Select total budget$")
    public void selectTotalBudget() {
        dp.selectTotalBudget();
    }

    @And("^Select total clicks$")
    public void selectTotalClicks() {
        dp.selectTotalClicks();
    }

    @And("^Select total visits$")
    public void selectTotalVisits() {
        dp.selectTotalVisits();
    }

    @And("^Select total inquiries$")
    public void selectTotalInquiries(){
        dp.selectTotalInquiries();
    }

    @And("^Select average cpa$")
    public void selectAverageCpa() {
        dp.selectAverageCpa();
    }

    @And("^Select publishers$")
    public void selectPublishers() {
        dp.selectPublishers();
    }

    @And("^Rate the output- media plan$")
    public void rateTheOutputMediaPlan() {
        dp.rateTheOutputMediaPlan();
    }

    @Then("^Click deliver button- media plan$")
    public void clickDeliverButtonMediaPlan() {
        dp.clickDeliverButtonMediaPlan();
    }

}
