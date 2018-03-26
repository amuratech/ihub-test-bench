package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amura on 21/3/18.
 */
public class FinanceContractPaymentDetailsPage extends BasePage {

    UIElement signedOn = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_finance_contract_output_signed_on\"]");
    UIElement signatory = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_finance_contract_output\"]/div[1]/div[2]/div/div/div[1]");
    UIElement name = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_finance_contract_output_client_contract_attributes_name\"]");
    UIElement annualValue = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_finance_contract_output_client_contract_attributes_annual_value\"]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_finance_contract_output\"]/div[3]/input");
    UIElement markMoneyReceived = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[1]/div/div[2]/div/a");

    public void selectSignedOnDateForTheContract() {
        tDriver.myFinanceContractSignedOnDate(signedOn);
    }

    public void selectAmuraSignatory() {
        tDriver.myFinanceContractSignatory(signatory);
    }

    public void enterNameOfTheContract(String arg0) {
        tDriver.myType(name,arg0);
    }

    public void enterAnnualValue(String arg0) {
        tDriver.myType(annualValue,arg0);
    }

    public void clickSaveButtonFinanceContractPaymentDetails() {
        tDriver.myclicking(save);
    }

    public void clickMarkAsMoneyReceived() {
        tDriver.myclicking(markMoneyReceived);
    }
}
