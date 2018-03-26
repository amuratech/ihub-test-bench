package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 21/3/18.
 */
public class ClientHostingDetailsPage extends BasePage {

    UIElement addHostingDetails = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div/div[2]/div/div/ul/li[4]/a/i");
    UIElement URL = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_hosting_detail_url_or_ip\"]");
    UIElement hostingType = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_hosting_detail\"]/div[1]/div[2]/div/div/div[1]");
    UIElement username = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_hosting_detail_username\"]");
    UIElement password = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_hosting_detail_password\"]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_hosting_detail\"]/div[4]/input");


    public void clickAddHostingDetailsLink() {
        tDriver.myClientAddHostingDetails(addHostingDetails);
    }

    public void enterURLOrIPAddress(String arg0) {
        tDriver.myType(URL,arg0);
    }

    public void selectTheHostingType() {
        tDriver.myClientHostingType(hostingType);
    }

    public void enterTheUsername(String arg0) {
        tDriver.myType(username,arg0);
    }

    public void enterThePassword(String arg0) {
        tDriver.myType(password,arg0);
    }

    public void clickSaveButtonClientHostingDetails() {
        tDriver.myclicking(save);
    }
}
