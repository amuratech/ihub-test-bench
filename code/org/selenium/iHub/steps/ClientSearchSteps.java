package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ClientSearchPage;

/**
 * Created by amuraqa on 6/12/17.
 */
public class ClientSearchSteps {

    ClientSearchPage dp;

    public ClientSearchSteps(){dp = new ClientSearchPage();}

    @Then("^Search the client with name$")
    public void searchTheClientWithName() {
        dp.searchTheClientWithName();
    }

    @Then("^Show the name of the client$")
    public void showTheNameOfTheClient() {
        dp.showTheNameOfTheClient();
    }

    @And("^Search the client with business vertical as Real Estate$")
    public void searchTheClientWithBusinessVerticalAsRealEstate() {
        dp.searchTheClientWithBusinessVerticalAsRealEstate();
    }

    @Then("^It should show all the clients which are in Real Estate$")
    public void itShouldShowAllTheClientsWhichAreInRealEstate(){
        dp.itShouldShowAllTheClientsWhichAreInRealEstate();
    }

    @And("^Search the client with status as Active$")
    public void searchTheClientWithStatusAsActive() {
        dp.searchTheClientWithStatusAsActive();
    }

    @Then("^It should show all the active clients$")
    public void itShouldShowAllTheActiveClients(){
        dp.itShouldShowAllTheActiveClients();
    }
}
