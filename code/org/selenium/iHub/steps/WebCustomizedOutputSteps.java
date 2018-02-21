package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.WebCustomizedOutputPage;
import org.selenium.iHub.pages.WebMaintenanceOutputPage;

public class WebCustomizedOutputSteps {

    WebCustomizedOutputPage dp;

    public WebCustomizedOutputSteps(){dp = new WebCustomizedOutputPage();}

    @Then("^Click start working- webcustomized$")
    public void clickStartWorkingWebcustomized() {
        dp.clickStartWorkingWebcustomized();
    }

    @And("^Enter QA software link \"([^\"]*)\"- webcustomized$")
    public void enterQASoftwareLinkWebcustomized(String arg0){
        dp.enterQASoftwareLinkWebcustomized(arg0);
    }

    @And("^Enter staging link \"([^\"]*)\"- webcustomized$")
    public void enterStagingLinkWebcustomized(String arg0)
    {
        dp.enterStagingLinkWebcustomized(arg0);
    }

    @And("^Upload approval doc- webcustomized$")
    public void uploadApprovalDocWebcustomized() {
        dp.uploadApprovalDocWebcustomized();
    }

    @Then("^Click submit- webcustomized$")
    public void clickSubmitWebcustomized() {
        dp.clickSubmitWebcustomized();
    }

    @Then("^Change the status- webdev$")
    public void changeTheStatusWebdev() {
        dp.changeTheStatusWebdev();
    }

    @And("^Click update button- webdev$")
    public void clickUpdateButtonWebdev() {
        dp.clickUpdateButtonWebdev();
    }

    @Then("^Rate the output- webcustomized$")
    public void rateTheOutputWebcustomized() {
        dp.rateTheOutputWebcustomized();
    }

    @And("^Click deliver- webcustomized$")
    public void clickDeliverWebcustomized(){
        dp.clickDeliverWebcustomized();
    }

    @And("^Give link to QA project \"([^\"]*)\"$")
    public void giveLinkToQAProject(String arg0) {
        dp.giveLinkToQAProject(arg0);
    }


}
