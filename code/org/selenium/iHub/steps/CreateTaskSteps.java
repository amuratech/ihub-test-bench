package org.selenium.iHub.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.CreateTaskPage;

/**
 * Created by amuraqa on 18/7/17.
 */
public class CreateTaskSteps {

    CreateTaskPage ad;

    public CreateTaskSteps(){ad = new CreateTaskPage();}

    @Then("^Click add a task$")
    public void clickAddATask() {
        ad.clickAddATask();
    }

    @And("^Enter the client name \"([^\"]*)\"$")
    public void enterTheClientName(String arg0) {
        ad.enterTheClientName(arg0);
    }

    @And("^Select the department$")
    public void selectTheDepartment(){
        ad.selectTheDepartment();
    }

    @And("^Click on create task$")
    public void clickOnCreateTask(){
        ad.clickOnCreateTask();
    }



}
