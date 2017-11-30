package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.CampaignExecutionInputPage;

public class CampaignExecutionInputSteps {

    CampaignExecutionInputPage dp;

    public CampaignExecutionInputSteps(){dp = new CampaignExecutionInputPage();}

    @Then("^Select client project- campaign$")
    public void selectClientProjectCampaign() {
        dp.selectClientProjectCampaign();
    }

    @And("^Search and select 'client copy idea' task$")
    public void searchAndSelectClientCopyIdeaTask() {
        dp.searchAndSelectClientCopyIdeaTask();
    }

    @And("^Search and select 'website development' task$")
    public void searchAndSelectWebsiteDevelopmentTask() {
        dp.searchAndSelectWebsiteDevelopmentTask();
    }

    @And("^Enter website URL- \"([^\"]*)\"$")
    public void enterWebsiteURL(String arg0) {
        dp.enterWebsiteURL(arg0);
    }

    @And("^Search and select 'design ad' task$")
    public void searchAndSelectDesignAdTask(){
        dp.searchAndSelectDesignAdTask();
    }

    @And("^Search and select media plan task$")
    public void searchAndSelectMediaPlanTask() {
        dp.searchAndSelectMediaPlanTask();
    }

    @And("^Search and select 'content ad' task$")
    public void searchAndSelectContentAdTask() {
        dp.searchAndSelectContentAdTask();
    }

    @Then("^Click save button- campaign input$")
    public void clickSaveButtonCampaignInput(){
        dp.clickSaveButtonCampaignInput();
    }

    @And("^Click save and publish button- campaign input$")
    public void clickSaveAndPublishButtonCampaignInput() {
        dp.clickSaveAndPublishButtonCampaignInput();
    }


    @And("^Select 'website URL' suff info radio button$")
    public void selectWebsiteURLSuffInfoRadioButton() {
        dp.selectWebsiteURLSuffInfoRadioButton();
    }

    @And("^Select 'product' suff info' radio button$")
    public void selectProductSuffInfoRadioButton() {
        dp.selectProductSuffInfoRadioButton();
    }

    @And("^Select 'copy idea' suff info radio button$")
    public void selectCopyIdeaSuffInfoRadioButton(){
        dp.selectCopyIdeaSuffInfoRadioButton();
    }

    @And("^Select 'website suff' info radio button$")
    public void selectWebsiteSuffInfoRadioButton(){
        dp.selectWebsiteSuffInfoRadioButton();
    }

    @And("^Select 'design ad' suff info radio button$")
    public void selectDesignAdSuffInfoRadioButton(){
        dp.selectDesignAdSuffInfoRadioButton();
    }

    @And("^Select 'media plan' suff info radio button$")
    public void selectMediaPlanSuffInfoRadioButton(){
        dp.selectMediaPlanSuffInfoRadioButton();
    }

    @And("^Select 'content ad' suff info radio button$")
    public void selectContentAdSuffInfoRadioButton() {
        dp.selectContentAdSuffInfoRadioButton();
    }

    @Then("^Rate the input brief- campaign execution$")
    public void rateTheInputBriefCampaignExecution() {
        dp.rateTheInputBriefCampaignExecution();
    }

    @And("^Click 'accept' button- campaign execution$")
    public void clickAcceptButtonCampaignExecution() {
        dp.clickAcceptButtonCampaignExecution();
    }

}
