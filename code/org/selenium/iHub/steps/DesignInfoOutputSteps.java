package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.DesignInfoOutputPage;

public class DesignInfoOutputSteps {

    DesignInfoOutputPage dp;

    public DesignInfoOutputSteps(){dp = new DesignInfoOutputPage();}

    @Then("^Select radio thought$")
    public void selectRadioThought() {
        dp.selectRadioThought();
    }

    @And("^Select radio doc$")
    public void selectRadioDoc() {
        dp.selectRadioDoc();
    }

    @Then("^Enter reason for incorrect$")
    public void enterReasonForIncorrect() {
        dp.enterReasonForIncorrect();
    }

    @And("^Enter about brand guidelines$")
    public void enterAboutBrandGuidelines() {
        dp.enterAboutBrandGuidelines();
    }

    @And("^Enter about correct fonts$")
    public void enterAboutCorrectFonts() {
        dp.enterAboutCorrectFonts();
    }

    @And("^Enter about creative$")
    public void enterAboutCreative() {
        dp.enterAboutCreative();
    }

    @And("^Enter about thought process$")
    public void enterAboutThoughtProcess(){
        dp.enterAboutThoughtProcess();
    }

    @And("^Enter if delayed$")
    public void enterIfDelayed() {
        dp.enterIfDelayed();
    }

    @And("^Rate the output$")
    public void rateTheOutput() {
        dp.rateTheOutput();
    }


    @And("^Rate the output- Design Infographics$")
    public void rateTheOutputDesignInfographics() {
        dp.rateTheOutputDesignInfographics();
    }
}
