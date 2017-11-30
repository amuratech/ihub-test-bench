package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.DevBriefPage;

/**
 * Created by amuraqa on 19/7/17.
 */
public class DevBriefSteps {
    DevBriefPage pm;

    public DevBriefSteps(){pm = new DevBriefPage();}

    @Then("^Enter the name$")
    public void enterTheName() {
        pm.enterTheName();
    }

    @And("^Put brief$")
    public void putBrief() {
        pm.putBrief();
    }

    @Then("^Enter name \"([^\"]*)\"$")
    public void enterName(String arg0) {
        pm.enterName(arg0);
    }

    @And("^Put the brief \"([^\"]*)\"$")
    public void putTheBrief(String arg0){
        pm.putTheBrief(arg0);
    }

    @And("^Select website type$")
    public void selectWebsiteType() {
        pm.selectWebsiteType();
    }

    @And("^Select cms$")
    public void selectCms() {
        pm.selectCms();
    }

    @Then("^Select crm integration$")
    public void selectCrmIntegration() {
        pm.selectCrmIntegration();
    }

    @Then("^Select functionality requirement$")
    public void selectFunctionalityRequirement() {
        pm.selectFunctionalityRequirement();
    }

    @And("^Upload animation$")
    public void uploadAnimation() {
        pm.uploadAnimation();
    }

    @And("^Upload form$")
    public void uploadForm() {
     pm.uploadForm();
    }

    @And("^Upload content$")
    public void uploadContent() {
        pm.uploadContent();
    }

//    @Then("^Select the hosting type$")
//    public void selectTheHostingType() {
//        pm.selectTheHostingType();
//    }

    @Then("^Click save and publish$")
    public void clickSaveAndPublish(){
        pm.clickSaveAndPublish();
    }

    @And("^Click on web development$")
    public void clickOnWebDevelopment() {
        pm.clickOnWebDevelopment();
    }

    @Then("^Click on action details$")
    public void clickOnActionDetails() {
        pm.clickOnActionDetails();
    }

    @And("^Click on development brief$")
    public void clickOnDevelopmentBrief(){
        pm.clickOnDevelopmentBrief();
    }

}
