package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.DesignEmailerBriefPage;

public class DesignEmailerBriefSteps {

    DesignEmailerBriefPage dp;

    public DesignEmailerBriefSteps(){dp = new DesignEmailerBriefPage();}

    @Then("^Enter emailer product name$")
    public void enterEmailerProductName() {
        dp.enterEmailerProductName();
    }

    @And("^Enter emailer trying$")
    public void enterEmailerTrying() {
        dp.enterEmailerTrying();
    }

    @And("^Select tg objective$")
    public void selectTgObjective() {
        dp.selectTgObjective();
    }

    @And("^Select emailer sub type$")
    public void selectEmailerSubType() {
        dp.selectEmailerSubType();
    }

    @Then("^Click 'Save' button- Design Emailer$")
    public void clickSaveButtonDesignEmailer() {
        dp.clickSaveButtonDesignEmailer();
    }

    @And("^Emailer type$")
    public void emailerType() {
        dp.emailerType();
    }

    @And("^Form$")
    public void form() {
        dp.form();
    }

    @And("^Content$")
    public void content() {
        dp.content();
    }

    @And("^Subject$")
    public void subject(){
        dp.subject();
    }

    @And("^Footer$")
    public void footer() {
        dp.footer();
    }

    @And("^Disclaimer$")
    public void disclaimer() {
        dp.disclaimer();
    }

    @And("^Offline creative$")
    public void offlineCreative() {
        dp.offlineCreative();
    }

    @And("^Target group$")
    public void targetGroup() {
        dp.targetGroup();
    }

    @And("^Product suff$")
    public void productSuff(){
        dp.productSuff();
    }

    @And("^Rating$")
    public void rating() {
        dp.rating();
    }

    @And("^Accept button$")
    public void acceptButton() {
        dp.acceptButton();
    }

    @Then("^Upload Offline Creative$")
    public void uploadOfflineCreative() {
        dp.uploadOfflineCreative();
    }

    @And("^Upload Content Emailer reference doc$")
    public void uploadContentEmailerReferenceDoc(){
        dp.uploadContentEmailerReferenceDoc();
    }

    @And("^Show the count$")
    public void showTheCount() {
        dp.showTheCount();
    }
}
