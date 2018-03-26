package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 21/3/18.
 */
public class ClientOnboardingInitiateStagePage extends BasePage {

    UIElement initiateOnboarding = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Initiate client onboarding')]");
    UIElement tasks = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div/div[11]/div[2]/table/tbody/tr[1]/td[1]/a");


    public void clickInitiateClientOnboardingLink() {
        tDriver.myclicking(initiateOnboarding);
    }

    public void clickGetAContractSignedFinanceTask() {
        tDriver.myclicking(tasks);
    }

    public void clickCreateClientRequirementDocumentMarketingTask() {
        tDriver.myclicking(tasks);
    }
}
