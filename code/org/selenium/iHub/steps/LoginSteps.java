package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.LoginPage;


/**
 * Created by amuraqa on 18/7/17.
 */
public class LoginSteps {

    LoginPage p;

    public LoginSteps() {p = new LoginPage();}

    @Given("^Launch the url \"([^\"]*)\"$")
        public void launchTheUrl(String arg0){
            p.launchTheUrl(arg0);
        }

    @Then("^Click on username/email id \"([^\"]*)\"$")
    public void clickOnUsernameEmailId(String arg0){
            p.clickOnUsernameEmailId(arg0);
    }

    @Then("^Click on password \"([^\"]*)\"$")
    public void clickOnPassword(String arg0){
        p.clickOnPassword(arg0);
    }

    @Then("^Click on sign in button$")
    public void clickOnSignInButton() {
        p.clickOnSignInButton();
    }

    @Then("^Check the errors$")
    public void checkTheErrors() {
        p.checkTheErrors();
    }

    @Then("^Click on menu icon$")
    public void clickOnMenuIcon() {
        p.clickOnMenuIcon();
    }


    @Then("^Message displayed login successfully$")
    public void messageDisplayedLoginSuccessfully() {
        p.messageDisplayedLoginSuccessfully();
    }


    @And("^Show the count of due today$")
    public void showTheCountOfDueToday() {
        p.showTheCountOfDueToday();
    }

    @Then("^Show the count of an unassigned tasks$")
    public void showTheCountOfAnUnassignedTasks() {
        p.showTheCountOfAnUnassignedTasks();
    }

    @Then("^Show the message input brief saved$")
    public void showTheMessageInputBriefSaved() {
        p.showTheMessageInputBriefSaved();
    }

    @Then("^Check for SSL$")
    public void checkForSSL() {
        p.checkForSSL();
    }


    @Then("^Close the browser$")
    public void closeTheBrowser(){
        p.closeTheBrowser();
    }

    @Then("^Get the title and URL of the page$")
    public void getTheTitleAndUrlOfThePage(){
        p.getTheTitleAndUrlOfThePage();
    }

    @When("^Enter \"([^\"]*)\" and \"([^\"]*)\"$")
    public void enterAnd(String arg0, String arg1){
        p.enterAnd(arg0, arg1);
    }
}