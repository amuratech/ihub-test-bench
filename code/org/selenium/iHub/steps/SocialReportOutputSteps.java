package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SocialReportOutputPage;

public class SocialReportOutputSteps {

    SocialReportOutputPage dp;

    public SocialReportOutputSteps(){dp = new SocialReportOutputPage();}

    @Then("^Upload Report doc$")
    public void uploadReportDoc(){
        dp.uploadReportDoc();
    }

    @Then("^Click 'Save' button- Social Report Output$")
    public void clickSaveButtonSocialReportOutput(){
        dp.clickSaveButtonSocialReportOutput();
    }


}
