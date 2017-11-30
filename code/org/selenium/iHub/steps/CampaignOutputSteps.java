package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.CampaignOutputPage;

public class CampaignOutputSteps {

    CampaignOutputPage cp;

    public CampaignOutputSteps(){cp = new CampaignOutputPage();}

    @Then("^Click plan output$")
    public void clickPlanOutput() {
        cp.clickPlanOutput();
    }

    @And("^Click objective$")
    public void clickObjective() {
        cp.clickObjective();
    }

    @And("^Click budget$")
    public void clickBudget() {
        cp.clickBudget();
    }

    @And("^Select end date$")
    public void selectEndDate() {
        cp.selectEndDate();
    }

    @And("^Select project$")
    public void selectProject() {
        cp.selectProject();
    }

    @And("^Select category$")
    public void selectCategory() {
        cp.selectCategory();
    }

    @And("^Select segment$")
    public void selectSegment() {
        cp.selectSegment();
    }

    @And("^Enter micro market$")
    public void enterMicroMarket() {
        cp.enterMicroMarket();
    }

    @And("^Enter number of units$")
    public void enterNumberOfUnits() {
        cp.enterNumberOfUnits();
    }

    @And("^Enter min age$")
    public void enterMinAge() {
        cp.enterMinAge();
    }

    @And("^Enter max age$")
    public void enterMaxAge() {
        cp.enterMaxAge();
    }

    @And("^Enter income$")
    public void enterIncome() {
        cp.enterIncome();
    }

    @And("^Enter geos$")
    public void enterGeos() {
        cp.enterGeos();
    }

    @And("^Enter micro geos$")
    public void enterMicroGeos() {
        cp.enterMicroGeos();
    }

    @And("^Enter trying$")
    public void enterTrying() {
        cp.enterTrying();
    }

}
