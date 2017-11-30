package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.OutputPage;

public class OutputSteps {

    OutputPage dp;

    public OutputSteps(){dp = new OutputPage();}



    @Then("^Click 'More'$")
    public void clickMore(){
        dp.clickMore();
    }

    @And("^Select 'Edit task'$")
    public void selectEditTask(){
        dp.selectEditTask();
    }
}
