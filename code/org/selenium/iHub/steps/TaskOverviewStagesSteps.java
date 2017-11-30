package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.TaskOverviewStagesPage;

/**
 * Created by amuraqa on 28/11/17.
 */
public class TaskOverviewStagesSteps {

    TaskOverviewStagesPage dp;

    public TaskOverviewStagesSteps(){dp = new TaskOverviewStagesPage();}

    @When("^I will click on Priority$")
    public void iWillClickOnPriority() {
        dp.iWillClickOnPriority();
    }

    @Then("^It should display the number of tasks$")
    public void itShouldDisplayTheNumberOfTasks() {
        dp.itShouldDisplayTheNumberOfTasks();
    }

    @And("^It should display the pre selected tag$")
    public void itShouldDisplayThePreSelectedTag() {
        dp.itShouldDisplayThePreSelectedTag();
    }

    @When("^I will click on Brief Change$")
    public void iWillClickOnBriefChange() {
        dp.iWillClickOnBriefChange();
    }

    @When("^I will click on Ongoing$")
    public void iWillClickOnOngoing() {
        dp.iWillClickOnOngoing();
    }

    @When("^I will click on Unassigned$")
    public void iWillClickOnUnassigned() {
        dp.iWillClickOnUnassigned();
    }

    @When("^I will click on Paused Tasks$")
    public void iWillClickOnPausedTasks() {
        dp.iWillClickOnPausedTasks();
    }

    @When("^I will click on Due Today$")
    public void iWillClickOnDueToday(){
        dp.iWillClickOnDueToday();
    }
}
