package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 16/3/18.
 */
public class ClientBillingDetailsPage extends BasePage {

    UIElement billingDetails = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div/div[2]/div/div/ul/li[7]/a/i   ");
    UIElement name = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_name')]");
    UIElement phone = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_phone')]");
    UIElement email = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_email')]");
    UIElement saveBillingDetails = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div/div[3]/input");

    public void selectTheBillingDetails() {
        tDriver.myClientBillingDetails(billingDetails);
    }

    public void enterNameForBillingDetaails(String arg0) {
        tDriver.mytype(name,arg0);

    }

    public void enterPhoneForBillingDetails(String arg0) {
        tDriver.mytype(phone,arg0);
    }

    public void clickSaveButtonBillingDetails() {
        tDriver.myClientBillingDetailsSave(saveBillingDetails);
    }

    public void enterEmailForBillingDetails(String arg0) {
        tDriver.mytype(email,arg0);
    }
}
