package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.TaskOverviewAllTasksPage;

/**
 * Created by amuraqa on 22/11/17.
 */
public class TaskOverviewAllTasksSteps {

    TaskOverviewAllTasksPage dp;

    public TaskOverviewAllTasksSteps(){ dp = new TaskOverviewAllTasksPage();
    }

    @Then("^Click Unassigned$")
    public void clickUnassigned() {
        dp.clickUnassigned();
    }

    @And("^Check the status$")
    public void checkTheStatus() {
        dp.checkTheStatus();
    }

    @Then("^Click the task under In Progress$")
    public void clickTheTaskUnderInProgress() {
        dp.clickTheTaskUnderInProgress();
    }

    @Then("^Click Priority$")
    public void clickPriority() {
        dp.clickPriority();
    }

    @And("^Check the tags$")
    public void checkTheTags() {
        dp.checkTheTags();
    }

    @Then("^Click Overdue$")
    public void clickOverdue() {
        dp.clickOverdue();
    }

    @And("^Check the date$")
    public void checkTheDate() {
        dp.checkTheDate();
    }



}