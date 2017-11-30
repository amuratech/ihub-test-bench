package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SocialAuditInputPage;

public class SocialAuditInputSteps {

    SocialAuditInputPage dp;

    public SocialAuditInputSteps(){dp = new SocialAuditInputPage();}

    @Then("^Enter reference link \"([^\"]*)\"- social$")
    public void enterReferenceLinkSocial(String arg0){
        dp.enterReferenceLinkSocial(arg0);
    }

    @And("^Enter 'platform to consider'$")
    public void enterPlatformToConsider() {
        dp.enterPlatformToConsider();
    }

    @And("^Enter requirements- social audit$")
    public void enterRequirementsSocialAudit() {
        dp.enterRequirementsSocialAudit();
    }

    @And("^Enter specific objectives$")
    public void enterSpecificObjectives() {
        dp.enterSpecificObjectives();
    }

    @Then("^Click save button- social audit input$")
    public void clickSaveButtonSocialAuditInput() {
        dp.clickSaveButtonSocialAuditInput();
    }

    @And("^Click reference link accordion$")
    public void clickReferenceLinkAccordion() {
        dp.clickReferenceLinkAccordion();
    }

    @And("^Select reference link suff$")
    public void selectReferenceLinkSuff() {
        dp.selectReferenceLinkSuff();
    }

    @And("^Select 'platform to consider' suff$")
    public void selectPlatformToConsiderSuff() {
        dp.selectPlatformToConsiderSuff();
    }

    @And("^Select reqirements suff$")
    public void selectReqirementsSuff() {
        dp.selectReqirementsSuff();

    }

    @And("^Select specific objectives suff$")
    public void selectSpecificObjectivesSuff() {
        dp.selectSpecificObjectivesSuff();
    }

    @Then("^Rate the input- social audit$")
    public void rateTheInputSocialAudit() {
        dp.rateTheInputSocialAudit();
    }

    @Then("^Click accept button- social audit$")
    public void clickAcceptButtonSocialAudit() {
        dp.clickAcceptButtonSocialAudit();
    }

}
