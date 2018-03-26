package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 21/3/18.
 */
public class MarketingRequirementOutputPage extends BasePage {

    UIElement technology = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_requirement_output\"]/div[3]/div/div/div/div[3]/div[2]");
    UIElement softwareIntegration = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_requirement_output\"]/div[6]/div/div/div/div[3]/div[2]");
    UIElement productAndServices = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_requirement_output\"]/div[7]/div/div/div/div[3]/div[2]");
    UIElement marketingCommunication = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_requirement_output\"]/div[8]/div/div/div/div[3]/div[2]");
    UIElement brandAndCreative = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_requirement_output\"]/div[9]/div/div/div/div[3]/div[2]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_requirement_output\"]/div[17]/input");
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_review\"]/div[21]/div/div/a[4]");

    public void enterTechnologyImplementationRequirements(String arg0) {
        tDriver.myType(technology,arg0);
    }

    public void enterExistingSoftwareIntegrationRequirements(String arg0) {
        tDriver.myType(softwareIntegration,arg0);
    }

    public void enterProductsAndServicesInformationGathering(String arg0) {
        tDriver.myType(productAndServices,arg0);
    }

    public void enterMarketingCommunicationInformation(String arg0) {
        tDriver.myType(marketingCommunication,arg0);
    }

    public void enterBrandAndCreativeGuidelines(String arg0) {
        tDriver.myType(brandAndCreative,arg0);
    }

    public void clickSaveButtonMarketingRequirementOutput() {
        tDriver.myclicking(save);
    }

    public void rateTheOutputMarketingRequirementOutput() {
        tDriver.myclicking(rateOutput);
    }
}
