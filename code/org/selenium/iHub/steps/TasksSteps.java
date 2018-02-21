package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.TasksPage;

/**
 * Created by amuraqa on 18/7/17.
 */
public class TasksSteps {

    TasksPage rp;

    public TasksSteps(){rp = new TasksPage();}


    @Then("^Click on tasks$")
    public void clickOnTasks() {
        rp.clickOnTasks();
    }

    @And("^Select design$")
    public void selectDesign(){
        rp.selectDesign();
    }

}

