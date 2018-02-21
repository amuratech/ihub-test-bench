package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.TaskSearchPage;

/**
 * Created by amuraqa on 5/12/17.
 */
public class TaskSearchSteps {
    TaskSearchPage dp;

    public TaskSearchSteps(){
        dp = new TaskSearchPage();
    }


    @When("^Search the task without using # as prefix \"([^\"]*)\"$")
    public void searchTheTaskWithoutUsingAsPrefix(String arg0){
        dp.searchTheTaskWithoutUsingAsPrefix(arg0);
    }

    @Then("^The task should not be found$")
    public void theTaskShouldNotBeFound(){
        dp.theTaskShouldNotBeFound();
    }

    @When("^Search the task with using # as prefix \"([^\"]*)\"$")
    public void searchTheTaskWithUsingAsPrefix(String arg0) {
        dp.searchTheTaskWithUsingAsPrefix(arg0);
    }

    @Then("^The task should be found$")
    public void theTaskShouldBeFound(){
        dp.theTaskShouldBeFound();
    }


}
