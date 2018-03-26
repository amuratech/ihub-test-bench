package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ClientSupervisorsPage;

/**
 * Created by amura on 19/3/18.
 */
public class ClientSupervisorsSteps {
    ClientSupervisorsPage dp;
    
    public ClientSupervisorsSteps(){dp = new ClientSupervisorsPage();}

    @When("^Select 'Add supervisors'$")
    public void selectAddSupervisors() {
        dp.selectAddSupervisors();
    }

    @Then("^Select 'Save' button- Supervisor$")
    public void selectSaveButtonSupervisor() {
        dp.selectSaveButtonSupervisor();
    }

    @When("^Click 'Add supervisor' link$")
    public void clickAddSupervisorLink() {
        dp.clickAddSupervisorLink();
    }

    @And("^Select Input Reviewer- Supervisor$")
    public void selectInputReviewerSupervisor() {
        dp.selectInputReviewerSupervisor();
    }

    @And("^Select Output Reviewer- Supervisor$")
    public void selectOutputReviewerSupervisor(){
        dp.selectOutputReviewerSupervisor();
    }

    @Then("^Select Copy as department$")
    public void selectCopyAsDepartment() {
        dp.selectCopyAsDepartment();
    }

    @Then("^Select Design as department$")
    public void selectDesignAsDepartment(){
        dp.selectDesignAsDepartment();
    }

    @Then("^Select Social Media as department$")
    public void selectSocialMediaAsDepartment() {
        dp.selectSocialMediaAsDepartment();
    }

    @Then("^Select Web Developement as department$")
    public void selectWebDevelopementAsDepartment() {
        dp.selectWebDevelopementAsDepartment();
    }

    @Then("^Select Marketing as department$")
    public void selectMarketingAsDepartment(){
        dp.selectMarketingAsDepartment();
    }

    @Then("^Select Paid Media as department$")
    public void selectPaidMediaAsDepartment() {
        dp.selectPaidMediaAsDepartment();
    }

    @Then("^Select Media Planning as department$")
    public void selectMediaPlanningAsDepartment(){
        dp.selectMediaPlanningAsDepartment();
    }

    @Then("^Select SEO as department$")
    public void selectSEOAsDepartment(){
        dp.selectSEOAsDepartment();
    }

    @Then("^Select Delivery as department$")
    public void selectDeliveryAsDepartment() {
        dp.selectDeliveryAsDepartment();
    }

    @Then("^Select QA as department$")
    public void selectQAAsDepartment() {
        dp.selectQAAsDepartment();
    }


}
