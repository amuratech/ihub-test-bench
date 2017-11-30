package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.AssignTaskPage;

public class AssignTaskSteps {

    AssignTaskPage dp;

    public AssignTaskSteps(){dp = new AssignTaskPage(); }

    @Then("^Select assignee$")
    public void selectAssignee(){
        dp.selectAssignee();
    }

    @Then("^Click assign button$")
    public void clickAssignButton() {
        dp.clickAssignButton();
    }

    @Then("^Click 'Request Changes' button$")
    public void clickRequestChangesButton() {
        dp.clickRequestChangesButton();
    }

    @And("^Select 'start date' \"([^\"]*)\"$")
    public void selectStartDate(String arg0){
        dp.selectStartDate(arg0);
    }

    @And("^Select 'Start date'$")
    public void selectStartDate() {
        dp.selectStartDate();
    }
}
