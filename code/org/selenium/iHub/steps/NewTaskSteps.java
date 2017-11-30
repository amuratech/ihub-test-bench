package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.NewTaskPage;

public class NewTaskSteps {

    NewTaskPage dp;

    public NewTaskSteps(){dp = new NewTaskPage();}


    @Then("^Enter task name \"([^\"]*)\"$")
    public void enterTaskName(String arg0) {
        dp.enterTaskName(arg0);
    }

    @And("^Select purpose$")
    public void selectPurpose() {
        dp.selectPurpose();
    }

    @And("^Select time slot$")
    public void selectTimeSlot(){dp.selectTimeSlot();
    }

    @Then("^Click 'save and add brief' button$")
    public void saveAndAddBriefButton() {
        dp.saveAndAddBriefButton();
    }

    @And("^Select time slot- content$")
    public void selectTimeSlotContent() {
        dp.selectTimeSlotContent();
    }

    @Then("^Click 'save and add brief' button- content$")
    public void clickSaveAndAddBriefButtonContent() {
        dp.clickSaveAndAddBriefButtonContent();
    }

    @And("^Select client project- content hoarding$")
    public void selectClientProjectContentHoarding() {
        dp.selectClientProjectContentHoarding();
    }

    @Then("^Click 'Quick add' link$")
    public void clickQuickAddLink() {
        dp.clickQuickAddLink();
    }

    @And("^Select 'Task'$")
    public void selectTask() {
        dp.selectTask();
    }

    @And("^Enter Brief \"([^\"]*)\"$")
    public void enterBrief(String arg0) {
        dp.enterBrief(arg0);
    }

    @And("^Enter Due date$")
    public void enterDueDate() {
        dp.enterDueDate();
    }

    @Then("^Click 'Add input brief' link$")
    public void clickAddInputBriefLink() {
        dp.clickAddInputBriefLink();
    }

    @And("^Click 'Edit input brief' link$")
    public void clickEditInputBriefLink() {
        dp.clickEditInputBriefLink();
    }

    @And("^Enter Task brief \"([^\"]*)\"- Finance$")
    public void enterTaskBriefFinance(String arg0) {
        dp.enterTaskBriefFinance(arg0);
    }

//    @And("^Select purpose of this task$")
//    public void selectPurposeOfThisTask() {
//        dp.selectPurposeOfThisTask();
//    }
//
//    @And("^Select time slot of this task$")
//    public void selectTimeSlotOfThisTask(){
//        dp.selectTimeSlotOfThisTask();
//    }
}
