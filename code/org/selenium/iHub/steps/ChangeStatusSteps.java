package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ChangeStatusPage;

public class ChangeStatusSteps {

    ChangeStatusPage dp;

    public ChangeStatusSteps(){dp = new ChangeStatusPage();}

    @Then("^Select the status 'Publish'$")
    public void selectTheStatusPublish(){
        dp.selectTheStatusPublish();
    }

    @And("^Click 'Update Task' button$")
    public void clickUpdateTaskButton() {
        dp.clickUpdateTaskButton();
    }

    @And("^Click 'Update' link$")
    public void clickUpdateLink(){
        dp.clickUpdateLink();
    }

    @And("^Select 'Review'$")
    public void selectReview(){
        dp.selectReview();
    }

    @And("^Select 'Start' option$")
    public void selectStartOption() {
        dp.selectStartOption();
    }

    @And("^Select 'Publish'$")
    public void selectPublish() {
        dp.selectPublish();
    }


    @And("^Click 'Cancel'$")
    public void clickCancel(){
        dp.clickCancel();
    }

    @Then("^Click 'Edit task'$")
    public void clickEditTask() {
        dp.clickEditTask();
    }


    @Then("^Select 'Publish'- Finance$")
    public void selectPublishFinance() {
        dp.selectPublishFinance();
    }

    @Then("^Enter the Task cancellation reason \"([^\"]*)\"$")
    public void enterTheTaskCancellationReason(String arg0){
        dp.enterTheTaskCancellationReason(arg0);
    }


    @Then("^Do not enter reason for cancelling the task$")
    public void doNotEnterReasonForCancellingTheTask() {
        dp.doNotEnterReasonForCancellingTheTask();
    }
}
