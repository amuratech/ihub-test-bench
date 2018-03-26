package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
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

    @Then("^Select assignee for Marketing Brief$")
    public void selectAssigneeForMarketingBrief() {
        dp.selectAssigneeForMarketingBrief();

    }

    @Then("^Select assignee for Media Planning$")
    public void selectAssigneeForMediaPlanning(){
        dp.selectAssigneeForMediaPlanning();
    }

    @And("^Select 'Due date'$")
    public void selectDueDate(){
        dp.selectDueDate();
    }

    @And("^Select assignee for Content$")
    public void selectAssigneeForContent() {
        dp.selectAssigneeForContent();
    }

    @And("^Select assignee for Design$")
    public void selectAssigneeForDesign() {
        dp.selectAssigneeForDesign();
    }

    @Then("^Select assignee for Web Development$")
    public void selectAssigneeForWebDevelopment() {
        dp.selectAssigneeForWebDevelopment();
    }

    @Then("^Select assignee for Campaign$")
    public void selectAssigneeForCampaign() {
        dp.selectAssigneeForCampaign();
    }

    @Then("^Select assignee for Social$")
    public void selectAssigneeForSocial() {
        dp.selectAssigneeForSocial();
    }

    @Then("^Select assignee for seo$")
    public void selectAssigneeForSeo(){
        dp.selectAssigneeForSeo();
    }

    @When("^Select assignee for Delivery$")
    public void selectAssigneeForDelivery(){
        dp.selectAssigneeForDelivery();
    }
}
