package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 16/3/18.
 */
public class ClientCreationPage extends BasePage {

    UIElement client = new UIElement(UIType.Button, UILocatorType.Xpath,"/html/body/nav/div/ul[2]/li/ul/li[1]/a");
    UIElement name = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_name\"]");
    UIElement category = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client\"]/div[2]/div[1]/div/div/div[1]");
    UIElement group = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client\"]/div[2]/div[2]/div/div/div[1]");
    UIElement manager = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client\"]/div[4]/div[1]/div/div/div[1]");
    UIElement executive = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client\"]/div[4]/div[2]/div/div/div[1]");
    UIElement secondaryExecutive = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client\"]/div[5]/div[1]/div/div/div[1]");
    UIElement salesUser = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client\"]/div[5]/div[2]/div/div/div[1]");
    UIElement revenue = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_revenue\"]");
    UIElement services = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client\"]/div[8]/div[1]/div/div/div[1]");
    UIElement emailDomain = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client\"]/div[8]/div[2]/div/div/div[1]");
    UIElement startDate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_contract_start_date\"]");
    UIElement endDate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_contract_end_date\"]");
    UIElement nameContact = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_contact_attributes_name\"]");
    UIElement phone = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_contact_attributes_phone\"]");
    UIElement email = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_contact_attributes_email\"]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client\"]/div[12]/input");
    UIElement businessVertical = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client\"]/div[6]/div[1]/div/div/div[1]");
    UIElement searchKey = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_search_key\"]");
    UIElement clientFilter = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/form/div/div[2]/div[1]/div/div[1]");

    public void clickClient() {
        tDriver.myclicking(client);
    }

    public void enterNameOfTheClient(String arg0) {
        tDriver.mytype(name,arg0);
    }

    public void selectTheCategoryOfTheClient() {
        tDriver.myClientCategory(category);
    }

    public void selectGroup() {
        tDriver.myClientGroup(group);

    }

    public void selectAManager() {
        tDriver.myClientManager(manager);

    }

    public void selectAnExecutive() {
        tDriver.myClientExecutive(executive);

    }

    public void selectASecondaryExecutive() {
        tDriver.myClientSecondaryExecutive(secondaryExecutive);

    }

    public void selectASalesUser() {
        tDriver.myClientSalesUser(salesUser);

    }

    public void enterRevenue(String arg0) {
        tDriver.mytype(revenue,arg0);
    }

    public void selectServices() {
        tDriver.myClientServices(services);
    }


    public void enterEmailDomains(String arg0) {
        tDriver.myClientEmailDomain(emailDomain,arg0);
    }

    public void selectContractStartDate() {
        tDriver.myClientContractStartDate(startDate);

    }

    public void selectContractEndDate() {
        tDriver.myClientContractEndDate(endDate);

    }

    public void enterNameInTheContactForm(String arg0) {
        tDriver.mytype(nameContact,arg0);
    }

    public void enterPhone(String arg0) {
        tDriver.mytype(phone,arg0);
    }

    public void enterEmail(String arg0) {
        tDriver.mytype(email,arg0);
    }


    public void clickSaveButtonClient() {
        tDriver.myClientCreateSave(save);
    }

    public void selectABusinessVertical() {
        tDriver.myClientBusinessVertical(businessVertical);

    }

    public void enterSearchKey(String arg0) {
        tDriver.myType(searchKey,arg0);
    }

    public void selectTheClient() {
        tDriver.myClientFilter(clientFilter);

    }
}
