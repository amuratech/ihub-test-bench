package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 6/12/17.
 */
public class ClientSearchPage extends BasePage {
    UIElement name = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/form/div/div[2]/div[1]/div/div[1]");
    UIElement client = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div/div[2]/div[1]/div[2]");
    UIElement realEstate = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/form/div/div[2]/div[2]/div/div[1]");
    UIElement realEstateClient = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/table/thead/tr/th[1]");//*[@id="page-content-wrapper"]/div[2]/div/div[1]/table/tbody/tr[1]/td[1]
    UIElement active = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/form/div/div[2]/div[4]/div/div[1]");//*[@id="page-content-wrapper"]/div[2]/div/div[1]/table/tbody/tr[1]/td[1]
    UIElement activeClientsDetails = new UIElement(UIType.Button, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/table/thead/tr/th[1]");//*[@id="page-content-wrapper"]/div[2]/div/div[1]/table/tbody/tr[1]/td[1]

    public void showTheNameOfTheClient() {
        tDriver.myClient(client);
    }

    public void searchTheClientWithName() {
        tDriver.myClientName(name);
    }

    public void searchTheClientWithBusinessVerticalAsRealEstate() {
        tDriver.myClientRealEstate(realEstate);

    }

    public void itShouldShowAllTheClientsWhichAreInRealEstate() {
        tDriver.myRealEstateClientsDetails(realEstateClient);
    }

    public void searchTheClientWithStatusAsActive() {
        tDriver.myActiveClients(active);
    }

    public void itShouldShowAllTheActiveClients() {
        tDriver.myActiveClientsDetails(activeClientsDetails);
    }
}

