package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ClientTargetGroupPage;

/**
 * Created by amura on 21/3/18.
 */
public class ClientTargetGroupSteps {
    
    ClientTargetGroupPage dp;
    
    public ClientTargetGroupSteps(){ dp = new ClientTargetGroupPage();}
    
    @When("^Select 'Target group' link$")
    public void selectTargetGroupLink() {
        dp.selectTargetGroupLink();
    }

    @Then("^Enter Minimum age- Client Target Group \"([^\"]*)\"$")
    public void enterMinimumAgeClientTargetGroup(String arg0) {
        dp.enterMinimumAgeClientTargetGroup(arg0);
    }

    @And("^Enter Maximum age- Client Target Group \"([^\"]*)\"$")
    public void enterMaximumAgeClientTargetGroup(String arg0){
        dp.enterMaximumAgeClientTargetGroup(arg0);
    }

    @And("^Select Gender- Target Group$")
    public void selectGenderTargetGroup() {
        dp.selectGenderTargetGroup();
    }

    @And("^Enter Minimum household income \"([^\"]*)\"$")
    public void enterMinimumHouseholdIncome(String arg0) {
        dp.enterMinimumHouseholdIncome(arg0);
    }

    @And("^Enter Geos \"([^\"]*)\"$")
    public void enterGeos(String arg0){
        dp.enterGeos(arg0);
    }

    @And("^Enter Micro Geos \"([^\"]*)\"$")
    public void enterMicroGeos(String arg0){
        dp.enterMicroGeos(arg0);
    }

    @And("^Click 'Save' button- Target Group$")
    public void clickSaveButtonTargetGroup() {
        dp.clickSaveButtonTargetGroup();
    }
}
