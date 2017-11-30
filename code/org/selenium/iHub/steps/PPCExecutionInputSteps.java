package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.PPCExecutionInputPage;

public class PPCExecutionInputSteps {

    PPCExecutionInputPage dp;

    public PPCExecutionInputSteps(){dp = new PPCExecutionInputPage();}

    @Then("^Upload Design ad reference doc$")
    public void uploadDesignAdReferenceDoc(){
        dp.uploadDesignAdReferenceDoc();
    }

    @And("^Upload Media plan reference doc$")
    public void uploadMediaPlanReferenceDoc() {
        dp.uploadMediaPlanReferenceDoc();
    }

    @And("^Upload Ad communication reference doc$")
    public void uploadAdCommunicationReferenceDoc() {
        dp.uploadAdCommunicationReferenceDoc();
    }

    @And("^Click 'Save' button- Paid Media Input")
    public void clickSaveButtonPaidMediaInput() {
        dp.clickSaveButtonPaidMediaInput();
    }


    @Then("^Upload Campaign tracking file$")
    public void uploadCampaignTrackingFile() {
        dp.uploadCampaignTrackingFile();
    }

    @And("^Select Grant the paid media access to$")
    public void selectGrantThePaidMediaAccessTo() {
        dp.selectGrantThePaidMediaAccessTo();
    }

    @And("^Enter Google analytics ID \"([^\"]*)\"$")
    public void enterGoogleAnalyticsID(String arg0) {
        dp.enterGoogleAnalyticsID(arg0);
    }
}
