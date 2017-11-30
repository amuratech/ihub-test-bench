package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SocialAuditOutputPage;

public class SocialAuditOutputSteps {

    SocialAuditOutputPage dp;

    public SocialAuditOutputSteps(){dp = new SocialAuditOutputPage();}


    @Then("^Click add output- social audit$")
    public void clickAddOutputSocialAudit() {
        dp.clickAddOutputSocialAudit();
    }

    @And("^Upload audit document$")
    public void uploadAuditDocument() {
        dp.uploadAuditDocument();
    }

    @Then("^Click submit button- social audit output$")
    public void clickSubmitButtonSocialAuditOutput() {
        dp.clickSubmitButtonSocialAuditOutput();
    }

    @Then("^Select audit doc suff- social$")
    public void selectAuditDocSuffSocial() {
        dp.selectAuditDocSuffSocial();
    }

    @And("^Enter 'Does the audit cover all the requirements mentioned in the tasks' \"([^\"]*)\"$")
    public void enterDoesTheAuditCoverAllTheRequirementsMentionedInTheTasks(String arg0) {
        dp.enterDoesTheAuditCoverAllTheRequirementsMentionedInTheTasks(arg0);
    }

    @And("^Enter 'Has the auditor given recommendations' \"([^\"]*)\"$")
    public void enterHasTheAuditorGivenRecommendations(String arg0) {
        dp.enterHasTheAuditorGivenRecommendations(arg0);
    }

    @And("^Enter 'Is the audit well formatted, presentable and follows our design guidelines' \"([^\"]*)\"$")
    public void enterIsTheAuditWellFormattedPresentableAndFollowsOurDesignGuidelines(String arg0) {
        dp.enterIsTheAuditWellFormattedPresentableAndFollowsOurDesignGuidelines(arg0);
    }

    @Then("^Rate the output- social audit$")
    public void rateTheOutputSocialAudit() {
        dp.rateTheOutputSocialAudit();
    }

    @And("^Click deliver button- social audit$")
    public void clickDeliverButtonSocialAudit() {
        dp.clickDeliverButtonSocialAudit();
    }

    @And("^Click rework- social audit$")
    public void clickReworkSocialAudit() {
        dp.clickReworkSocialAudit();
    }
}
