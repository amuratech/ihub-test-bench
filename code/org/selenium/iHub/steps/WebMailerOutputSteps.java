package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.WebMailerOutputPage;

public class WebMailerOutputSteps {

    WebMailerOutputPage dp;

    public WebMailerOutputSteps(){dp = new WebMailerOutputPage();}


    @Then("^Click start working button$")
    public void clickStartWorkingButton(){
        dp.clickStartWorkingButton();
    }

    @Then("^Enter thought process \"([^\"]*)\"- webmailer$")
    public void enterThoughtProcessWebmailer(String arg0) {
        dp.enterThoughtProcessWebmailer(arg0);
    }

    @And("^Upload mailer file$")
    public void uploadMailerFile() {
        dp.uploadMailerFile();
    }

    @And("^Click submit- webmaileroutput$")
    public void clickSubmitWebmaileroutput() {
        dp.clickSubmitWebmaileroutput();
    }

    @And("^Click update- webmailer$")
    public void clickUpdateWebmailer() {
        dp.clickUpdateWebmailer();
    }

    @And("^Select radio mailer file$")
    public void selectRadioMailerFile() {
        dp.selectRadioMailerFile();
    }

    @And("^Rate the adherence to submitted design$")
    public void rateTheAdherenceToSubmittedDesign() {
        dp.rateTheAdherenceToSubmittedDesign();
    }

    @And("^Rate the adherence to coding standards$")
    public void rateTheAdherenceToCodingStandards() {
        dp.rateTheAdherenceToCodingStandards();
    }

    @And("^Rate the output- webmailer$")
    public void rateTheOutputWebmailer() {
        dp.rateTheOutputWebmailer();
    }

    @Then("^Click deliver- webmailer$")
    public void clickDeliverWebmailer(){
        dp.clickDeliverWebmailer();
    }

}
