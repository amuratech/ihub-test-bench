package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SaveDraftPage;

/**
 * Created by amuraqa on 19/7/17.
 */
public class SaveDraftSteps {

    SaveDraftPage sp;

    public SaveDraftSteps(){sp = new SaveDraftPage();}

    @And("^Enter task type$")
    public void enterTaskType() {
        sp.enterTaskType();
    }

    @And("^Purpose of task$")
    public void purposeOfTask() {
        sp.purposeOfTask();
    }

    @And("^Enter the time$")
    public void enterTheTime() {
        sp.enterTheTime();
    }

    @Then("^Save and add brief$")
    public void saveAndAddBrief(){
        sp.saveAndAddBrief();
    }


}
