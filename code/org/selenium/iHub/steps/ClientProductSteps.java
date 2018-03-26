package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.ClientProductPage;

/**
 * Created by amura on 21/3/18.
 */
public class ClientProductSteps {

    ClientProductPage dp;
    
    public ClientProductSteps(){dp = new ClientProductPage();}
    
    @When("^Select 'Add a product' link$")
    public void selectAddAProductLink() {
        dp.selectAddAProductLink();
    }

    @Then("^Select a Developer from the knowledge base$")
    public void selectADeveloperFromTheKnowledgeBase(){
        dp.selectADeveloperFromTheKnowledgeBase();
    }

    @And("^Click 'Save' button- Client product$")
    public void clickSaveButtonClientProduct() {
        dp.clickSaveButtonClientProduct();
    }

    @And("^Select a Project from the knowledge base$")
    public void selectAProjectFromTheKnowledgeBase(){
        dp.selectAProjectFromTheKnowledgeBase();
    }
}
