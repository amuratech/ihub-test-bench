package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ClientCreationPage;

/**
 * Created by amura on 16/3/18.
 */
public class ClientCreationSteps {

    ClientCreationPage dp;

    public ClientCreationSteps(){dp = new ClientCreationPage();}

    @And("^Click Client$")
    public void clickClient() {
        dp.clickClient();
    }

    @Then("^Enter Name of the client \"([^\"]*)\"$")
    public void enterNameOfTheClient(String arg0) {
        dp.enterNameOfTheClient(arg0);
    }

    @And("^Select the category of the client$")
    public void selectTheCategoryOfTheClient() {
        dp.selectTheCategoryOfTheClient();
    }

    @And("^Select Group$")
    public void selectGroup() {
        dp.selectGroup();
    }

    @Then("^Select a Manager$")
    public void selectAManager() {
        dp.selectAManager();
    }

    @And("^Select an Executive$")
    public void selectAnExecutive() {
        dp.selectAnExecutive();
    }

    @And("^Select a Secondary Executive$")
    public void selectASecondaryExecutive(){
        dp.selectASecondaryExecutive();
    }

    @And("^Select a Sales User$")
    public void selectASalesUser() {
        dp.selectASalesUser();
    }

    @And("^Enter Revenue \"([^\"]*)\"$")
    public void enterRevenue(String arg0){
        dp.enterRevenue(arg0);
    }

    @And("^Select Services$")
    public void selectServices() {
        dp.selectServices();

    }

    @And("^Enter Email domains \"([^\"]*)\"$")
    public void enterEmailDomains(String arg0){
        dp.enterEmailDomains(arg0);
    }

    @And("^Select Contract Start date$")
    public void selectContractStartDate() {
        dp.selectContractStartDate();
    }

    @And("^Select Contract End date$")
    public void selectContractEndDate() {
        dp.selectContractEndDate();
    }

    @And("^Enter Name in the Contact form \"([^\"]*)\"$")
    public void enterNameInTheContactForm(String arg0) {
        dp.enterNameInTheContactForm(arg0);
    }

    @And("^Enter Phone \"([^\"]*)\"$")
    public void enterPhone(String arg0){
        dp.enterPhone(arg0);
    }

    @And("^Enter Email \"([^\"]*)\"$")
    public void enterEmail(String arg0) {
        dp.enterEmail(arg0);
    }

    @And("^Click 'Save' button- Client$")
    public void clickSaveButtonClient() {
        dp.clickSaveButtonClient();
    }

    @And("^Select a Business Vertical$")
    public void selectABusinessVertical() {
        dp.selectABusinessVertical();
    }

    @And("^Enter Search key \"([^\"]*)\"$")
    public void enterSearchKey(String arg0) {
        dp.enterSearchKey(arg0);
    }

    @Then("^Select the Client$")
    public void selectTheClient() {
        dp.selectTheClient();
    }



}

