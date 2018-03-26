package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 20/3/18.
 */
public class ClientOnboardingStagePage extends BasePage {

    UIElement clientsBreadcrumb = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[1]/div[1]/nav/a[2]");
    UIElement editClient = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(text(),'Edit client')]");
    UIElement onboardingStage = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[2]/div[2]/div/div/div[1]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id, 'edit_client_')]/div[12]/input");


    public void clickClientsBreadcrumbLink() {
        tDriver.myclicking(clientsBreadcrumb);
    }

    public void clickEditClientLink() {
        tDriver.myclicking(editClient);
    }

    public void changeTheStageToOnboarding() {
        tDriver.myClientStageOnboarding(onboardingStage);
    }

    public void clickSaveButtonOnboardingStage() {
        tDriver.myClientOnboardingStageSave(save);
    }
}
